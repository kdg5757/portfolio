import ContentSection from "../ContentSection";
import { sectionStyle } from "./SkillSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const SkillSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="skill" css={sectionStyle} {...props}>
    Skill
  </ContentSection>
);

export default SkillSection;
