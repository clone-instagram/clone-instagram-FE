import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { fetchLikePost, fetchCommentLikePost } from '../../redux/middleware/thunk';

import { UserContentStyle } from '../../styles/UserContentStyle';
import { timeCalculator } from '../../utils/utils';
import UserProfile from './UserProfile';

import outline_like from '../.././assets/outline-icons/outline_like.svg';
import solid_like from '../.././assets/solid-icons/solid_like.svg';

export default function CommentUserContent({ currPost, props }) {
  const dispatch = useDispatch();
  console.log(currPost);

  // 보통 1줄 즉 줄바꿈 없음일때 0=false
  const lineOfContent = currPost.content.split('\n').length - 1;
  const [line, setLine] = useState(lineOfContent);

  const handleClickIcon = (selectedId, iconContent) => {
    iconContent === 'like' ? dispatch(fetchLikePost(selectedId)) : null;
    iconContent === 'like-comment' ? dispatch(fetchCommentLikePost(selectedId)) : null;
    // iconContent === 'bookmark' ? dispatch(clickBookMark(postId)) : null;
  };

  return (
    <UserContentStyle value={props}>
      <div>
        {props ? <UserProfile postProfileUrl={currPost.profileUrl} /> : null}
        <div>
          {line ? (
            <div className="user-content">
              <span>{currPost.username}</span>
              <div>
                <p>{currPost.content}</p>
                <button type="button" onClick={() => setLine(false)}>
                  더 보기
                </button>
              </div>
            </div>
          ) : (
            <div className="user-content2">
              <span>{currPost.username}</span>
              <p>{currPost.content}</p>
            </div>
          )}
          {props ? <span className="time">{timeCalculator(currPost.createdAt)}</span> : null}
        </div>
      </div>
      {!currPost.like ? (
        <button className="like-button" type="button" onClick={() => handleClickIcon(currPost.id, 'like-comment')}>
          <img src={outline_like} />
        </button>
      ) : (
        <button className="like-button" type="button" onClick={() => handleClickIcon(currPost.id, 'like-comment')}>
          <img src={solid_like} />
        </button>
      )}
    </UserContentStyle>
  );
}
