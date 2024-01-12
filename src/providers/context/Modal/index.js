import { createContext, useContext, useEffect, useState } from 'react';
import { Modal, TopAlert } from 'core';
import { useLocation } from 'react-router-dom';

const ModalContext = createContext();

const INITIALSTATE = {
  isModalOpen: false,
  modalContent: { content: null, type: '', hasChanged: false },
};

export const ModalProvider = ({ children }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(INITIALSTATE.isModalOpen);
  const [modalContent, setModalContent] = useState(INITIALSTATE.modalContent);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const clearAlertText = () => {
    const windowState = window.history?.state;
    if (windowState) delete windowState.usr.alert;
    window.history.replaceState({ ...windowState }, document.title);
  };

  useEffect(() => {
    if (location.state?.alert) {
      console.log('EFFECT ALERT');
      setAlertText(location.state.alert);
      setShowAlert(true);
      setTimeout(() => {
        clearAlertText();
        setShowAlert(false);
        setAlertText('');
      }, 5000);
    }
  }, [alertText, location.state?.alert]);

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

  const onOpenAlert = text => {
    setShowAlert(true);
    setAlertText(text);
  };

  const onCloseAlert = () => {
    clearAlertText();
    setShowAlert(false);
    setTimeout(() => {
      setAlertText('');
    }, 500);
  };

  const modalActions = {
    open: onOpenModal,
    close: onCloseModal,
    change: onChangeContent,
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, modalActions, onOpenAlert }}>
      <TopAlert show={showAlert} text={alertText} onClose={onCloseAlert} />
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
