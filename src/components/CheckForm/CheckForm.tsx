import { ChangeEvent, useMemo, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";

import {
  areaStyle,
  buttonStyle,
  cautionStyle,
  inputStyle,
} from "./CheckForm.styles";

type Props = {
  error?: boolean;
  onChecker: (number: string) => void;
};

const CheckForm: React.FC<Props> = ({ onChecker, error, ...props }) => {
  const [number, setNumber] = useState<string>("");
  const isDisabled = useMemo(() => {
    return !number;
  }, [number]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target!.value);
  };

  const onSubmit = () => onChecker(number);

  return (
    <div>
      <div css={areaStyle} {...props}>
        <Input
          css={inputStyle}
          type="number"
          placeholder="番号を入力"
          onChange={onChange}
        />
        <Button css={buttonStyle} onClick={onSubmit} isDisabled={isDisabled}>
          確認
        </Button>
      </div>
      {error && <p css={cautionStyle}>※正しい番号を入力してください</p>}
    </div>
  );
};

export default CheckForm;
