import styled from 'styled-components';

import default_user from '../../assets/default_user.jpeg';

const UserProfileStyle = styled.div`
  margin-right: 12px;
  & > img {
    border: 1px solid #d6d6d6;
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
`;

export default function UserProfile({ postProfileUrl }) {
  return (
    <UserProfileStyle>
      <img src={postProfileUrl ? postProfileUrl : default_user} />
    </UserProfileStyle>
  );
}
