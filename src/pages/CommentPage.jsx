import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { fetchGetPost, fetchAddComment } from '../redux/middleware/thunk';

import TopNavBar from '.././components/common/TopNavBar';
import ExceptionPage from './ExceptionPage';
import CommentList from '.././components/CommentList';

export default function HomePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, currPost } = useSelector((state) => state.commentReducer);

  useEffect(() => {
    dispatch(fetchGetPost(id));
  }, [dispatch]);

  const handleClickPostComment = (postId, content) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      <ExceptionPage status={status} />
      {status === 'success' ? (
        <>
          <TopNavBar />
          <CommentList currPost={currPost} onClickPostComment={handleClickPostComment} />
        </>
      ) : null}
    </>
  );
}
