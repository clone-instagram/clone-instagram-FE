import { UserInfoStyle } from '../styles/UserInfoStyle';

import tmp from '.././assets/tmp.png';
import more from '.././assets/outline-icons/more.svg';

export default function UserInfo({ postUsername }) {
  return (
    <UserInfoStyle>
      <div>
        <img src={tmp} />
        <span>{postUsername}</span>
      </div>
      <button type="button">
        <img src={more} />
      </button>
    </UserInfoStyle>
  );
}
