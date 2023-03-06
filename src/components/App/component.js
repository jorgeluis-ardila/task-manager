import React from 'react';
import { ResponsiveRender, ModalContent } from './responsive';
import { Modal } from '../Modal';
import { firebaseConfig } from '../../utils/config/configFirebase.js';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig);

function AppUI() {

  return (
    <>
      <ResponsiveRender/>

      <Modal>
        <ModalContent/>
      </Modal>

    </>
  );
}

export { AppUI }