import Head from "next/head";
import { Conteudo, Entrada, MeuLink, Texto, Titulo } from "../src/components/tema";

export default function Home() {
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
        placeholder="Name"
      />
      <Entrada
        type="text"
        autoCapitalize="words"
        name="Class"
        placeholder="Class"
      />
      <Entrada
        type="text"
        autoCapitalize="words"
        name="Ranking"
        placeholder="Ranking"
      />
      <Texto><MeuLink href="/">+</MeuLink> 0 <MeuLink href="/">-</MeuLink> (XP)</Texto>
      <Texto><MeuLink href="/">+</MeuLink> 0 <MeuLink href="/">-</MeuLink> (FP)</Texto>
    </Conteudo>
  );
}
