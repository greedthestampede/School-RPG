import { useState } from "react";
import Head from "next/head";
import { Btn, Conteudo, Entrada, Texto, Titulo } from "../src/components/tema";

export default function Home() {
  const [name, setName] = useState("");
  const [classe, setClasse] = useState("");
  const [ranking, setRanking] = useState("");
  const [xp, setXP] = useState(0);
  const [fp, setFP] = useState(0);
  const sobeXP = () => setXP(xp + 1);
  const desceXP = () => setXP(xp - 1);
  const sobeFP = () => setFP(fp + 1);
  const desceFP = () => setFP(fp - 1);

  function handleNameChange(evento) {
    setName(evento.target.value);
  }
  function handleClassChange(evento) {
    setClasse(evento.target.value);
  }
  function handleRankingChange(evento) {
    setRanking(evento.target.value);
  }
  
  return (
    <Conteudo>
      <Head>
        <title>Character Sheet - School RPG</title>
      </Head>
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
  );
}
