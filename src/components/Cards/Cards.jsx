import { useParams } from "react-router-dom";
import Card from "../Card";
import { dados } from "../Data/data";

function Cards() {
  const { id } = useParams();

  return (
    <>
      {dados
        .filter((roupas) => roupas.id === Number(id))
        .map((roupa) => (
          <Card
            key={roupa.id}
            image={roupa.image}
            descricao={roupa.descricao}
            name={roupa.nome}
            precoOriginal={roupa.precoOriginal}
            precoDesconto={roupa.precoDesconto}
            desconto={roupa.desconto}
            parcelamento={roupa.parcelamento}
            descricaoTamanho={roupa.descricaoTamanho}
            buttonP={roupa.buttonP}
            buttonM={roupa.buttonM}
            buttonG={roupa.buttonG}
            buttonGG={roupa.buttonGG}
            buttonSacola={roupa.buttonSacola}
            descricaoBojo={roupa.descricaoBojo}
            descricaoMaterial={roupa.descricaoMaterial}
            roupa={roupa}
          />
        ))}
    </>
  );
}

export default Cards;
