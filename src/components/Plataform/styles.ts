import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--blue);
  display: flex;
  align-items: center;
  
  flex-direction: column;
  .waves {
    width: 100%;
    position: absolute;
    left: 0;
  }
  .content {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 4rem;
    width: 100%;
    max-width:1280px;

    h2{
      text-align: center;
      font-family: "Roboto";
      font-size: 1.5rem;
      color: var(--white);
    }
    img{
      height: 80%;
    }
    p{
      width: 80%;
      text-align: center;
      font-family: "Roboto";
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
