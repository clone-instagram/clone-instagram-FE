import { useState } from 'react';

import { UserContentStyle } from '../../styles/UserContentStyle';
import { timeCalculator } from '../../utils/utils';
import UserProfile from './UserProfile';

export default function UserContent({ currPost, props }) {
  const [line, setLine] = useState(currPost.content.split('\n').length - 1);
  // line이 있으면(즉, 0이 아니면) 더 보기 버튼 활성화
  return (
    <UserContentStyle value={props}>
      <div>
        {props ? <UserProfile postProfileUrl={currPost.profileUrl} /> : null}
        <div>
          <div className="user-content">
            <span>{currPost.username}</span>
            {!props && line ? (
              <div className="more">
                <p>{currPost.content}</p>
                <button type="button" onClick={() => setLine(false)}>
                  더 보기
                </button>
              </div>
            ) : (
              <p>{currPost.content}</p>
            )}
          </div>
          {props ? <span className="time">{timeCalculator(currPost.createdAt)}</span> : null}
        </div>
      </div>
    </UserContentStyle>
  );
}
