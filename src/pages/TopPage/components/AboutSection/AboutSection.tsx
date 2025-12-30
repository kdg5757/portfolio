import Title from "~/components/Title";

import ColumnBox from "../ColumnBox";
import ContentSection from "../ContentSection";
import SectionDescription from "../SectionDescription";
import {
  columnStyle,
  columnTitleStyle,
  listStyle,
  sectionStyle,
  titleStyle,
} from "./AboutSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const AboutSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="about" css={sectionStyle} {...props}>
    <Title tag="h2" css={titleStyle}>
      About
    </Title>
    <SectionDescription>
      2015年にコーダーとしてIT業界に入門し、現在はWebアプリケーションをメインで開発をしているフロントエンドエンジニアです。
      必要によって最新技術を学習しますが、それよりサービスを安定させることや、デザインや機能を正確に実現することが好きです。
    </SectionDescription>
    <SectionDescription>
      コーディング以外の時間には、運動や体を使うことをすることで、頭を休ませてよりいいアイデアが出るようにしています。
    </SectionDescription>
    <ColumnBox css={columnStyle}>
      <Title tag="h3" css={columnTitleStyle}>
        基本情報
      </Title>
      <ul css={listStyle}>
        <li>10年以上の経験</li>
        <li>東京在住</li>
        <li>日本永住権所有</li>
        <li>運動好き</li>
      </ul>
    </ColumnBox>
  </ContentSection>
);

export default AboutSection;
