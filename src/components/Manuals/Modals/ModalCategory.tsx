import React, { useState } from 'react';
import ModalWrapper from '../../Modal/ModalWrapper';
import Button from '../../Form/Button';


interface Group {
  id?: number;
  name: string;  
}
interface ModalGroupProps {
  onSuccess: () => void;
}

const ModalGroup: React.FC<ModalGroupProps> = ({ onSuccess }) => {
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
  const handleSubmit = async (group: Group) => {

    try {
      await addGroup(group);
      closeModal();
      onSuccess(); 
    } catch (error) {
      console.error('Ошибка при добавлении группы:', error);
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
          <FormGroup 
            onSubmit={handleSubmit} 
            onCancel={handleCancel} />
      </ModalWrapper>
      </>
  );
};

export default ModalGroup;