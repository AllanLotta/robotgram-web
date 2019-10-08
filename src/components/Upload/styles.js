import styled from 'styled-components';

export const Container = styled.div`
  form {
    text-align: center;
    .filename {
      font-weight: bold;
      margin-bottom: -23px;
      margin-top: 10px;
    }
    .uploadButton {
      margin-top: 10px;
    }
  }
  .fileButton {
    border: 2px dotted #dbdbdb;
    border-radius: 4px;
    input[type='file'] {
      cursor: pointer;
      font-size: 20px;
      top: 0;
      right: 0;
      opacity: 0;
    }
  }
`;
