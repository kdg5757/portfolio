import ContentSection from "../ContentSection";
import { sectionStyle } from "./ProfileSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const ProfileSection: React.FC<Props> = ({ ...props }) => (
  <ContentSection id="profile" css={sectionStyle} {...props}>
    Profile
  </ContentSection>
);

export default ProfileSection;
