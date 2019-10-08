import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    text-align: end;
    padding: 10px 10px;
    border: 1px solid #dbdbdb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .close {
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .content {
    overflow: auto;
  }
`;
