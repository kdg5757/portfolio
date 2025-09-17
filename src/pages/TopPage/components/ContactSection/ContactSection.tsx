import ContentSection from "../ContentSection";
import { sectionStyle } from "./ContactSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ContactSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="contact" css={sectionStyle} {...props}>
    Contact
  </ContentSection>
);

export default ContactSection;
