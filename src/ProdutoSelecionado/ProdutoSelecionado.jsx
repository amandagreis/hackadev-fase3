
export default function CriaProduto(roupa){
    let RoupaNova = {
        id : `${roupa.id}${roupa.tamanho}`,
        image : roupa.image,
        nome: roupa.nome,
        tamanho : roupa.tamanho,
        quantidade : 1,
        preco : roupa.preco * quantidade,
        adiciona : () => { quantidade += 1},
        subrai : () => { 
            if(quantidade > 1)
            quantidade -= 1 
            else
            return;
                        }


        }

        return RoupaNova;
    

    }
