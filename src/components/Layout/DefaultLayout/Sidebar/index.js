import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';
const cx = classNames.bind(Styles);
function Sidebar() {
  return <aside className={cx('wrapper')}>Sidebar</aside>;
}

export default Sidebar;
