import { Placar } from "./Placar";
import { Carta } from "./Carta";

export const JogoDaMemoria = () => {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>jogo da memoria</h1>
        <Placar />
        <div className="jogo-da-memoria__cartas">
          <Carta />
        </div>
      </div>
    </div>
  );
};
