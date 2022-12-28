import styled from 'styled-components';

export const IconsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.color || '#fff'};
  padding: 0.8rem;
  .left-icons {
    img {
      margin-right: 0.8rem;
      border-radius: 10px;
      padding: 2px;
      width: 32px;
      height: 32px;
      :hover {
        background-color: #f2f2f2;
      }
    }
  }
  .right-icons {
    img {
      border-radius: 10px;
      padding: 2px;
      width: 32px;
      height: 32px;
      :hover {
        background-color: #f2f2f2;
      }
    }
  }
`;
