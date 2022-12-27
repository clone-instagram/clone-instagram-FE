import { UserInfoStyle } from '../../styles/UserInfoStyle';

import more from '../.././assets/outline-icons/more.svg';
import UserProfile from './UserProfile';

export default function UserInfo({ postUsername, postProfileUrl }) {
  return (
    <UserInfoStyle>
      <div>
        <UserProfile postProfileUrl={postProfileUrl} />
        <span>{postUsername}</span>
      </div>
      <button type="button">
        <img src={more} />
      </button>
    </UserInfoStyle>
  );
}
