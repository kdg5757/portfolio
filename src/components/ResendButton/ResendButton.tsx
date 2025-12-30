import { useEffect, useState } from "react";

type Props = {
  limit: number;
  disabled?: boolean;
  onClick: () => void;
};

const ResendButton: React.FC<Props> = ({ limit, disabled, onClick }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count > 0) {
      timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
    return (): void => clearInterval(timer);
  }, [count]);

  const handleClick = (): void => {
    onClick();
    setCount(limit);
  };

  return (
    <button
      type="button"
      disabled={count > 0 || disabled}
      onClick={handleClick}
    >
      {count > 0 ? `${count}秒後に再送信可能` : "再送信"}
    </button>
  );
};

export default ResendButton;
