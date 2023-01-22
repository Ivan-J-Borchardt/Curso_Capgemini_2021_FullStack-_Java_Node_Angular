

const express = require("express")
const fs = require("fs")
const path = require("path")
const cors = require("cors")


const app = express()

//captura a requisição e se for uma req do tipo 
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.use(cors())

/*
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    next()
})
*/


app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.static(path.join(__dirname, "contratos")));


app.use(function (req, res, next) {
    console.log("Middleware 1");

    next()
})

app.use(function (req, res, next) {
    console.log("Middleware 2");

    next()
})


const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

/*
app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/telas/cadlivros.html")
})
*/

app.get("/livros/:cod", function (req, resp) {

    //Desafio: alterar a tela para que seja possível entrar 
    //com o código do aluno. De posse do código, buscar os dados 
    //do aluno no arquivo e apresentar na tela...

    //Efetuando a leitura do arquivo
    fs.readFile('livros.txt', 'utf8', function (err, data) {
        //Enviando para o console o resultado da leitura
       
        if (err) {
            console.log("Erro ao ler arquivo: " + err);
        } else {
            
        }
       
        console.log(data);

        var livro = data.split("\n")
        console.log(livro);

        let livros = []

        for (let i = 0; i < livro.length; i++) {
            const element = livro[i];
            livros.push(element.split(";"))
        }
        console.log(livros);

        /*
        livros = [
            ["Memórias Postumas de Brás Cubas","Machado de Assis",""],
            ["O Mulato","Aluísio Azevedo",""], 
            ["Fanfarras","Teófilo Dias",""]
           ]
        */
        /*
        livro.forEach(element => {
            livros.push(element.split(","))
        });
        */

        resp.send(livros[req.params.cod])
    });

})



app.get("/livros/:autor/:livro", function (req, resp) {

    //receber os dados do formulário 
    //salvar os dados do formulário em um arquivo 


    let livro = req.params.livro + "," + req.params.autor + "\n"
    //let livro = `${req.params.livro},${req.params.autor}` 
    fs.appendFile("livros.txt", livro, function (err) {
        if (err) {
            console.log("Erro ao gravar arquivo: " + err); 
            resp.json({"msn":err})
        } else {
            console.log("Salvou o livro: " + req.params.titulo);
            resp.json({"msn":"Salvo com sucesso..."})
        }
    })
   
    
})






app.post("/livros", function (req, resp) {

    //receber os dados do formulário 
    //salvar os dados do formulário em um arquivo 

   //console.log(__dirname);
   // let imagem = __dirname + "\\public\\img\\images.jpg"
    //path.join(__dirname, "\\public\\img\\images.jpg")

    let imagem = `http://localhost:3001/img/${req.body.nmFoto}`
    let livro = `${req.body.nmLivro};${req.body.nmAutor};${imagem}` 
    fs.appendFile("livros.txt", `${livro}\n`, function (err) {
        if (err) {
            throw err
        } else {
            console.log("Salvou o livro: " + req.body.nmLivro);
        }
    })
   
    resp.json({"msn":"Salvo com sucesso..."})

})







