import styled from 'styled-components';
import BG from '../images/bg.jpg'
import { Link } from "gatsby"


export const Wrapper = styled.div`
  background-color:#d9a8f0;
  width:100%;
  height:100%;
`;
export const HeaderBar = styled.header`
  min-height: 100px;
  background-color:#c41460;
`;
export const HeaderLogo = styled.div`
  padding:20px;
  margin-left:20%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
`;
export const PokemonMesh = styled.article`
  margin: 50px auto;
  align-self:center;
  display: grid;
  justify-items:center;
  
  @media (min-width:1500px){
    grid-template-columns: repeat(4,1fr);
  }
  @media (max-width:1500px){
    grid-template-columns: repeat(3,1fr);
  }
  @media (max-width:1300px){
    grid-template-columns: repeat(2,1fr);
  }
  @media (max-width:800px){
    grid-template-columns: 1fr
  }
`;
export const EachPokemon = styled.figure`
  min-width: 300px;
  max-height:600px;
  background-color:#c7c7c7;
  display:flex;
  flex-direction: column;
  padding: 5px;
  border: thin #7d7d7d solid;
`;
export const Eachtext = styled.figcaption`
  text-align:center;
  font-family: 'Exo', sans-serif;
`;
