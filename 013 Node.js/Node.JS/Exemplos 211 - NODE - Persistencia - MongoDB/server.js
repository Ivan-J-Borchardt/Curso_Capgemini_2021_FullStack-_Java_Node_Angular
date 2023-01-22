/********* Web Technology Development Training **************************************************
 * Instructor  : Ivan J. Borchardt - linkedin.com/in/ivan-borchardt/
 *                                 - github.com/Ivan-J-Borchardt
 * Description : NODE - Persistence on MongoDB with Mongoose
 * Date        : 01.2021 
 ************************************************************************************************/

const mongoose = require("mongoose");

mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/dbTeste", {useMongoClient: true})
  .then(function(){
    console.log("MongoDB Conectado...");
  })
  .catch(function(err) {
    console.log("Erro ao conectar ao DB: " + err); 
});

//Model - Usuário
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require : true
    }, 
    sobrenome:{
        type: String, 
        require: true
    }, 
    email: {
        type: String,
        require: true
    }, 
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type : String
    }

})

//Collection
mongoose.model('usuarios', UsuarioSchema); 

//Inserindo dados na collection 
const usuario = mongoose.model('usuarios'); 

new usuario({
    nome: "Ivan", 
    sobrenome: "Jader Borchardt",
    email: "ivan.borchardt.cobol@gmail.com",
    idade: 22,
}).save()
  .then(function() {
    console.log("Usuario cadastrado com sucesso!"); 
}).catch(function(err) {
    console.log("Erro do DB: " + err);
})
/*
//
usuario.find((err,document)=> {
    console.log(document)
});

usuario.find({nome: "Ivan"}, (err,document)=> {
    console.log(document)
}); 

usuario.find({nome: "Ivan"})
.then(function(document) {
    console.log(document); 
}).catch(function(err) {
    console.log("Erro do DB: " + err);
});  


//update
usuario.updadeOne({nome: "Ivan"}, {nome: "Ivan Jader"}, (err, result)=> {
    if(err == null){
        console.log("Usuários alterado com sucesso" + JSON.stringify(result));
    }else{
        console.log("Erro do DB " + err); 
    }
}); 

usuario.updadeOne({nome: "Ivan"}, {nome: "Ivan Jader"})
.then(function(result) {
    console.log("Usuário alterado com sucesso " + JSON.stringify(result)); 
}).catch(function(err) {
    console.log("Erro do DB: " + err);
});





usuario.deleteOne({nome: "Ivan"}, (err, result)=> {
    if(err == null){
        console.log("Usuários deletado com sucesso" + JSON.stringify(result));
    }else{
        console.log("Erro do DB " + err); 
    }
}); 

usuario.deleteOne({nome: "Ivan"})
.then(function(result) {
    console.log("Usuário deletado com sucesso " + JSON.stringify(result)); 
}).catch(function(err) {
    console.log("Erro do DB: " + err);
});
*/



//https://medium.com/better-programming/how-to-use-mongoose-with-node-js-913a8073b29c