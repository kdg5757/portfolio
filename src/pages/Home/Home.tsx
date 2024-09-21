import checkApi from "~/apis/checkApi";
import CheckForm from "./components/CheckForm";
import Styles from "./Home.module.scss";
import { useState } from "react";
import { API_STATUS } from "~/constants/status";

type Props = Record<string, never>;

const Home: React.FC<Props> = ({}) => {
  const [numberError, setNumberError] = useState(false);
  const onCheckNumber = async (number: string): Promise<void> => {
    setNumberError(false);
    const {
      data: { code, data },
    } = await checkApi.checkNumber({ number });
    if (API_STATUS.SUCCESS !== code) {
      setNumberError(true);
      return;
    }

    setNumberError(!data);
  };

  return (
    <>
      <h1 className={Styles.mainTitle}>Home</h1>
      <CheckForm onChecker={onCheckNumber} error={numberError} />
    </>
  );
};

export default Home;
