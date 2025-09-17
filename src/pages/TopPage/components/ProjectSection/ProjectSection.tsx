import ContentSection from "../ContentSection";
import { sectionStyle } from "./ProjectSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProjectSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="project" css={sectionStyle} {...props}>
    Project
  </ContentSection>
);

export default ProjectSection;
