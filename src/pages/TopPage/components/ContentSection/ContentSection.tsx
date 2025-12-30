import { sectionStyle } from "./ContentSection.styles";

type Props = React.ComponentProps<"section">;

const ContentSection: React.FC<Props> = ({ children, ...props }) => (
  <section css={sectionStyle} {...props}>
    {children}
  </section>
);

export default ContentSection;
