const express = require('express')

const app = express();
const PORT = 3000;
const path = require('path');
const data = require('./public/data/lanches.json')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));


app.get('/sugestao', (req, res) => {
    const nome = req.query.nome;
    const ingredientes = req.query.ingredientes;

    res.send(`
     <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <title>Cardápio DevBurger</title>
</head>

<body>

  <header class="navbar">
        <h1 class="navbar__titulo">
            <i class="fas fa-hamburger"></i> DEVBURGER
        </h1>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="https://github.com/lucas7araujo" target="_blank" class="navbar__link">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="navbar__item">
                <a href="https://www.linkedin.com/in/lucasaraujo21/" target="_blank" class="navbar__link">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li class="navbar__item">
                <a href="https://instagram.com/aaraujo.dev" target="_blank" class="navbar__link">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
    </header>

    <main>

        <div class="agradecimento">
            <h2 class="agradecimento__titulo">OBRIGADO PELA SUGESTÃO! </h2>
            <p class="agradecimento__sugestao"><strong>NOME SUGERIDO: </strong> ${nome}</p>
            <p class="agradecimento__ingredientes"><strong>INGREDIENTES: </strong> ${ingredientes}</p>
        </div>

    </main>

    <script src="../server.js"></script>

    <footer class="footer">
        <div class="footer__content">
            <img src="/images/lucas_perfil.jpeg" alt="Lucas Araújo" class="footer__foto" />

            <div class="footer__texto">
                <p><strong>Lucas Araújo</strong></p>
                <p>Estudante do 2º período de Sistemas de Informação na PUC Betim.</p>
                <p>Atualmente em busca de uma oportunidade de estágio para aplicar meus conhecimentos,
                    contribuir com inovação e aprimorar minhas habilidades.</p>
            </div>
        </div>
    </footer>

</body>

</html>
  `);
});

app.get('/contato', (req, res) => {
     res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    const html = `
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <title>Cardápio DevBurger</title>
</head>

<body>

    <header class="navbar">
        <h1 class="navbar__titulo">
            <i class="fas fa-hamburger"></i> DEVBURGER
        </h1>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="https://github.com/lucas7araujo" target="_blank" class="navbar__link">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="navbar__item">
                <a href="https://www.linkedin.com/in/lucasaraujo21/" target="_blank" class="navbar__link">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li class="navbar__item">
                <a href="https://instagram.com/aaraujo.dev" target="_blank" class="navbar__link">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
    </header>
    <main>
            
        <div class="contato__agradecimento">
            <h1 class="contato__mensagem">Obrigado pelo contato, ${nome}!</h1>
            <p class="contato__texto"><strong>E-mail:</strong> ${email}</p>
            <p class="contato__texto"><strong>Assunto:</strong> ${assunto}</p>
            <p class="contato__texto"><strong>Mensagem:</strong></p>
            <p class="contato__texto">${mensagem}</p>
        </div>
    </main>

    <footer class="footer">
        <div class="footer__content">
            <img src="/images/lucas_perfil.jpeg" alt="Lucas Araújo" class="footer__foto" />

            <div class="footer__texto">
                <p><strong>Lucas Araújo</strong></p>
                <p>Estudante do 2º período de Sistemas de Informação na PUC Betim.</p>
                <p>Atualmente em busca de uma oportunidade de estágio para aplicar meus conhecimentos,
                    contribuir com inovação e aprimorar minhas habilidades.</p>
            </div>
        </div>
    </footer>

</body>
</html>
    `;

    res.send(html);
});

app.get('/api/lanches', (req, res) => {
    res.json(data.lanches);
})

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});