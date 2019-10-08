import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  button {
    cursor: pointer;
    width: 100%;
    border: none;
    background: transparent;
    border-radius: 4px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 4px 4px;
    :hover {
      background: #dbdbdb;
    }
  }
`;
