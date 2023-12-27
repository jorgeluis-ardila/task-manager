import { createContext, useContext, useState } from 'react';
import { Modal } from 'core';

const ModalContext = createContext();

const INITIALSTATE = {
  isModalOpen: false,
  modalContent: { content: null, type: '', hasChanged: false },
};

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(INITIALSTATE.isModalOpen);
  const [modalContent, setModalContent] = useState(INITIALSTATE.modalContent);

  const onOpenModal = (modalContent, modalType) => {
    setIsModalOpen(true);
    setModalContent({ content: modalContent, type: modalType });
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalContent(INITIALSTATE.modalContent);
    }, 500);
  };

  const onChangeContent = (modalContent, modalType) => {
    setModalContent({ content: modalContent, type: modalType, hasChanged: true });
  };

  const modalActions = {
    open: onOpenModal,
    close: onCloseModal,
    change: onChangeContent,
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, modalActions }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
