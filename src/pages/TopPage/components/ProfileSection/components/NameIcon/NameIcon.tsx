import { iconStyle } from "./NameIcon.styles";

type Props = React.ComponentProps<"div"> & {
  name: string;
};

const NameIcon: React.FC<Props> = ({ name, ...props }) => (
  <div css={iconStyle} {...props}>
    {name}
  </div>
);

export default NameIcon;
