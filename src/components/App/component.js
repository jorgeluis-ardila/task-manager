import React from 'react';
import { ResponsiveRender } from './responsive';
import { Modal } from '../Modal';
import { CreateForm } from '../Modal/CreateForm';

function AppUI() {

  return (
    <React.Fragment>
      <ResponsiveRender/>

      <Modal>
        <CreateForm/>
      </Modal>

    </React.Fragment>
  );
}

export { AppUI }