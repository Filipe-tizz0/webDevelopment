const http = require('http');


const servidor = http.createServer((req, res) => {
    const Products = require('./Produtos');

    res.setHeader('Content-Type', 'application/json');

    rotas = req.url.split('/');

    let arrayProds = [
        new Products(1, "roda", 32.59),
        new Products(2, "monitor", 600.99),
        new Products(3, "desodorante", 6.99),
        new Products(4, "yopro", 12.36),
        new Products(5, "teclado", 67.67)
    ]

    if (req.url === '/consultaProds') {
        res.end(JSON.stringify(rotas));
    }
    else if (rotas[1] === 'api' && rotas[2] == 'produtos') {
        idRota = rotas[3];

        arrayProds.forEach(arrayProds => {
            if (arrayProds.id == idRota) {
                res.end(JSON.stringify({
                    produto: arrayProds
                }))
            }
        });
    }
    else {
        res.end('Página não encontrada');
    }
});


servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
