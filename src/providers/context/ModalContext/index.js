import { createContext, useContext, useState } from 'react';
import { Modal } from 'core';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ isOpen: false, content: null, type: '' });

  const onOpenModal = (modalContent, modalType) => {
    setModalState({ isOpen: true, content: modalContent, type: modalType });
  };
  const onCloseModal = () => {
    setModalState(prevState => ({ ...prevState, isOpen: false }));
    setTimeout(() => {
      setModalState(prevState => ({ ...prevState, content: null, type: '' }));
    }, 500);
  };

  const modalActions = {
    open: onOpenModal,
    close: onCloseModal,
  };

  return (
    <ModalContext.Provider value={{ modalState, modalActions }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
