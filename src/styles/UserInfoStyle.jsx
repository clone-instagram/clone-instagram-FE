import styled from 'styled-components';

export const UserInfoStyle = styled.div`
    display: flex;
      justify-content: space-between;
      padding: 0.8rem;
      border-bottom: 1px solid #D6D6D6;
      button {
          background-color: #fff;
          color: #000;
          img {
            border-radius: 12px;
        padding: 4px;
        width: 36px;
        height: 36px;
        :hover {
        background-color: #F2F2F2;
      }
          }
        }
      div {
        display: flex;
        align-items: center;
        img {
          margin-right: 12px;
          border: 1px solid #D6D6D6;
          width: 48px;
          height: 48px;
          border-radius: 24px;
        }
        span {
          font-weight: 500;
          font-size: 16px;
        }
      }
`;
