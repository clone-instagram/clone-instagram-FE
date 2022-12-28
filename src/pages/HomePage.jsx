import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGetPosts, fetchAddComment } from '../redux/middleware/thunk';

import TopNavBar from '.././components/common/TopNavBar';
import ExceptionPage from './ExceptionPage';
import PostList from '.././components/PostList';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList, isNextPosts } = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  // ToDoAsk 반복됨. 커스텀훅으로 분리해야할지?
  const handleClickPostComment = (postId, content) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      {/* <ExceptionPage status={status} /> */}
      {/* {status === 'success' ? ( */}
      <>
        <TopNavBar />
        {postList?.length !== 0 ? (
          <PostList posts={postList} onClickPostComment={handleClickPostComment} isNextPosts={isNextPosts} />
        ) : (
          <></>
        )}
      </>
      {/* ) : null} */}
    </>
  );
}
