import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Input } from "antd";
import { useSetAtom } from "jotai";

import BackButton from "~/components/BackButton";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import ResendButton from "~/components/ResendButton";
import {
  useConfirmSignUpMutation,
  useLoginMutation,
  useSignUpMutation,
} from "~/hooks";
import { ROUTES } from "~/router";
import { userTokenAtom } from "~/store";

type Props = Record<string, never>;

const AccountPhoneNumberOtpPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const {
    state: { phoneNumber, password, birthday, gender },
  } = useLocation();
  const { mutate: signUp, isPending: isSignUpPending } = useSignUpMutation();
  const { mutate: login, isPending: isLoginPending } = useLoginMutation();
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
    if (birthday || gender) {
      login({ phoneNumber, password });
      return;
    }

    signUp({ phoneNumber, password });
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
          navigate(`/${ROUTES.ACCOUNT_ENTRY_SUCCESS_PAGE}`);
        },
      },
    );
  };

  return (
    <Layout>
      <Header left={<BackButton />}>SMS認証</Header>
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
            disabled={isSignUpPending || isLoginPending}
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

export default AccountPhoneNumberOtpPage;
