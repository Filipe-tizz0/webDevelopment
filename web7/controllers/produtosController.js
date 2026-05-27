// lista de usuários (simulação)
const prods = [
    { id: 1, desc: 'pc', preco: "" },
    { id: 2, desc: 'celular', preco: "" },
    { id: 3, desc: 'tablet', preco: "" },
    { id: 4, desc: 'fone', preco: "" },
    { id: 5, desc: 'notebook', preco: "" }
];
// listar todos
function listarProdutos(req, res) {
    res.json({
        sucesso: true,
        data: prods
    });
}
// buscar por id
function buscarProdutos(req, res) {
    const id = parseInt(req.params.id);

    try {
        const id = parseInt(req.params.id);
    } catch {
        res.status(400).json({
            sucesso: false,
            message: "id precisa ser um número inteiro"
        })
    }

    const produto = prods.find(p => p.id === id);
    if (!produto) {
        return res.status(404).json({ sucesso: false, message: 'Produto não encontrado' });
    }
    res.json({
        sucesso: true,
        message: "produtos encontrados",
        produtos: produto
    });
}

function countProdutos(req, res) {
    const contagem = prods.length;
    res.json({
        sucesso: true,
        data: contagem
    })
}

function deleteProduto(req, res) {
    const id = parseInt(req.params.id);
    const index = prods.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto não encontrado'
        });
    }
    usuarios.splice(index, 1);
    res.json({
        sucesso: true,
        mensagem: 'Produto removido'
    });
}

function updateProdut(req, res) {
    const id = parseInt(req.params.id);
    const { descricao, preco } = req.body;
    const produto = prods.find(u => u.id === id);
    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Usuário não encontrado'
        });
    }
    if (!descricao || !preco) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Dados inválidos'
        });
    }
    produto.des = descricao;
    produto.preco = preco;
    res.json({
        sucesso: true,
        dados: produto
    });
}
module.exports = {
    listarProdutos,
    buscarProdutos,
    countProdutos,
    deleteProduto,
    updateProdut
};