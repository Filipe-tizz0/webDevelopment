const http = require('http');


const servidor = http.createServer((req, res) => {

    if (req.url === '/teste') {

        if (req.method == 'GET') {
            res.end("Muito bem, método permitido");
        }
        res.end("O Método que vocẽ escolheu está errado, o único método permitido é GET");
    }
    else {
        res.end('Página não encontrada');
    }
});


servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
