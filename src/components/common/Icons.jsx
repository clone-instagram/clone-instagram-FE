import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { fetchLikePost } from '../../redux/middleware/thunk';

import { IconsStyle } from '../../styles/IconsStyle';

import outline_like from '../.././assets/outline-icons/outline_like.svg';
import solid_like from '../.././assets/solid-icons/solid_like.svg';
import comment from '../.././assets/outline-icons/comment.svg';
import share from '../.././assets/outline-icons/share.svg';
import outline_bookmark from '../.././assets/outline-icons/outline_bookmark.svg';

export default function Icons({ post, color }) {
  const dispatch = useDispatch();

  const handleClickIcon = (postId, iconContent) => {
    iconContent === 'like' ? dispatch(fetchLikePost(postId)) : null;
    // iconContent === 'bookmark' ? dispatch(clickBookMark(postId)) : null;
  };

  return (
    <IconsStyle color={color}>
      <div className="left-icons">
        {!post.like ? (
          <button type="button" onClick={() => handleClickIcon(post.id, 'like')}>
            <img src={outline_like} />
          </button>
        ) : (
          <button type="button" onClick={() => handleClickIcon(post.id, 'like')}>
            <img src={solid_like} />
          </button>
        )}
        <Link to={`/comment/${post.id}`}>
          <img src={comment} />
        </Link>
        <Link to="#">
          <img src={share} />
        </Link>
      </div>
      <div className="right-icons">
        <button type="button" onClick={() => handleClickIcon(post.id, 'bookmark')}>
          <img src={outline_bookmark} />
        </button>
      </div>
    </IconsStyle>
  );
}
