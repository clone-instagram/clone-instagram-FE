import { useState } from 'react';

import { UserContentStyle } from '../../styles/UserContentStyle';
import { timeCalculator } from '../../utils/utils';
import UserProfile from './UserProfile';

export default function UserContent({ currPost, props }) {
  // 보통 1줄 즉 줄바꿈 없음일때 0=false
  const lineOfContent = currPost.content.split('\n').length - 1;
  const [line, setLine] = useState(lineOfContent);
  return (
    <UserContentStyle value={props}>
      <div>
        {props ? <UserProfile postProfileUrl={currPost.profileUrl} /> : null}
        <div>
          {!props && line ? (
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
    </UserContentStyle>
  );
}
