import Content from "~/components/Content";
import Layout from "~/components/Layout";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GlobalHeader from "./components/GlobalHeader";
import MenuLink from "./components/MenuLink";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { contentStyle, headerStyle } from "./TopPage.styles";

type Props = Record<string, never>;

const Home: React.FC<Props> = ({}) => (
  <Layout>
    <GlobalHeader title="PortFolio" css={headerStyle}>
      <MenuLink name="Profile" to="#profile" />
      <MenuLink name="aaa" to="#aaa" />
    </GlobalHeader>
    <Content css={contentStyle}>
      <ProfileSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </Content>
  </Layout>
);

export default Home;
