import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { UserInfoStyle } from '../../styles/UserInfoStyle';

import { fetchDeletePost } from '../../redux/middleware/thunk';

import close from '../.././assets/outline-icons/close.svg';
import edit from '../.././assets/outline-icons/edit.svg';
import UserProfile from './UserProfile';

export default function UserInfo({ currPost }) {
  const dispatch = useDispatch();

  const handleClickDeletePost = (postId) => {
    dispatch(fetchDeletePost(postId));
  };

  return (
    <UserInfoStyle>
      <div>
        <UserProfile postProfileUrl={currPost.profileUrl} />
        <span>{currPost.username}</span>
      </div>
      <div>
        <button type="button">
          <Link to={`/edit/${currPost.id}`}>
            <img src={edit} />
          </Link>
        </button>
        <button type="button" onClick={() => handleClickDeletePost(currPost.id)}>
          <img src={close} />
        </button>
      </div>
    </UserInfoStyle>
  );
}
