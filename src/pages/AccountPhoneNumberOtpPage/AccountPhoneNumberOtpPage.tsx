import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Input } from "antd";

import BackButton from "~/components/BackButton";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import ResendButton from "~/components/ResendButton";
import {
  useConfirmLoginMutation,
  useConfirmSignUpMutation,
  useLoginMutation,
  useSignUpMutation,
} from "~/hooks";
import { ROUTES } from "~/router";

type Props = Record<string, never>;

type State = {
  phoneNumber: string;
  password: string;
  gender?: string;
  birthday?: string;
};

const AccountPhoneNumberOtpPage: React.FC<Props> = () => {
  const { state } = useLocation();
  if (!state?.phoneNumber) {
    throw new Error("phoneNumber is required");
  }

  const { phoneNumber, password, birthday, gender } = state as State;
  const navigate = useNavigate();
  const { mutate: signUp, isPending: isSignUpPending } = useSignUpMutation();
  const { mutate: login, isPending: isLoginPending } = useLoginMutation();
  const { mutate: confirmSignUp, isPending: isConfirmSignupPending } =
    useConfirmSignUpMutation();
  const { mutate: confirmLogin, isPending: isConfirmLoginPending } =
    useConfirmLoginMutation();
  const [otp, setOtp] = useState<string>("");
  const isDisabled = useMemo(
    () =>
      isConfirmSignupPending || isConfirmLoginPending || !/^\d{6}$/.test(otp),
    [isConfirmSignupPending, isConfirmLoginPending, otp],
  );

  const onResend = (): void => {
    if (!birthday && !gender) {
      login({ phoneNumber, password });
      return;
    }

    signUp({ phoneNumber, password });
  };

  const onSubmit = (): void => {
    if (!otp) {
      return;
    }

    if (!birthday && !gender) {
      confirmLogin(
        { code: otp },
        {
          onSuccess: () => {
            navigate(`/${ROUTES.TOP_PAGE}`);
          },
        },
      );
      return;
    }

    confirmSignUp(
      { code: otp },
      {
        onSuccess: () => {
          navigate(`/${ROUTES.TOP_PAGE}`);
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
