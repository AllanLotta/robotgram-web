import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    border: none;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 4px 4px;
    background: transparent;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .create {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .file-input-wrapper {
      margin-bottom: 30px;
      width: 200px;
      height: 40px;
      overflow: hidden;
      position: relative;
    }
    .file-input-wrapper > input[type='file'] {
      cursor: pointer;
      font-size: 200px;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
    }
    .file-input-wrapper > .btn-file-input {
      display: inline-block;
      width: 100%;
      height: 40px;
    }
    .file-input-wrapper:hover > .btn-file-input {
      background-color: #aaa;
    }
    textarea {
      width: 100%;
      border: none;
      border: 1px solid #dbdbdb;
      border-radius: 10px;
      padding: 5px 5px;
    }
    .sendButton {
      margin-top: 20px;
      border: none;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      padding: 4px 4px;
      background: transparent;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`;
