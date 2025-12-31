import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import SkillLevelCard from "./components/SkillLevelCard";
import { skillLevelCardDataList } from "./constants";
import { gridStyle, sectionStyle } from "./SkillSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const SkillSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="skill" css={sectionStyle} {...props}>
    <Title tag="h2">Skill</Title>
    <div css={gridStyle}>
      {skillLevelCardDataList.map((data, index) => (
        <SkillLevelCard key={index} title={data.title} percent={data.percent} />
      ))}
    </div>
  </ContentSection>
);

export default SkillSection;
