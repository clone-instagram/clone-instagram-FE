import { Link } from 'react-router-dom';

import CommentForm from './common/CommentForm';
import UserInfo from './common/UserInfo';
import Icons from './common/Icons';

import { timeCalculator } from '.././utils/utils';

import { PostListStyle } from '../styles/PostListStyle';
import UserContent from './common/UserContent';

export default function PostList({ posts, onClickPostComment }) {
  return (
    <PostListStyle>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <UserInfo postUsername={post.username} />
            <div className="post-img">
              <img src={post.imgUrl} />
            </div>
            <Icons postId={post.id} />
            <div className="content">
              <div className="like-count">
                <span>{`${post.likes}명`}</span>
                <p>이 좋아합니다</p>
              </div>
              <UserContent currPost={post} props={0} />
              <div className="comment-content">
                {post.commentResponseList.length !== 0 ? (
                  <Link to={`/comment/${post.id}`}>{`댓글 ${post.commentResponseList.length}개 모두 보기`}</Link>
                ) : null}
                <span className="time">{timeCalculator(post.createdAt)}</span>
              </div>
            </div>
            <CommentForm postId={post.id} onClickPostComment={onClickPostComment} />
          </li>
        ))}
      </ul>
    </PostListStyle>
  );
}
