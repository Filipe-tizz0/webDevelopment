const http = require('http');
const pool = require('./pool');

const servidor = http.createServer(async (req, res) => {
    let rotaArray = req.url.split('/');

    if (rotaArray[1] === 'usuario') {
        const userId = rotaArray[2];

        try {
            if (!isNaN(userId)) {

                const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [userId]);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(resultado.rows));
            } else {
                res.end('ID fornecido não é um número');
            }

        } catch (erro) {

            res.end('Erro ao buscar dados. Erro: ' + erro);
        }
    } else if (req.url == '/usuarios') {
        const resultado = await pool.query('SELECT * FROM usuarios');
        let response_row = [];
        let flag = 0;

        resultado.rows.forEach(row => {
            response_row[flag] = row;
            flag++;
        });

        full_res = {
            message: 'lista de usuários',
            data: response_row
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(full_res));
    } else {
        res.end('Rota não encontrada');
    }
});
servidor.listen(3000);