import styled from 'styled-components';

export const UserContentStyle = styled.div`
  padding: 0 ${(props) => `${props.value}rem`};
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .like-button {
    img {
      border-radius: 8px;
      padding: 2px;
      width: 24px;
      height: 24px;
      :hover {
        background-color: #f2f2f2;
      }
    }
  }
  & > div {
    display: flex;
    width: 80%;
    .time {
      display: block;
      font-size: 10px;
      color: rgba(0, 0, 0, 0.4);
    }
    .user-content {
      display: flex;
      div {
        display: flex;
        p {
          display: inline;
          width: 70%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-right: 4px;
        }
        & > button {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.4);
          background-color: transparent;
        }
      }
      span {
        margin-right: 4px;
        font-weight: 700;
      }
    }
    .user-content2 {
      display: inline;
      span {
        margin-right: 4px;
        font-weight: 700;
      }
      p {
        display: inline;
        width: 70%;
        margin-right: 4px;
      }
    }
  }
`;
