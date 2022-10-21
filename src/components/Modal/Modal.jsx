import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay, Modal } from './Modal.styled';
export default function ModalBox({ image, onModalClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return window.addEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onModalClose();
    }
  };
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };
  return (
    <Overlay onClick={handleBackDropClick}>
      <Modal>
        <img src={image} alt="" />
      </Modal>
    </Overlay>
  );
}
ModalBox.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
