import { UserContentStyle } from '../../styles/UserContentStyle';

export default function UserContent({ currPost }) {
  return (
    <UserContentStyle>
      <span>{currPost.username}</span>
      <p>{currPost.content}</p>
    </UserContentStyle>
  );
}
