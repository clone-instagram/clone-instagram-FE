import styled from "styled-components";

export const TopNavBarStyle = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  & > div {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 30%;
      img {
        width: 50%;
      }
    }
    .search {
      display: flex;
      justify-content: center;
      width: 30%;
      input {
        background-color: #f2f2f2;
        width: 40rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        :focus {
          outline: none !important;
          border-color: #ff93e6;
          box-shadow: 0 0 6px #ff93e6;
        }
        ::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    .icons {
      text-align: center;
      width: 35%;
      a {
        img {
          margin-right: 8px;
          border-radius: 12px;
          padding: 4px;
          width: 36px;
          height: 36px;
          :hover {
            background-color: #f2f2f2;
          }
        }
      }
    }
  }
`;
