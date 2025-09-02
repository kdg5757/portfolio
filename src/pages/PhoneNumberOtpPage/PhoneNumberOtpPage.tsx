import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Input } from "antd";
import { useSetAtom } from "jotai";

import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import ResendButton from "~/components/ResendButton";
import { useCheckPhoneNumberMutation, useConfirmSignUpMutation } from "~/hooks";
import { ROUTES } from "~/router";
import { userTokenAtom } from "~/store";

type Props = Record<string, never>;

const PhoneNumberOtpPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const {
    state: { phoneNumber },
  } = useLocation();
  const { mutate: checkPhoneNumber, isPending: isCheckPending } =
    useCheckPhoneNumberMutation();
  const { mutate: confirmSignUp, isPending: isConfirmPending } =
    useConfirmSignUpMutation();
  const setUserToken = useSetAtom(userTokenAtom);
  const [otp, setOtp] = useState<string>("");
  const isDisabled = useMemo(
    () => isConfirmPending || !/^\d{6}$/.test(otp),
    [isConfirmPending, otp],
  );

  if (!phoneNumber) {
    throw new Error("phoneNumber is required");
  }

  const onResend = (): void => {
    checkPhoneNumber({ phoneNumber });
  };

  const onSubmit = (): void => {
    if (!otp) {
      return;
    }

    confirmSignUp(
      { code: otp },
      {
        onSuccess: (response) => {
          setUserToken(response.data);
          navigate(`/${ROUTES.AUTH_SUCCESS_PAGE}`);
        },
      },
    );
  };

  return (
    <Layout>
      <Header>SMS認証</Header>
      <Content>
        <div>{phoneNumber}</div>
        <div>の電話番号にSMSコードを送信しました</div>
        <div>6桁の認証コードを入力してください</div>
        <Input.OTP
          data-testid="otp-input"
          length={6}
          onInput={(val) => {
            setOtp(val.join(""));
          }}
        />
        <div>
          <ResendButton
            limit={60}
            onClick={onResend}
            disabled={isCheckPending}
          />
        </div>
      </Content>
      <Footer>
        <Button type="primary" block onClick={onSubmit} disabled={isDisabled}>
          次へ
        </Button>
      </Footer>
    </Layout>
  );
};

export default PhoneNumberOtpPage;
