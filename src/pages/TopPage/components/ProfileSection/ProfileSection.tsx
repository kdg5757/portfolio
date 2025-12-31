import { ArrowRightOutlined, StarOutlined } from "@ant-design/icons";

import Button from "~/components/Button";
import Description from "~/components/Description";
import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import NameIcon from "./components/NameIcon";
import {
  buttonAreaStyle,
  buttonStyle,
  descriptionStyle,
} from "./ProfileSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProfileSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="profile" {...props}>
    <NameIcon name="金" />
    <Title>金東建</Title>
    <Description css={descriptionStyle}>
      クライアントの要望を現実に実現したいフロントエンドエンジニアを目指す
    </Description>
    <div css={buttonAreaStyle}>
      <Button type="primary" css={buttonStyle} href="#contact">
        お問い合わせ
        <ArrowRightOutlined />
      </Button>
      <Button type="dashed" css={buttonStyle} href="#project">
        作品を見る
        <StarOutlined />
      </Button>
    </div>
  </ContentSection>
);

export default ProfileSection;
