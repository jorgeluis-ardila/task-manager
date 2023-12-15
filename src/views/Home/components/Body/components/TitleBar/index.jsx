import { useData } from 'providers/context';
import { useModal } from 'providers/context';
import { IconButton } from 'core';
import { EditForm } from '..';
import { Title, BoardProgressBar } from './components';
import { StyledHeader } from './style';

const TitleBar = () => {
  const { modalActions } = useModal();
  const { currentCategory, data } = useData();

  const handleEditCategory = () => {
    modalActions.open(<EditForm />, 'edit');
  };

  return (
    <>
      <StyledHeader>
        <div className="title-container">
          <Title totalCategories={data.length} currentCategory={currentCategory} />
          {currentCategory && <IconButton iconType="edit" className="edit-button" onClick={handleEditCategory} />}
        </div>
        <IconButton variant="filter" iconType="sort" className="sort-button" />
      </StyledHeader>
      <BoardProgressBar currentCategory={currentCategory} />
    </>
  );
};

export { TitleBar };
