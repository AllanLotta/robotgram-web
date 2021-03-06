import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  background: #fafafa;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 99;
`;

export const Content = styled.div`
  width: 70%;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  .actions {
    svg {
      font-size: 20px;
      color: grey;
      cursor: pointer;
    }
  }
`;
