import { Interpolation } from "@emotion/react";

import Title from "~/components/Title";
import { DefaultTheme } from "~/models";

import ColumnBox from "../../../ColumnBox";
import {
  cardStyle,
  contentStyle,
  descriptionStyle,
  featureStyle,
  fieldStyle,
  imageStyle,
  listStyle,
  smallTitleStyle,
  technologyStyle,
  titleStyle,
} from "./ProjectCard.styles";

type Props = {
  image: string;
  title: string;
  field: string;
  description: string;
  technologies?: string[];
  features?: string[];
  css?: Interpolation<DefaultTheme>;
};

const ProjectCard: React.FC<Props> = ({
  image,
  title,
  field,
  description,
  technologies,
  features,
  css,
  ...props
}) => (
  <ColumnBox css={[cardStyle, css]} {...props}>
    <div>
      <img css={imageStyle} src={image} alt={title} />
    </div>
    <div css={contentStyle}>
      <Title tag="h3" css={titleStyle}>
        {title}
      </Title>
      <div css={fieldStyle}>{field}</div>
      <p css={descriptionStyle}>{description}</p>
      <div>
        <Title tag="h4" css={smallTitleStyle}>
          使用技術
        </Title>
        {technologies?.length ? (
          <ul css={listStyle}>
            {technologies.map((name, index) => (
              <li key={index} css={technologyStyle}>
                {name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div>
        <Title tag="h4" css={smallTitleStyle}>
          実装機能
        </Title>
        {features?.length ? (
          <ul css={listStyle}>
            {features.map((name, index) => (
              <li key={index} css={featureStyle}>
                {name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  </ColumnBox>
);

export default ProjectCard;
