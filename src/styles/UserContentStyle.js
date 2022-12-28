import styled from 'styled-components';

export const UserContentStyle = styled.div`
  padding: 0 ${(props) => `${props.value}rem`};
  margin: 1rem 0;
  width: 80%;
  & > div {
    display: flex;
    align-items: center;
    .user-content {
      display: flex;
      .more {
        display: flex;
        align-items: center;
        p {
          width: 70%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-right: 4px;
        }
        button {
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
    .time {
      font-size: 10px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
