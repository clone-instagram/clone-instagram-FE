import styled from 'styled-components';

export const CommentListStyle = styled.div`
  padding-top: 5rem;
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
    .img {
      img {
        width: 100%;
        object-fit: cover;
        height: 600px;
      }
    }
    .content {
      width: 70%;
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
      .user-content {
        display: flex;
        margin: 8px 0;
        padding: 0.8rem;
        img {
          margin-right: 12px;
          border: 1px solid #d6d6d6;
          width: 48px;
          height: 48px;
          border-radius: 24px;
        }
      }
    }
  }
`;
