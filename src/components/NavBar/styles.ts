import styled from 'styled-components';

export const Container = styled.nav`
 width: 100%;
 width: 100vw;
 height: 10vh;
 background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  img{ 
    height: 60%;
  }
  ul{
    width: 60%;
    display: flex;
    text-decoration: none;
    list-style: none;
    justify-content: space-evenly;
    li{
      color: var(--white);
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      &:hover{
        cursor: pointer;
        opacity: 0.5 ;
      }
    }
  }



`;
