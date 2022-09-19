import { createContext, useState } from "react";
import { dados } from "../Data/data";

export const CarrinhoContext = createContext();

export function CarrinhoContextProvider({ children }) {
  const [data, setData] = useState(dados);
  const [selectItens, setSelectItens] = useState([]);

  function adicionarItem(value, roupa) {
    setSelectItens((prev) => [...prev, { ...roupa, selectSize: value }]);
  }

  function excluir(index) {
    setSelectItens(selectItens?.filter((roupa, key) => roupa.id !== index));
  }

  return (
    <CarrinhoContext.Provider
      value={{ selectItens, setSelectItens, setData, adicionarItem, excluir }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
