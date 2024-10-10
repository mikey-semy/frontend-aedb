import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import Button from '../../Form/Button';
import FormAddManual from '../Forms/FormAddManual';
import { manualsApi } from '../../../api';
import { Manual } from '../../../types/manuals/manual'

interface ModalAddManualProps {
  onSuccess: () => void;
}

const ModalAddManual: React.FC<ModalAddManualProps> = ({ onSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    closeModal();
  };
  const handleSubmit = async (manual: Manual) => {

    try {
      await manualsApi.addManual(manual);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при добавлении инструкции:', error);
    }
  };
  
  return (
    <>
      <Button
        onClick={openModal} 
        className="button__icon button__icon-add"
      />
      <ModalWrapper
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        title="Добавить инструкцию"
      >
          <FormAddManual 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} />
      </ModalWrapper>
      </>
  );
};

export default ModalAddManual;