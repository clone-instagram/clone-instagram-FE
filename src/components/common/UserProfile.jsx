import styled from 'styled-components';

import tmp from '../.././assets/tmp.png';

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
      <img src={postProfileUrl ? postProfileUrl : tmp} />
    </UserProfileStyle>
  );
}
