import mockImage from "~/assets/images/mock-image.jpeg";
import Title from "~/components/Title";

import ContentSection from "../ContentSection";
import ProjectCard from "./components/ProjectCard";
import { gridStyle, sectionStyle } from "./ProjectSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProjectSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="project" css={sectionStyle} {...props}>
    <Title tag="h2">Project</Title>
    <div css={gridStyle}>
      <ProjectCard
        image={mockImage}
        title="大規模ECプラットフォーム"
        field="フロントエンド"
        description="月間100万PVの企業ECサイトの新機能開発を担当。ユーザー認証システム、決済フロー、在庫管理システムの設計・実装を行いました。"
        technologies={["React", "TypeScript", "Node.js"]}
        features={["ユーザー認証", "決済処理", "在庫管理"]}
      />
      <ProjectCard
        image={mockImage}
        title="大規模ECプラットフォーム"
        field="フロントエンド"
        description="月間100万PVの企業ECサイトの新機能開発を担当。ユーザー認証システム、決済フロー、在庫管理システムの設計・実装を行いました。"
        technologies={["React", "TypeScript", "Node.js"]}
        features={["ユーザー認証", "決済処理", "在庫管理"]}
      />
    </div>
  </ContentSection>
);

export default ProjectSection;
