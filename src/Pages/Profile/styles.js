import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-content: initial;
  .hidden {
    display: none;
  }
  .avatar {
    width: 200px;
    padding: 10px 10px;

    img {
      border-radius: 50%;
    }
  }
  .info {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 50px;
    .username {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        font-weight: bold;
        font-size: 18px;
        margin-right: 10px;
      }
      button {
        border: none;
        padding: 3px 5px;
        border-radius: 4px;
        border: 1px solid #dbdbdb;
        background: transparent;
        cursor: pointer;
        margin-right: 10px;
      }
      svg {
        font-size: 18px;
        cursor: pointer;
      }
    }
    .count {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .name {
      margin-top: 20px;
      margin-bottom: 10px;
      p {
        font-weight: bold;
        font-size: 15px;
      }
    }
  }
`;
