const INITIAL_STATE = {
    cursos: [],
    carregando: false,
    erro: false
}

export default function busca(state = INITIAL_STATE, action){
    switch(action.type){
        case 'BUSCA_PROD_START':
            return {
                cursos: [],
                carregando: true,
                erro: false
            }
        case 'BUSCA_PROD_SUCESS':
            return {
                cursos: action,
                carregando: false,
                erro: false
            }
        case 'BUSCA_PROD_ERRO':
            return {
                cursos: [],
                carregando: false,
                erro: true
            }

        default: return state
    }
}