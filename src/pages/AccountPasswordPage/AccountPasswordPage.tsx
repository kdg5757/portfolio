import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Form, Input, Radio } from "antd";
import { DatePicker } from "antd-mobile";
import dayjs from "dayjs";

import BackButton from "~/components/BackButton";
import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import { useLoginMutation, useSignUpMutation } from "~/hooks";
import { ROUTES } from "~/router";

import { contentStyle } from "./AccountPasswordPage.styles";

type Props = Record<string, never>;

const AccountPasswordPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const {
    state: { isEntry, phoneNumber },
  } = useLocation();
  const { mutate: signUp, isPending: isSignUpPending } = useSignUpMutation();
  const { mutate: login, isPending: isLoginPending } = useLoginMutation();
  const [form] = Form.useForm<{
    password: string;
    passwordConfirm?: string;
    birthday?: string;
    gender?: string;
  }>();
  const password = Form.useWatch("password", form);
  const passwordConfirm = Form.useWatch("passwordConfirm", form);
  const birthday = Form.useWatch("birthday", form);
  const gender = Form.useWatch("gender", form);
  const [isValid, setIsValid] = useState(false);
  const [openPicker, setOpenPicker] = useState(false);
  const isDisabled = useMemo(
    () => !isValid || isLoginPending || isSignUpPending,
    [isValid, isSignUpPending, isLoginPending],
  );

  const checkValidate = useCallback(async (): Promise<void> => {
    try {
      await form.validateFields({ validateOnly: true });
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  }, [form]);

  useEffect(() => {
    checkValidate();
  }, [checkValidate, password, birthday, gender, passwordConfirm]);

  const openDatePicker = (): void => setOpenPicker(!openPicker);

  const onSubmit = (): void => {
    if (!password) {
      return;
    }

    if (isEntry) {
      signUp(
        { phoneNumber, password },
        {
          onSuccess: () => {
            navigate(`/${ROUTES.ACCOUNT_OTP_PAGE}`, {
              state: { phoneNumber, password, birthday, gender },
            });
          },
        },
      );
      return;
    }

    login(
      { phoneNumber, password },
      {
        onSuccess: () => {
          navigate(`/${ROUTES.ACCOUNT_OTP_PAGE}`, {
            state: { phoneNumber, password },
          });
        },
      },
    );
  };

  return (
    <Layout>
      <Header left={<BackButton />}>
        {isEntry ? "情報入力" : "パスワード入力"}
      </Header>
      <Content css={contentStyle}>
        <Form form={form}>
          <Form.Item
            label="パスワード"
            name="password"
            validateFirst
            rules={[
              { required: true, message: "パスワードを入力してください" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {isEntry ? (
            <Form.Item
              label="パスワード（確認）"
              name="passwordConfirm"
              validateFirst
              rules={[
                {
                  required: true,
                  message: "パスワード（確認）を入力してください",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("パスワードが一致しません"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          ) : null}
          {isEntry ? (
            <Form.Item
              label="生年月日"
              name="birthday"
              rules={[
                { required: true, message: "生年月日を選択してください" },
              ]}
            >
              <Button onClick={openDatePicker}>
                {birthday ?? "0000-00-00"}
              </Button>
            </Form.Item>
          ) : null}
          {isEntry ? (
            <Form.Item
              label="性別"
              name="gender"
              rules={[{ required: true, message: "性別を選択してください" }]}
            >
              <Radio.Group>
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
                <Radio value="unknown">不回答</Radio>
              </Radio.Group>
            </Form.Item>
          ) : null}
        </Form>
        <DatePicker
          confirmText="確認"
          cancelText="キャンセル"
          visible={openPicker}
          onClose={() => {
            setOpenPicker(false);
          }}
          min={new Date("1900-01-01")}
          precision="day"
          defaultValue={new Date("1980-01-01")}
          onConfirm={(val) => {
            const date = dayjs(val.toDateString());
            form.setFieldValue("birthday", date.format("YYYY-MM-DD"));
          }}
        />
      </Content>
      <Footer>
        <Button type="primary" block onClick={onSubmit} disabled={isDisabled}>
          次へ
        </Button>
      </Footer>
    </Layout>
  );
};

export default AccountPasswordPage;
