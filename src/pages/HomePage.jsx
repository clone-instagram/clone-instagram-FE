import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetPosts, fetchAddComment } from '../redux/middleware/thunk';

import TopNavBar from '.././components/common/TopNavBar';
import ExceptionPage from './ExceptionPage';
import PostList from '.././components/PostList';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList } = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  const handleClickPostComment = (postId) => {
    // content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      <ExceptionPage status={status} />
      {status === 'success' ? (
        <>
          <TopNavBar />
          {postList.length !== 0 ? (
            <PostList posts={postList} onClickPostComment={handleClickPostComment} />
          ) : (
            {
              /*toDo exception*/
            }
          )}
        </>
      ) : null}
    </>
  );
}
