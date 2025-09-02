import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input } from "antd";

import Content from "~/components/Content";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Layout from "~/components/Layout";
import { useCheckPhoneNumberMutation } from "~/hooks";
import { ROUTES } from "~/router";

import { contentStyle } from "./PhoneNumberPage.styles";

type Props = Record<string, never>;

const PhoneNumberPage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { mutate: checkPhoneNumber, isPending } = useCheckPhoneNumberMutation();
  const [form] = Form.useForm<{ phoneNumber: string }>();
  const phoneNumber = Form.useWatch("phoneNumber", form);
  const [isValid, setIsValid] = useState(false);
  const isDisabled = useMemo(() => isPending || !isValid, [isPending, isValid]);

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
  }, [checkValidate, phoneNumber]);

  const onSubmit = (): void => {
    if (!phoneNumber) {
      return;
    }

    checkPhoneNumber(
      { phoneNumber },
      {
        onSuccess: () => {
          navigate(`/${ROUTES.PASSWORD_INPUT_PAGE}`, {
            state: { phoneNumber },
          });
        },
        onError: () => {
          // TODO: エラーの場合は、パスワード＋生年月日＋性別入力画面へ遷移するようにする
        },
      },
    );
  };

  return (
    <Layout>
      <Header>電話番号入力</Header>
      <Content css={contentStyle}>
        <Form form={form}>
          <Form.Item
            label="電話番号入力"
            name="phoneNumber"
            validateFirst
            rules={[
              { required: true, message: "電話番号を入力してください" },
              {
                pattern: /^0\d{9,10}$/,
                message: "正しい電話番号を入力してください",
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>
        </Form>
      </Content>
      <Footer>
        <Button type="primary" block onClick={onSubmit} disabled={isDisabled}>
          次へ
        </Button>
      </Footer>
    </Layout>
  );
};

export default PhoneNumberPage;
