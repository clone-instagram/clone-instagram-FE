import styled from 'styled-components';

export const UserInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-bottom: 1px solid #d6d6d6;
  button {
    background-color: #fff;
    color: #000;
    img {
      border-radius: 12px;
      padding: 4px;
      width: 36px;
      height: 36px;
      :hover {
        background-color: #f2f2f2;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
