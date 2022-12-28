import { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchNextPosts } from '../redux/middleware/thunk';

export default function useInfiniteScroll(posts) {
  // toDoAsk 10개까진 불러와지는데 그 이상은 안됨
  const dispatch = useDispatch();

  const listRef = useRef();

  const pageSize = posts.length;

  const callback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => dispatch(fetchNextPosts(pageSize + 5)), 1000);
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
