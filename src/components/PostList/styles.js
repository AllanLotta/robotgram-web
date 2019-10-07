import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  padding-top: 30px;
`;

export const Card = styled.div`
  border: 1px solid #e6e6e6;
  margin-bottom: 30px;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    img {
      border-radius: 50%;
      width: 8%;
      margin: 5px 5px;
      cursor: pointer;
    }
  }
  .content {
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    .name {
      margin-right: 5px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
