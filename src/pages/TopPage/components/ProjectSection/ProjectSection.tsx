import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import ProjectCard from "./components/ProjectCard";
import { projectCards } from "./constants";
import { gridStyle, sectionStyle } from "./ProjectSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProjectSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="project" css={sectionStyle} {...props}>
    <Title tag="h2">Project</Title>
    <div css={gridStyle}>
      {projectCards.map((card) => (
        <ProjectCard key={card.title} {...card} />
      ))}
    </div>
  </ContentSection>
);

export default ProjectSection;
