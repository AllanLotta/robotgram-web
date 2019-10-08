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
  flex-direction: column;
  justify-content: center;

  .card {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .avatar {
      margin-left: 10px;
      width: 40px;
      img {
        background: black;
        border-radius: 50%;
      }
    }
    p {
      margin-left: -70px;
      font-weight: bold;
    }
    button {
      margin-right: 10px;
      cursor: pointer;
      width: 70px;
      height: 60%;
      border: none;
      background: transparent;
      border-radius: 4px;
      border: 1px solid #dbdbdb;
      padding: 4px 4px;
      :hover {
        background: #dbdbdb;
      }
    }
  }
`;
