import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import SkillLevelCard from "./components/SkillLevelCard";
import { gridStyle, sectionStyle } from "./SkillSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const SkillSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="skill" css={sectionStyle} {...props}>
    <Title tag="h2">Skill</Title>
    <div css={gridStyle}>
      <SkillLevelCard title="Javascript" percent={85} />
      <SkillLevelCard title="React" percent={80} />
      <SkillLevelCard title="Typescript" percent={80} />
      <SkillLevelCard title="PHP" percent={65} />
    </div>
  </ContentSection>
);

export default SkillSection;
