import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50%;
      max-width: 570px;
      max-height: 80%;
    }
    .content {
      width: 50%;
      height: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      h1 {
        font-family: "Roboto";
        font-style: bold;
        font-size: 2.5rem;
      }
      span {
        font-family: "Roboto";
        font-style: normal;
        font-size: 1.2rem;

      }
      Button {
        
        background-color: var(--blue);
        color: white;
        letter-spacing: 1px;
      }
    }
  }
`;
