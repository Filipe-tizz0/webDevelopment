class Middleware_ {
    autenticarToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ erro: 'Token não enviado' });
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ erro: 'Token inválido' });
            }
            req.usuario = decoded;
            next();
        });
    }
    // MIDDLEWARE DE AUTORIZAÇÃO (ROLE)
    autorizarRole(roleNecessaria) {
        return (req, res, next) => {
            if (!req.usuario) {
                return res.status(500).json({ erro: 'Usuário não carregado' });
            }
            if (req.usuario.role !== roleNecessaria) {
                return res.status(403).json({ erro: 'Acesso negado' });
            }
            next();
        };
    }
}

module.exports = Middleware_;