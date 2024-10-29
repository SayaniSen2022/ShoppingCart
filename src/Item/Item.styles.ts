import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 5px;
    margin: 10px;
    background: #d2ecf5;
    color: #000;
    font-size: 15px;
    font-weight: 600;
  }

  img {
    max-height: 153px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    padding: 10px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
