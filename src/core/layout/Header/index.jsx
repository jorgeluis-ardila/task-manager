import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Greeting, SearchBar } from './components';
import { useAuth, useData } from 'providers/context';
import { HeaderWrapper } from './style';

const Header = ({ isNotFound }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const { userData, logOut } = useAuth();
  const { searchTerm, onChangeSearchTerm, defineCurrentCategory, defineCurrentTask, currentTask } = useData();

  const showBack = isNotFound ? false : !!Object.keys(params).length || location.pathname === '/boards';
  const isEdit = location.pathname.split('/').pop() === 'edit';
  const showSearch = isNotFound || location.pathname === '/' ? false : !params.taskSlug;
  const locationFrom = location.state?.from?.pathname;
  const fromPath = isEdit
    ? `/boards/${params.categorySlug}/t/${params.taskSlug}`
    : locationFrom ?? (params.taskSlug ? `/boards/${params.categorySlug}` : params.categorySlug ? `/boards` : '/');

  const handleGoBack = () => {
    if (!isEdit) {
      if (locationFrom) {
        defineCurrentTask();
        defineCurrentCategory();
      } else if (currentTask) {
        defineCurrentTask();
      } else {
        defineCurrentCategory();
      }
      navigate(fromPath);
    } else {
      navigate(fromPath, { state: { from: location.state?.from } });
    }
  };

  return (
    <HeaderWrapper>
      <Greeting userData={userData} onGoBack={handleGoBack} onOpenProfile={logOut} showBack={showBack} />
      {showSearch && <SearchBar searchValue={searchTerm} onChangeSearchValue={onChangeSearchTerm} />}
    </HeaderWrapper>
  );
};

Header.propTypes = {
  isNotFound: PropTypes.bool,
};

export { Header };
