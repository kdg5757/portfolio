import { Button, Modal } from "antd";

type Props = {
  isOpen?: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
};

const ErrorPopup: React.FC<Props> = ({ isOpen, title, message, onClose }) => (
  <Modal
    centered
    title={title}
    open={isOpen}
    footer={
      <Button type="primary" onClick={onClose}>
        閉じる
      </Button>
    }
  >
    <p>{message}</p>
  </Modal>
);

export default ErrorPopup;
