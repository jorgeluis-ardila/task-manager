import { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useData, useModal } from 'providers/context';
import { IconButton } from 'core';
import { ActionsWrapper, Wrapper } from './style';
import { EditForm, View } from './components';

const Overview = ({ isEditingEnabled }) => {
  const { modalActions } = useModal();
  const { currentCategory, categoryActions } = useData();
  const [isEditing, setIsEditing] = useState(isEditingEnabled);

  const handleClose = () => modalActions.close();
  const handleEdit = () => setIsEditing(prevState => !prevState);

  return (
    <Wrapper>
      <ActionsWrapper className={cn({ editing: isEditing })}>
        <IconButton iconType="cancel" className="close" onClick={handleClose} />
        <IconButton iconType={isEditing ? 'backArrow' : 'edit'} className="edit" onClick={handleEdit} />
      </ActionsWrapper>
      <p className="active-tasks">
        <span>{currentCategory.totalTasks - currentCategory.completedTasks} </span>
        Tareas Activas
      </p>
      {isEditing ? (
        <EditForm
          currentCategory={currentCategory}
          actions={{
            categoryActions,
            modalActions,
          }}
          onEdit={setIsEditing}
        />
      ) : (
        <View currentCategory={currentCategory} />
      )}
    </Wrapper>
  );
};

Overview.protoTypes = {
  isEditingEnabled: PropTypes.bool,
};

export { Overview };
