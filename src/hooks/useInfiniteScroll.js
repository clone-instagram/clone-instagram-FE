import { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchNextPosts } from '../redux/middleware/thunk';
import { changeCurrPageSize } from '../redux/modules/commentSlice';

export default function useInfiniteScroll(posts) {
  // toDoAsk 10개까진 불러와지는데 그 이상은 안됨
  // state가 바뀌면 화면 렌더링이 바뀔거야. useRef는 렌더링이 바뀌지 않음(렌더링과 관계없이) 변수를 담는 느낌
  const pageSize = useRef();
  pageSize.current = posts.length;

  const dispatch = useDispatch();

  const listRef = useRef();

  // 함수를 memoization하는 훅
  const callback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          pageSize.current = pageSize.current + 5;
          dispatch(fetchNextPosts(pageSize.current));
          dispatch(changeCurrPageSize(pageSize.current));
        }, 1000);
      }
    });
  });

  useEffect(() => {
    if (!listRef.current) return;
    const observer = new IntersectionObserver(callback);
    // 마지막node 관찰시작
    const nodesListArr = listRef.current.childNodes;
    const lastNode = nodesListArr[nodesListArr.length - 1];
    observer.observe(lastNode);
  }, []);

  return { listRef };
}
