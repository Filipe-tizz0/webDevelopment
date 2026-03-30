const http = require('http');

let num = 0;


const servidor = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    rotas = req.url.split('/');

    if (req.url === '/contador') {
        num += 1;
        res.end(JSON.stringify(num));
    }
    else {
        res.end('Página não encontrada');
    }
});


servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
