import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/commentSlice';

import { useParams } from 'react-router-dom';

import { fetchGetPost, fetchAddComment } from '../redux/middleware/thunk';

import TopNavBar from '.././components/common/TopNavBar';
import ExceptionPage from './ExceptionPage';
import CommentList from '.././components/CommentList';

export default function HomePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    status,
    postList,
    inputField,
    inputField: { content },
    currPost,
  } = useSelector((state) => state.commentReducer);

  // ToDo fetchGetPosts를 fetchGetPost로 대체하라
  useEffect(() => {
    dispatch(fetchGetPost(id));
  }, [dispatch]);

  const handleChangeInputField = (event) => {
    const {
      target: { id, value },
    } = event;
    dispatch(changeInputField({ id, value }));
  };

  const handleClickPostComment = (postId) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      <ExceptionPage status={status} />
      {status === 'success' ? (
        <>
          <TopNavBar />
          {postList.length !== 0 ? (
            <CommentList
              currPost={currPost}
              inputField={inputField}
              onChangeInputField={handleChangeInputField}
              onClickPostComment={handleClickPostComment}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
}
