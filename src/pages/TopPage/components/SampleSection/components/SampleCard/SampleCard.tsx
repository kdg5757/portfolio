import { ArrowRightOutlined } from "@ant-design/icons";
import { Interpolation } from "@emotion/react";

import Title from "~/components/Title";
import { DefaultTheme } from "~/models";

import ColumnBox from "../../../ColumnBox";
import {
  buttonStyle,
  cardStyle,
  contentStyle,
  descriptionStyle,
  featureStyle,
  fieldStyle,
  listStyle,
  smallTitleStyle,
  technologyStyle,
  titleStyle,
} from "./SampleCard.styles";

type Props = {
  title: string;
  field: string;
  description: string;
  technologies?: string[];
  features?: string[];
  onClick?: () => void;
  css?: Interpolation<DefaultTheme>;
};

const SampleCard: React.FC<Props> = ({
  title,
  field,
  description,
  technologies,
  features,
  onClick,
  css,
  ...props
}) => (
  <ColumnBox css={[cardStyle, css]} {...props}>
    <button type="button" css={buttonStyle} onClick={onClick}>
      <div css={contentStyle}>
        <Title tag="h3" css={titleStyle}>
          {title}
        </Title>
        <div css={fieldStyle}>{field}</div>
        <p css={descriptionStyle}>{description}</p>
        {technologies?.length ? (
          <div>
            <Title tag="h4" css={smallTitleStyle}>
              使用技術
            </Title>
            <ul css={listStyle}>
              {technologies.map((name, index) => (
                <li key={index} css={technologyStyle}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {features?.length ? (
          <div>
            <Title tag="h4" css={smallTitleStyle}>
              実装機能
            </Title>

            <ul css={listStyle}>
              {features.map((name, index) => (
                <li key={index} css={featureStyle}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <ArrowRightOutlined style={{ fontSize: "1.25rem" }} />
    </button>
  </ColumnBox>
);

export default SampleCard;
