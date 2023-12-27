import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { Button, IconButton } from 'core';
import { AletWrapper, ButtonsWrapper } from './style';
import { MODAL_TEXT } from './constants';

const Alert = ({ title, textType, onAccept, onCancel }) => {
  const { modalActions } = useModal();

  const handleAccept = () => {
    onAccept();
    modalActions.close();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      modalActions.close();
    }
  };

  const Text = MODAL_TEXT[textType]();

  return (
    <AletWrapper>
      <h4>{title}</h4>
      <p className="message">{Text}</p>
      <p className="confirmation">¿Quieres continuar?</p>
      <ButtonsWrapper>
        <Button className="accept-button" variant="action" onClick={handleAccept}>
          Aceptar
        </Button>
        <IconButton type="reset" variant="delete" iconType="cancel" onClick={handleCancel} />
      </ButtonsWrapper>
    </AletWrapper>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  textType: PropTypes.string,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
};

export { Alert };
