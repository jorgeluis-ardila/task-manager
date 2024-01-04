import { ReactComponent as MenuHSVG } from 'assets/icons/dots-h-icon.svg';
import { ReactComponent as ManuVSVG } from 'assets/icons/dots-v-icon.svg';
import { ReactComponent as SearchSVG } from 'assets/icons/search-icon.svg';
import { ReactComponent as SortSVG } from 'assets/icons/sort-icon.svg';
import { ReactComponent as CheckSVG } from 'assets/icons/check-icon.svg';
import { ReactComponent as DeleteSVG } from 'assets/icons/delete-icon.svg';
import { ReactComponent as EmailSVG } from 'assets/icons/email-icon.svg';
import { ReactComponent as PasswordSVG } from 'assets/icons/password-icon.svg';
import { ReactComponent as EditSVG } from 'assets/icons/edit-icon.svg';
import { ReactComponent as CancelSVG } from 'assets/icons/cancel-icon.svg';
import { ReactComponent as AddSVG } from 'assets/icons/add-icon.svg';
import { ReactComponent as ArrowSVG } from 'assets/icons/arrow-icon.svg';
import { ReactComponent as BackSVG } from 'assets/icons/back-icon.svg';
import { ReactComponent as StarSVG } from 'assets/icons/star-icon.svg';
import { ReactComponent as GoogleSVG } from 'assets/icons/google-icon.svg';
import { ReactComponent as DetailsSVG } from 'assets/icons/details-icon.svg';
import { ReactComponent as SquareViewSVG } from 'assets/icons/squareView-icon.svg';
import { ReactComponent as LineViewSVG } from 'assets/icons/lineView-icon.svg';
import { ReactComponent as CalendarViewSVG } from 'assets/icons/calendarView-icon.svg';
import { ReactComponent as SortAceSVG } from 'assets/icons/sortAce-icon.svg';
import { ReactComponent as SortDecSVG } from 'assets/icons/sortDec-icon.svg';
import { ReactComponent as SortDateAceSVG } from 'assets/icons/sortDateAce-icon.svg';
import { ReactComponent as SortDateDecSVG } from 'assets/icons/sortDateDec-icon.svg';
import { ReactComponent as HomeSVG } from 'assets/icons/home-icon.svg';
import { ReactComponent as UserSVG } from 'assets/icons/user-icon.svg';
import { ReactComponent as ItemsSVG } from 'assets/icons/items-icon.svg';

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
  calendarView: props => <CalendarViewSVG {...props} />,
  ascSort: props => <SortAceSVG {...props} />,
  decSort: props => <SortDecSVG {...props} />,
  ascDateSort: props => <SortDateAceSVG {...props} />,
  decDateSort: props => <SortDateDecSVG {...props} />,
  home: props => <HomeSVG {...props} />,
  user: props => <UserSVG {...props} />,
  items: props => <ItemsSVG {...props} />,
};

export default iconNames;
