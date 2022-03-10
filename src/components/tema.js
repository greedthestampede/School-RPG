import styled from "styled-components";

export const Titulo = styled.h1`
  color: azure;
`;

export const Conteudo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 20%;
  padding-top: 5%;
  height: 585px;
  margin: 0;
  background-color: black;
`;

export const Entrada = styled.input`
  color: azure;
  background-color: black;
  margin-top: 5px;
`;

export const Texto = styled.p`
  color: azure;
  margin: 5px;
`;

export const Btn = styled.button`
  background-color: rgba(15, 133, 97, 50%);
  border: none;
  color: azure;
  padding: 5px 10px;
  font-size: 12px;
  margin-top: 5px;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-out;
  border-radius: 100%;
`;
