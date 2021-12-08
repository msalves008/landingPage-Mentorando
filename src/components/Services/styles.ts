import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .content {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .card {
      width: 60%;
      h2{
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Roboto";
        padding-bottom: .5rem;
      }
      p {
        font-size: 1rem;
        font-weight: normal;
        font-family: "Roboto";
        text-align: justify;
        letter-spacing: 0.045em;
        line-height: 163.19%;
      }
    }
  }
`;
