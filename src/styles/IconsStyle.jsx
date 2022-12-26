import styled from 'styled-components';

export const IconsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.color || '#fff'};
  padding: 0.8rem;
  & > div {
    img {
        margin-right: 1rem;
    width: 28px;
    height: 28px;
  }
  }
`;
