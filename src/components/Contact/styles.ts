import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-family: "Roboto";
    font-size: 2.3rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .content{
    width: 100%;
    height: 90%;
    max-width: 1280px;   
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    a{
      width: 50%;
      height: 100%;
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 0.5rem;
      
    }
    .right{
      width: 50%;
      height: 60%;
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;


      .text-field{
        width: 60%;
      }
      Button{ 
        width: 60%;
        height: 15%;
      }
     
    }
  }
`;
