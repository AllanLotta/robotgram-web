import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  .robotgram {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .auth-form {
    border: 1px solid #e6e6e6;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      padding: 0px 30px;

      input {
        border: none;
        border: 1px solid #efefef;
        margin: 2px 0px;
        padding: 5px 5px;
        ::placeholder {
          color: #a8abab;
        }
      }
      button {
        background: #3897f0;
        margin-top: 20px;
        color: white;
        border: none;
        padding: 4px 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  .auth-actions {
    border: 1px solid #e6e6e6;
    padding: 20px 0px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    a {
      display: unset;
      font-size: 13px;
      margin-left: 5px;
      color: #3897f0;
    }
  }
`;
