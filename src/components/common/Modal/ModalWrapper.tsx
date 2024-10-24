import React from 'react';
import Modal from 'react-modal';
import Button from '../form/Button';
Modal.setAppElement('#root');

interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="modal"
      overlayClassName="modal__overlay"
    >
      <div className='modal__content'>
        <div className='modal__header'>
          <h2 className='modal__title'>{title}</h2>
          <Button 
            onClick={onRequestClose} 
            className="button__icon button__icon-close button__icon-close--modal modal__close"
          />
        </div>
        {children}
        
      </div>
    </Modal>
  );
};

export default ModalWrapper;
