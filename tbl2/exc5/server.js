const http = require('http');
const pool = require('./pool');

const servidor = http.createServer(async (req, res) => {
    let rotaArray = req.url.split('/');

    if (rotaArray[1] === 'usuarios') {
        const userId = rotaArray[2];

        try {
            if (!isNaN(userId)) {

                const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [userId]);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(resultado.rows));
            } else {
                res.end('ID ornecido não é um número');
            }

        } catch (erro) {

            res.end('Erro ao buscar dados');
        }
    } else {
        res.end('Rota não encontrada');
    }
});
servidor.listen(3000);