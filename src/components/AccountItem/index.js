import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        alt="Huthoi"
        className={cx('avatar')}
        src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/261324381_281715080557932_1781311595475904501_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=730e14&_nc_ohc=uHGXdwc7poIAX9OWSUA&_nc_ht=scontent.fsgn6-1.fna&oh=00_AT_F1xQ5_cP9WjsZpOFtRI9a0jUJNoouJnQw_479E12q3g&oe=627DE372"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Huu Thoai</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>@huthoinee</span>
      </div>
    </div>
  );
}

export default AccountItem;
