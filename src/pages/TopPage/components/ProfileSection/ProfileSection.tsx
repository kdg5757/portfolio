import { ArrowRightOutlined, StarOutlined } from "@ant-design/icons";

import Button from "~/components/Button";

import ContentSection from "../ContentSection";
import NameIcon from "./components/NameIcon";
import {
  buttonAreaStyle,
  descriptionStyle,
  titleStyle,
} from "./ProfileSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProfileSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="profile" {...props}>
    <NameIcon name="金" />
    <h1 css={titleStyle}>金東建</h1>
    <p css={descriptionStyle}>
      クライアントの要望を現実に実現したいフロントエンドエンジニアを目指す
    </p>
    <div css={buttonAreaStyle}>
      <Button type="primary" href="#contact">
        お問い合わせ
        <ArrowRightOutlined />
      </Button>
      <Button type="dashed" href="#project">
        作品を見る
        <StarOutlined />
      </Button>
    </div>
  </ContentSection>
);

export default ProfileSection;
