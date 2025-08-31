import Styles from "./Home.module.scss";

type Props = Record<string, never>;

const Home: React.FC<Props> = ({}) => {
  return (
    <>
      <h1 className={Styles.mainTitle}>Home</h1>
    </>
  );
};

export default Home;
