const Sequelize = require('sequelize');

// Não subam dados sensíveis !!!
// Depois de preencher os campos abaixo com seus dados, 
// adicionem este aquivo no seus .gitignore
// Caminho relativo: "src/database/index.js"

const DB_NAME = '';
const DB_USER = '';
const DB_PASS = '';
const DB_CONFIG = {
    dialect: '',
    host: '',
    port: ''
};

// objeto para guardar a conexão do banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar uma conexão com o banco de dados");
}

async function hasConnection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro ao tentar se conectar ao banco de dados");
    }
};

Object.assign(db, {
    hasConnection,
});

module.exports = db;