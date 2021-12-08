import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 99%;  
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      width: 40%;
    }
    .infos{
      width: 40%;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      
      p {
        width: 100%;
        text-align: justify;
        font-family: "Roboto";
        font-size: 1.2rem;
      }
      span{        
        font-family: "Roboto";
        text-align: justify;
        font-size: 1rem;
        font-family: "Roboto";
        font-size: 1.2rem;
        opacity: 0.5;
      }

    }
  }
`;
