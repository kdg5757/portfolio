import ContentSection from "../ContentSection";
import { sectionStyle } from "./AboutSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const AboutSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="about" css={sectionStyle} {...props}>
    About
  </ContentSection>
);

export default AboutSection;
