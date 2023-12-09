import { ReactComponent as DotsSVG } from '../../../assets/svg/dots-icon.svg';
import { ReactComponent as SearchSVG } from '../../../assets/svg/search-icon.svg';
import { ReactComponent as SortSVG } from '../../../assets/svg/sort-icon.svg';
import { ReactComponent as CheckSVG } from '../../../assets/svg/check-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/svg/delete-icon.svg';
import { ReactComponent as EmailSVG } from '../../../assets/svg/email-icon.svg';
import { ReactComponent as PasswordSVG } from '../../../assets/svg/password-icon.svg';
import { ReactComponent as EditSVG } from '../../../assets/svg/edit-icon.svg';
import { ReactComponent as CancelSVG } from '../../../assets/svg/cancel-icon.svg';
import { ReactComponent as ArrowSVG } from '../../../assets/svg/arrow-icon.svg';
import { ReactComponent as BackSVG } from '../../../assets/svg/back-icon.svg';
import { ReactComponent as StarSVG } from '../../../assets/svg/star-icon.svg';
import { ReactComponent as GoogleSVG } from '../../../assets/svg/google-icon.svg';

const iconNames = {
  dots: props => <DotsSVG {...props} />,
  search: props => <SearchSVG {...props} />,
  sort: props => <SortSVG {...props} />,
  check: props => <CheckSVG {...props} />,
  delete: props => <DeleteSVG {...props} />,
  email: props => <EmailSVG {...props} />,
  password: props => <PasswordSVG {...props} />,
  edit: props => <EditSVG {...props} />,
  cancel: props => <CancelSVG {...props} />,
  arrow: props => <ArrowSVG {...props} />,
  back: props => <BackSVG {...props} />,
  star: props => <StarSVG {...props} />,
  google: props => <GoogleSVG {...props} />,
};

export default iconNames;
