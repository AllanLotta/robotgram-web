import styled from 'styled-components';

export const Title = styled.p`
  font-size: 15px;
  color: #a8a8a8;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: inline-block;
  width: 80%;
  overflow: hidden;
  position: relative;
  @-moz-keyframes scroll-left {
    0% {
      -moz-transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes scroll-left {
    0% {
      -webkit-transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes scroll-left {
    0% {
      -moz-transform: translateX(100%);
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;
export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e6e6e6;
  width: 120px;
  text-align: center;
  margin: 10px 10px;
  padding: 5px 10px;
  .avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 10px;
    img {
      border-radius: 50%;
      background: black;
    }
    cursor: pointer;
  }
  p {
    margin: 5px 0px;
    font-weight: bold;
    overflow: hidden;
    cursor: pointer;
  }
  button {
    border: none;
    background: #3897f0;
    border-radius: 4px;
    padding: 3px 3px;
    color: white;
    cursor: pointer;
  }
`;
