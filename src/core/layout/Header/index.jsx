import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Greeting, SearchBar } from './components';
import { useData } from 'providers/context';
import { HeaderWrapper } from './style';

const Header = ({ isNotFound }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const { searchTerm, onChangeSearchTerm, defineCurrentCategory, defineCurrentTask, currentTask } = useData();

  const showBack = isNotFound ? false : !!Object.keys(params).length;
  const isEdit = location.pathname.split('/').pop() === 'edit';
  const fromPath = isEdit
    ? `/c/${params.categorySlug}/t/${params.taskSlug}`
    : params.taskSlug
    ? `/c/${params.categorySlug}`
    : `/`;
  const showSearch = isNotFound ? false : !params.taskSlug;

  const handleGoBack = () => {
    if (!isEdit) {
      if (currentTask) {
        defineCurrentTask();
      } else {
        defineCurrentCategory();
      }
    }
    navigate(fromPath);
  };

  return (
    <HeaderWrapper>
      <Greeting userData={{}} onGoBack={handleGoBack} onOpenProfile={() => null} showBack={showBack} />
      {showSearch && <SearchBar searchValue={searchTerm} onChangeSearchValue={onChangeSearchTerm} />}
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isNotFound: PropTypes.bool,
};

export { Header };
