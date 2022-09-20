import { createContext, useState } from "react";
import { dados } from "../Data/data";
let productsTracker =[];

export const CarrinhoContext = createContext();

export function CarrinhoContextProvider({ children }) {
  const [data, setData] = useState(dados);
  const [selectItens, setSelectItens] = useState([]);

  function adicionarItem(value, roupa) {
    if(value){

      let novaId = `${roupa.id}${value}`;
      if(productsTracker.indexOf(novaId) === -1){
        setSelectItens((prev) => [...prev, { ...roupa, selectSize: value, id: novaId }]);
        productsTracker.push(novaId);
      }
      
    }
    else
    window.alert("Escolha o tamanho!");
    
  }

  function excluir(index) {
    setSelectItens(selectItens?.filter((roupa, key) => roupa.id !== index));
    productsTracker.pop(productsTracker.indexOf(index));
  }

  function incremento(index){
    
    let modSelectItens = selectItens.map(obj => {
      
      if(obj.id === index){
        obj.quantidade += 1;
      }
      
      return obj;
    })

   setSelectItens(modSelectItens);
  }

  function decremento(index){
    let modSelectItens = selectItens.map(obj => {
      
      if(obj.id === index){
        if(obj.quantidade > 1)
        obj.quantidade -= 1;
      }
      
      return obj;
    })


   setSelectItens(modSelectItens);
  }

 function mostraQuantidade (index) {
  let qtd = 1
  let modSelectItens = selectItens.map(obj => {
      
    if(obj.id === index){
      qtd = obj.quantidade;
    }
  
  })
  return qtd;
 }



  return (
    <CarrinhoContext.Provider
      value={{ selectItens, setSelectItens, setData, mostraQuantidade, adicionarItem, excluir, incremento, decremento }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
