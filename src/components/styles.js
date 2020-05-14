import styled from 'styled-components';
import BG from '../images/bg.jpg'
import { Link } from "gatsby"

export const Wrapper = styled.div`
  background-color: #f5eded;
  width:100%;
  min-height:100vh;
  margin:0;
`;
export const Footer = styled.footer`
  background-color: #c41460;
  margin:0;
  height:4vh;
`;
export const HeaderBar = styled.header`
  min-height: 8vh;
  background-color:#c41460;
`;
export const HeaderLogo = styled.div`
  padding:20px;
  margin-left:20%;
`;
export const Maindiv = styled.div`
  background: url(${BG}) center no-repeat;
  height: 88vh;
  width:100%;
  display: flex;
  justify-content: center;
  text-align:center;
  align-items:center;
  font-family: 'Teko', sans-serif;
  
  h1{
    color:white;
    font-size:4rem;
    margin-bottom:25%;
    text-shadow:
    -2px -2px 0 #c41460,  
    2px -2px 0 #c41460,
    -2px 2px 0 #c41460,
    2px 2px 0 #c41460;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color:white;
`;
export const StyledShow = styled(Link)`
  text-decoration: none;
  color:white;
  background-color:black;
  max-height:150px;
  padding:60px;
  border-radius:20px;
  cursor: pointer;
  transition:.2s ease-in;
  position:absolute;
  top:55%;
  
  &:hover{
    background-color: #fab905;
    -webkit-box-shadow: 0px 0px 220px 26px rgba(107,107,107,0.9);
    -moz-box-shadow: 0px 0px 220px 26px rgba(107,107,107,0.9);
    box-shadow: 0px 0px 220px 26px rgba(107,107,107,0.9);
    color:black
  }
`;
export const PokemonMesh = styled.article`
  margin: 50px auto;
  align-self:center;
  display: grid;
  justify-items:center;
  
  @media (min-width:1700px){
    grid-template-columns: repeat(4,1fr);
  }
  @media (max-width:1700px){
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
  width: 300px;
  max-height:600px;
  background-color: #f5eded;
  display:flex;
  flex-direction: column;
  padding: 5px;
  border: thin #c41460 solid;
  z-index: 2;
  
  img{
    width:100%;
    height:100%;
  }
  &:after{
    content: '';
    position: absolute;
    width:200px;
    height:200px;
    border-radius:10px;
    background-color: #c41460;
    z-index: -1;
    margin-left:100px;
    margin-top:30px;
  }
   &:before{
    content: '';
    position: absolute;
    width:200px;
    height:200px;
    background-color: #c41460;
    border-radius:10px;
    z-index: -1;
    margin-left:-12px;
    margin-top:30px;
  }
`;
export const Eachtext = styled.figcaption`
  text-align:center;
  font-family: 'Teko', sans-serif;
  font-size: 2em;
`;
