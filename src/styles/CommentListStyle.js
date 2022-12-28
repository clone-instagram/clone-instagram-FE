import styled from 'styled-components';

export const CommentListStyle = styled.div`
  /* padding-top: 5rem; */
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  & > div {
    display: flex;
    width: 60%;
    margin: 0 auto;
    background-color: #fff;
    .time {
      font-size: 10px;
      color: rgba(0, 0, 0, 0.4);
    }
    .post-img {
      img {
        width: 450px;
        height: 600px;
        object-fit: cover;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      .scroll-content {
        overflow-y: scroll;
        overflow-x: hidden;
         {
          /*ToDoAsk 아래 높이 동적으로 받는방법?*/
        }
        height: 320px;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      .like-count {
        padding: 0 0.8rem;
        div {
          display: flex;
          margin: 8px 0;
          & > span {
            font-weight: 700;
          }
        }
      }
    }
  }
`;
