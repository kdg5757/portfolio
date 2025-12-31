import { MailOutlined } from "@ant-design/icons";

import Button from "~/components/Button";
import Description from "~/components/Description";
import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import {
  buttonStyle,
  descriptionStyle,
  sectionStyle,
} from "./ContactSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const EMAIL = "kdg5757@yahoo.co.jp";

const ContactSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="contact" css={sectionStyle} {...props}>
    <Title tag="h2">Contact</Title>
    <Description css={descriptionStyle}>
      新しい機会やエキサイティングなプロジェクトに常に興味を持っています。
      あなたのアイデアを実現する方法について話し合いましょう。
    </Description>
    <div>
      <Button
        type="dashed"
        css={buttonStyle}
        href={`mailto:${EMAIL}?subject=[PORTFOLIO] お問い合わせ`}
      >
        <MailOutlined />
        {EMAIL}
      </Button>
    </div>
  </ContentSection>
);

export default ContactSection;
