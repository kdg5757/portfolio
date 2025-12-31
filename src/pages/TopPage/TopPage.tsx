import Content from "~/components/Content";
import Description from "~/components/Description";
import Footer from "~/components/Footer";
import Layout from "~/components/Layout";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import GlobalHeader from "./components/GlobalHeader";
import MenuLink from "./components/MenuLink";
import ProfileSection from "./components/ProfileSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { contentStyle, footerStyle, headerStyle } from "./TopPage.styles";

type Props = Record<string, never>;

const Home: React.FC<Props> = ({ ...props }) => (
  <Layout {...props}>
    <GlobalHeader title="PortFolio" css={headerStyle}>
      <MenuLink name="Profile" to="#profile" />
      <MenuLink name="About" to="#about" />
      <MenuLink name="Project" to="#project" />
      <MenuLink name="Skill" to="#skill" />
      <MenuLink name="Contact" to="#contact" />
    </GlobalHeader>
    <Content css={contentStyle}>
      <ProfileSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </Content>
    <Footer css={footerStyle}>
      <Description>copyright (c) 金 東建 all rights reserved.</Description>
    </Footer>
  </Layout>
);

export default Home;
