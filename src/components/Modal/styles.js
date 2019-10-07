import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 300px;
  height: 300px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .item {
    width: 100%;
    text-align: center;
    padding: 10px 10px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    font-size: 15px;
    cursor: pointer;
  }
`;
