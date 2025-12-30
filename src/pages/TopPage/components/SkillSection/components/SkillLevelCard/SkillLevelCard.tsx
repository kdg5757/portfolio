import { Interpolation } from "@emotion/react";

import Title from "~/components/Title";
import { DefaultTheme } from "~/models";

import {
  barFillStyle,
  barTrackStyle,
  cardStyle,
  percentStyle,
  titleContainerStyle,
  titleStyle,
} from "./SkillLevelCard.styles";

type Props = {
  title: string;
  percent: number;
  css?: Interpolation<DefaultTheme>;
};

const SkillLevelCard: React.FC<Props> = ({ title, percent, css, ...props }) => (
  <div css={[cardStyle, css]} {...props}>
    <div css={titleContainerStyle}>
      <Title tag="span" css={titleStyle}>
        {title}
      </Title>
      <span css={percentStyle}>{percent}%</span>
    </div>
    <div css={barTrackStyle}>
      <div css={barFillStyle(percent)} />
    </div>
  </div>
);

export default SkillLevelCard;
