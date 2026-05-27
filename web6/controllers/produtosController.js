// lista de usuários (simulação)
const prods = [
    { id: 1, desc: 'pc' },
    { id: 2, desc: 'celular' },
    { id: 3, desc: 'tablet' },
    { id: 4, desc: 'fone' },
    { id: 5, desc: 'notebook' }
];
// listar todos
function listarProdutos(req, res) {
    res.json(prods);
}
// buscar por id
function buscarProdutos(req, res) {
    const id = parseInt(req.params.id);

    try {
        const id = parseInt(req.params.id);
    } catch {
        res.status(400).json({
            erro: true,
            message: "id precisa ser um número inteiro"
        })
    }

    const produto = prods.find(p => p.id === id);
    if (!produto) {
        return res.status(404).json({ erro: true, message: 'Produto não encontrado' });
    }
    res.json({
        erro: false,
        message: "produtos encontrados",
        produtos: produto
    });
}

function countProdutos(req, res) {
    const contagem = prods.length;
    res.json({
        error: false,
        data: contagem
    })
}
module.exports = {
    listarProdutos,
    buscarProdutos,
    countProdutos
};