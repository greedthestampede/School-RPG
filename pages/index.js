import { useState } from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { setCookie, parseCookies } from "nookies";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: "Source Sans Pro", sans-serif;
    margin:0;
    padding:0;
    height:100%;
  }
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding: 10px;
  padding-bottom: 60px;
  min-height: 100%;
  position: relative;
`;

const Titulo = styled.h1`
  color: azure;
`;

const Entrada = styled.input`
  color: azure;
  background-color: black;
  border: 1px solid rgba(15, 133, 97, 45%);
  border-width: 2px;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
`;

const Texto = styled.p`
  color: azure;
  margin: 5px;
`;

const Btn = styled.button`
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

const Pezinho = styled.footer`
  color: azure;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding-top: 25px;
  text-align: center;
  background-color: rgba(15, 133, 97, 50%);
  border: 1px solid;
  border-color: azure;
  border-radius: 10px;
`;

export default function Home(props) {
  const [name, setName] = useState(props.NOME);
  const [classe, setClasse] = useState(props.CLASSE);
  const [ranking, setRanking] = useState(props.RANKING);
  const [xp, setXP] = useState(props.XP);
  const [fp, setFP] = useState(props.FP);

  const sobeXP = () => {
    if (typeof xp === "number") {
      setXP(xp + 1);
    } else {
      setXP(0);
    }
    setCookie(null, "XP", xp + 1, {
      maxAge: 86400 * 120,
      path: "/",
    });
  };
  const desceXP = () => {
    if (typeof xp === "number" && xp >= 1) {
      setXP(xp - 1);
    }
    setCookie(null, "XP", xp - 1, {
      maxAge: 86400 * 120,
      path: "/",
    });
  };
  const sobeFP = () => {
    if (typeof xp === "number") {
      setFP(fp + 1);
    } else {
      setFP(0);
    }
    setCookie(null, "FP", fp + 1, {
      maxAge: 86400 * 120,
      path: "/",
    });
  };
  const desceFP = () => {
    if (typeof fp === "number" && fp >= 1) {
      setFP(fp - 1);
    }
    setCookie(null, "FP", fp - 1, {
      maxAge: 86400 * 120,
      path: "/",
    });
  };

  function handleNameChange(evento) {
    setName(evento.target.value);
    setCookie(null, "NOME", name, {
      maxAge: 86400 * 120,
      path: "/",
    });
  }
  function handleClassChange(evento) {
    setClasse(evento.target.value);
    setCookie(null, "CLASSE", classe, {
      maxAge: 86400 * 120,
      path: "/",
    });
  }
  function handleRankingChange(evento) {
    setRanking(evento.target.value);
    setCookie(null, "RANKING", ranking, {
      maxAge: 86400 * 120,
      path: "/",
    });
  }

  return (
    <>
      <Head>
        <title>Character Sheet - School RPG</title>
      </Head>
      <GlobalStyle />
      <Conteudo>
        <Titulo>Character Sheet</Titulo>
        <Entrada
          type="text"
          autoCapitalize="words"
          name="Name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <Entrada
          type="text"
          autoCapitalize="words"
          name="Class"
          value={classe}
          onChange={handleClassChange}
          placeholder="Class"
        />
        <Entrada
          type="text"
          autoCapitalize="words"
          name="Ranking"
          value={ranking}
          onChange={handleRankingChange}
          placeholder="Ranking"
        />
        <Texto>
          <Btn onClick={sobeXP}>+</Btn> {xp} <Btn onClick={desceXP}>-</Btn> (XP)
        </Texto>
        <Texto>
          <Btn onClick={sobeFP}>+</Btn> {fp} <Btn onClick={desceFP}>-</Btn> (FP)
        </Texto>
      </Conteudo>
      <Pezinho>
        &copy; {new Date().getFullYear()} greedthestampede. Todos os direitos
        reservados.
      </Pezinho>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  return {
    props: {
      NOME: cookies.NOME,
      CLASSE: cookies.CLASSE,
      RANKING: cookies.RANKING,
      XP: cookies.XP,
      FP: cookies.FP,
    },
  };
}
