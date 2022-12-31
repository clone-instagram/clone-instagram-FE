import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGetPosts } from "../redux/middleware/thunk";

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

  return (
    <>
      {/* <ExceptionPage status={status} /> */}
      {/* {status === 'success' ? ( */}
      <>
        <TopNavBar />
        {postList?.length !== 0 ? (
          <PostList posts={postList} isNextPosts={isNextPosts} />
        ) : (
          <></>
        )}
      </>
      {/* ) : null} */}
    </>
  );
}
