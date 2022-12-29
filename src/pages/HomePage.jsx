import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGetPosts } from '../redux/middleware/thunk';

import TopNavBar from ".././components/common/TopNavBar";
import ExceptionPage from "./ExceptionPage";
import PostList from ".././components/PostList";

export default function HomePage() {
  const dispatch = useDispatch();
  const { status, postList, isNextPosts } = useSelector(
    (state) => state.commentReducer
  );

  // if (status === 'alert-fail') alert('작성자만 삭제/수정할 수 있습니다.');
  // if (status === 'alert-success') alert('게시글 삭제 성공');

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, [dispatch]);

  // ToDoAsk 반복됨. 커스텀훅으로 분리해야할지?
  const handleClickPostComment = (postId, content) => {
    content
      ? dispatch(fetchAddComment({ id: postId, content }))
      : alert("댓글을 입력해주세요!");
  };
  
        {postList?.length !== 0 ? <PostList posts={postList} isNextPosts={isNextPosts} /> : <></>}
      </>
      {/* ) : null} */}
    </>
  );
}
