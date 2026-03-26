const http = require('http');


const servidor = http.createServer((req, res) => {
    urlSpit = req.url.split('/');

    if (urlSpit[1] === 'usuario') {
        id = urlSpit[2];

        if (!isNaN(id)) {
            let idParse = Number(id);
            let nome;

            switch (idParse) {
                case 0:
                    nome = "joao";
                    break;
                case 1:
                    nome = "josefina";
                    break;
                case 2:
                    nome = "fernando";
                    break;
                case 3:
                    nome = "joze";
                    break;
                case 4:
                    nome = "pedro";
                    break;
                case 5:
                    nome = "ana";
                    break;
                default:
                    nome = "ferdinando";
                    break;
            }

            let response = {
                id: idParse,
                nome: nome
            }
            res.end(JSON.stringify(response));
        } else {
            res.end(JSON.stringify({
                erro: "id fornecido não é um número inteiro"
            }));
        }

    }
    else {
        res.end('Página não encontrada');
    }
});


servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
