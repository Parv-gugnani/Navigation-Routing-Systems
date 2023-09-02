import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={<Buttonprimary>I accept</Buttonprimary>}
    >
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <button onClick={handleClick} primary>
        Open Modal
      </button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
