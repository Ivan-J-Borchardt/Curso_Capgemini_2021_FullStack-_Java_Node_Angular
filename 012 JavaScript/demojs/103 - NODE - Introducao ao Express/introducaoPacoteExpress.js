const express = require("express") //O módulo express retorna uma função que instancia o express
//const bodyParser = require("body-parser")


const app = express() //A função express cria uma instância de todo o framework express em app

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const porta = 3001;
app.listen(porta, function () {
    console.log(`Servidor Rodando na porta ${porta}`);
})

//Enviando um String
app.get("/", function (req, resp) {
    resp.send(
        `
        <html>
            <head>
            <meta charset="utf-8">
            </head>
            <body>
            <h1> Olá Pessoal!!! </h1>
            </body>
        </html>
        `

    )

})

app.get("/livros", function (req, resp) {

    var livro = "Clean Code"
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Meus Livros Favoritos 3.1 </h1>
                    <p>${livro}</p>
                    <button id="btn">salvar</button>
                    <script>
                        var btn = document.getElementById("btn")
                        btn.onclick = function(){
                            console.log("Clicou o BTN");

                        }
                    </script>
                </body>
            </html>
        `

    )

})

//Enviando um JavaScript Object como JSON
app.get("/usuarios", function (req, resp) {

    const users = ["Felisberto", "Alberto", "Annabella"]
    resp.json({ users })

})

//Renderizando páginas HTML a partir de arquivos...
app.get("/sobre", function (req, resp) {

    resp.sendFile(__dirname + "/html/sobre.html")

})

//Rota Dinâmica 
app.get("/enredeco/:cep", async function (req, resp) {

    var endereco = await buscarEnd(req.params.cep) //chama função assincrona para buscar CEP 
    console.log(endereco.data);
    var end = endereco.data
    resp.send(end)

})


//Apresenta fromulário de contato 
app.get("/contato", function (req, resp) {
    resp.sendFile(__dirname + "/html/contato.html")
})


//Pegando valores de formulário com  método GET
app.get("/msn", function (req, resp) {
    console.log(req.query.nmNome);   //- *.query.* para o método GET
    resp.send("Formulario recebido pelo metodo GET..." + req.query.nmNome)
})

//Pegando valores de formulário com Método POST  
app.post("/msn", function (req, resp) {
    console.log(req.body.nmNome);   //- *.body.* para o método POST
    resp.send("Formulario recebido pelo metodo POST..." + req.body.nmNome)
})




async function buscarEnd(cep) {



    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: `https://viacep.com.br/ws/${cep}/json/`

    }


    return await axios.request(options)


}