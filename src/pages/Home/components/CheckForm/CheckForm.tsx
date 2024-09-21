import { ChangeEvent, useMemo, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";

import Styles from "./CheckForm.module.scss";

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
      <div className={Styles.area} {...props}>
        <Input
          className={Styles.input}
          type="number"
          placeholder="番号を入力"
          onChange={onChange}
        />
        <Button
          className={Styles.button}
          onClick={onSubmit}
          isDisabled={isDisabled}
        >
          確認
        </Button>
      </div>
      {error && <p className={Styles.caution}>※正しい番号を入力してください</p>}
    </div>
  );
};

export default CheckForm;
