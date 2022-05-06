import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

type Props = {
  className: string;
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
};

const Modal = ({ className, show, onHide, children }: Props) => (
  <BootstrapModal
    className={className}
    show={show}
    onBlur={() => console.log('modal on blur')}
    // onHide={() => console.log('modal on hide')}
    onHide={onHide}
  >
    { show && children }
    <button
      type="button"
      className="btn-close close-modal-button"
      aria-label="Close"
      onClick={onHide}
      // onTouchEnd={onHide}
      // onMouseUp={onHide}
    />
  </BootstrapModal>
);

export default Modal;
