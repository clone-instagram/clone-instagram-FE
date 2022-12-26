import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInputField } from '../redux/modules/commentSlice';

import { useParams } from 'react-router-dom';

import {
  fetchGetPost, fetchAddComment
} from '../redux/middleware/thunk';

import TopNavBar from '.././components/TopNavBar';
import ExceptionPage from './ExceptionPage';
import CommentList from '.././components/CommentList';

export default function HomePage() {
  const dispatch = useDispatch();
  const {
    status, postList, inputField, currentPost
  } = useSelector((state) => state.postReducer);
  const { content } = inputField;
  console.log(currentPost);

  const { id } = useParams();
  // const currPost = postList.find(post => post.id === +id);

  useEffect(() => {
    dispatch(fetchGetPost(id));
  }, [dispatch]);

  const handleChangeInputField = (event) => {
    const { target: { id, value } } = event;
    dispatch(changeInputField({ id, value }));
  };

  const handleClickPostComment = (postId) => {
    content ? dispatch(fetchAddComment({ id: postId, content })) : alert('댓글을 입력해주세요!');
  };

  return (
    <>
      <ExceptionPage status={status} />
      {status === 'success' ?
        <>
          <TopNavBar />
          {postList.length !== 0 ?
            <>
              <CommentList
                currPost={currentPost}
                inputField={inputField}
                onChangeInputField={handleChangeInputField}
                onClickPostComment={handleClickPostComment}
              />
            </>
            :
            {/*toDo exception*/ }
          }
        </>
        : null
      }
    </>
  );
}
