
export const modificaTitulo = (titulo) => {
    return {
        type: 'modifica_titulo',
        payload:titulo
    }
}
export const modificaRealizada = (realizada) => {
    return {
        type: 'modifica_realizada',
        payload:realizada
    }
}
export const modificaCor = (cor) => {
    return {
        type: 'modifica_cor',
        payload:cor
    }
}
export const modificaDueDate = (itens) => {
    return {
        type: 'modifica_due_date',
        payload:itens
    }
}
export const modificaItem = (item) => {
    return {
        type: 'modifica_item',
        payload:item
    }
}
export const modificaEditType = (editType) => {
    return {
        type: 'modifica_editType',
        payload:editType
    }
}
export const modificaPrioridade = (prioridade) => {
    return {
        type: 'modifica_prioridade',
        payload:prioridade
    }
}
export const modificaIsModalVisible = (isModalVisible) => {
    return {
        type: 'modifica_isModalVisible',
        payload:isModalVisible
    }
}