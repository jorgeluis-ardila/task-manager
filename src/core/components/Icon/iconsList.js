import { ReactComponent as MenuHSVG } from '../../../assets/svg/dots-h-icon.svg';
import { ReactComponent as ManuVSVG } from '../../../assets/svg/dots-v-icon.svg';
import { ReactComponent as SearchSVG } from '../../../assets/svg/search-icon.svg';
import { ReactComponent as SortSVG } from 'assets/svg/sort-icon.svg';
import { ReactComponent as CheckSVG } from '../../../assets/svg/check-icon.svg';
import { ReactComponent as DeleteSVG } from '../../../assets/svg/delete-icon.svg';
import { ReactComponent as EmailSVG } from '../../../assets/svg/email-icon.svg';
import { ReactComponent as PasswordSVG } from '../../../assets/svg/password-icon.svg';
import { ReactComponent as EditSVG } from 'assets/svg/edit-icon.svg';
import { ReactComponent as CancelSVG } from '../../../assets/svg/cancel-icon.svg';
import { ReactComponent as AddSVG } from '../../../assets/svg/add-icon.svg';
import { ReactComponent as ArrowSVG } from '../../../assets/svg/arrow-icon.svg';
import { ReactComponent as BackSVG } from '../../../assets/svg/back-icon.svg';
import { ReactComponent as StarSVG } from '../../../assets/svg/star-icon.svg';
import { ReactComponent as GoogleSVG } from '../../../assets/svg/google-icon.svg';
import { ReactComponent as DetailsSVG } from 'assets/svg/details-icon.svg';
import { ReactComponent as SquareViewSVG } from 'assets/svg/squareView-icon.svg';
import { ReactComponent as LineViewSVG } from 'assets/svg/lineView-icon.svg';
import { ReactComponent as SortAceSVG } from 'assets/svg/sortAce-icon.svg';
import { ReactComponent as SortDecSVG } from 'assets/svg/sortDec-icon.svg';
import { ReactComponent as SortDateAceSVG } from 'assets/svg/sortDateAce-icon.svg';
import { ReactComponent as SortDateDecSVG } from 'assets/svg/sortDateDec-icon.svg';

const iconNames = {
  menuh: props => <MenuHSVG {...props} />,
  menuv: props => <ManuVSVG {...props} />,
  search: props => <SearchSVG {...props} />,
  filters: props => <SortSVG {...props} />,
  check: props => <CheckSVG {...props} />,
  delete: props => <DeleteSVG {...props} />,
  email: props => <EmailSVG {...props} />,
  password: props => <PasswordSVG {...props} />,
  edit: props => <EditSVG {...props} />,
  cancel: props => <CancelSVG {...props} />,
  add: props => <AddSVG {...props} />,
  arrow: props => <ArrowSVG {...props} />,
  back: props => <BackSVG {...props} />,
  star: props => <StarSVG {...props} />,
  google: props => <GoogleSVG {...props} />,
  details: props => <DetailsSVG {...props} />,
  squareView: props => <SquareViewSVG {...props} />,
  lineView: props => <LineViewSVG {...props} />,
  ascSort: props => <SortAceSVG {...props} />,
  decSort: props => <SortDecSVG {...props} />,
  ascDateSort: props => <SortDateAceSVG {...props} />,
  decDateSort: props => <SortDateDecSVG {...props} />,
};

export default iconNames;
