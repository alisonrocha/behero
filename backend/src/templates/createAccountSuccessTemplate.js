const createAccountSuccessTemplate = (name) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Envolve.me</title>
    </head>
    <body>
        <center>
            <div>
                <h1>Parabéns ${name}!</h1>
                <p>
                    Sua conta foi criada com sucesso
                    na plataforma Envolve.me.
                    Desfrute das nossas funcionalidades e 
                    faça o bem ao próximo!
                </p>
            </div>
        </cemter>
</body>
</html>
`;

module.exports = createAccountSuccessTemplate;