import { UserProfileStyle } from '../../styles/UserProfileStyle';

import tmp from '../.././assets/tmp.png';

export default function UserProfile({ postProfileUrl }) {
  return <UserProfileStyle src={postProfileUrl ? postProfileUrl : tmp} />;
}
