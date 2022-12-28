import styled from 'styled-components';

export const PostListStyle = styled.div`
  padding-top: 5rem;
  width: 100%;
  background-color: #f2f2f2;
  & > ul {
    width: 30%;
    margin: 0 auto;
    padding-bottom: 1rem;
    li {
      border-radius: 8px;
      border: 1px solid #d6d6d6;
      background-color: #fff;
      margin-bottom: 1rem;
    }
    .post-img {
      img {
        width: 100%;
        object-fit: cover;
        height: 600px;
      }
    }
    .content {
      font-size: 14px;
      padding: 0 0.8rem;
      .like-count {
        display: flex;
        margin: 8px 0;
        & > span {
          font-weight: 700;
        }
      }
      .comment-content {
        display: flex;
        flex-direction: column;
        & > a {
          color: rgba(0, 0, 0, 0.4);
        }
      }
      .time {
        margin: 8px 0;
        font-size: 10px;
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
