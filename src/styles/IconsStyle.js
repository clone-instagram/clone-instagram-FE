import styled from 'styled-components';

export const IconsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.color || '#fff'};
  padding: 0.8rem;
  .left-icons {
    img {
      margin-right: 0.8rem;
      width: 28px;
      height: 28px;
    }
  }
  .right-icons {
    img {
      width: 28px;
      height: 28px;
    }
  }
`;
