import { useNavigate } from "react-router-dom";

import Title from "~/components/Title";
import { AUTH_FLOW_ROUTES } from "~/router";

import ContentSection from "../ContentSection";
import SampleCard from "./components/SampleCard";
import { gridStyle, sectionStyle } from "./SampleSection.styles";

type Props = React.ComponentProps<typeof ContentSection>;

const SampleSection: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate();

  const toAuthFlow = (): void => {
    navigate(`/${AUTH_FLOW_ROUTES.ACCOUNT_PHONE_NUMBER_PAGE}`);
  };

  return (
    <ContentSection id="project" css={sectionStyle} {...props}>
      <Title tag="h2">Sample</Title>
      <div css={gridStyle}>
        <SampleCard
          title="認証機能"
          field="Webアプリケーション"
          description="電話番号によるユーザー認証機能を実装しました。"
          onClick={toAuthFlow}
        />
      </div>
    </ContentSection>
  );
};

export default SampleSection;
