import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { fetchGetPost } from '../redux/middleware/thunk';

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

  return (
    <>
      {/* <ExceptionPage status={status} />
      {status === 'success' ? ( */}
      <>
        <TopNavBar />
        <CommentList currPost={currPost} />
      </>
      {/* ) : null} */}
    </>
  );
}
