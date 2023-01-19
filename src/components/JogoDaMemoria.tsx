import { Placar } from "./Placar";
import { Carta } from "./Carta";
import { paresDeCartas } from "../constants/cartas";

export const JogoDaMemoria = () => {
  return (
    <div className="jogo-da-memoria">
      <div className="jogo-da-memoria__conteudo">
        <h1>Jogo da Memoria</h1>
        <Placar />
        <div className="jogo-da-memoria__cartas">
          {paresDeCartas.map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </div>
      </div>
    </div>
  );
};
