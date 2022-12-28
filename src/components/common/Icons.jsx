import { Link } from 'react-router-dom';

import { IconsStyle } from '../../styles/IconsStyle';

import like from '../.././assets/outline-icons/like.svg';
import comment from '../.././assets/outline-icons/comment.svg';
import share from '../.././assets/outline-icons/share.svg';
import bookmark from '../.././assets/outline-icons/bookmark.svg';

export default function Icons({ postId, color }) {
  return (
    <IconsStyle color={color}>
      <div className="left-icons">
        <button type="button">
          <img src={like} />
        </button>
        <Link to={`/comment/${postId}`}>
          <img src={comment} />
        </Link>
        <Link to="#">
          <img src={share} />
        </Link>
      </div>
      <div className="right-icons">
        <Link to="#">
          <img src={bookmark} />
        </Link>
      </div>
    </IconsStyle>
  );
}
