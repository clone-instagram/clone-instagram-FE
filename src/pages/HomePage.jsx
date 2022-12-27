import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/commentSlice';

import { fetchGetPosts, fetchAddComment } from '../redux/middleware/thunk';

import TopNavBar from '.././components/common/TopNavBar';
import ExceptionPage from './ExceptionPage';
import PostList from '.././components/PostList';

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList, inputField } = useSelector((state) => state.commentReducer);
  // const { content } = inputField;
  console.log(inputField);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  const handleChangeInputField = (event, postId) => {
    // toDoAsk 저장하면 자동 줄바꿈됨
    const {
      target: { id, value },
    } = event;
    dispatch(changeInputField({ id, value, postId }));
  };

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
            <>
              <PostList
                posts={postList}
                inputField={inputField}
                onChangeInputField={handleChangeInputField}
                onClickPostComment={handleClickPostComment}
              />
            </>
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
