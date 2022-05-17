import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { MessageIcon, NotiIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const menuItem = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@huthoine',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const currentUser = true;
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TopTop" />
        </div>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 20]} content="Upload video">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 20]} content="Message">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 20]} content="Notifications">
                <button className={cx('action-btn')}>
                  <NotiIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? menuItem : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/261324381_281715080557932_1781311595475904501_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=730e14&_nc_ohc=1QxLC0-D6fsAX8hLZFt&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT-UGTEH8YeCPUB-EoNatSgucTy9lj0kOPlORKKIBlo-bQ&oe=6281D7F2"
                alt="Nguyen Huu Thoai"
                className={cx('user-avatar')}
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
