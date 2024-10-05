const sql = require('mssql');
require('dotenv').config({ path: './credenciales.env' }); // Asegúrate de cargar el archivo de entorno

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Para conexiones seguras
        trustServerCertificate: true, // Para conexiones locales
        multipleActiveResultSets: true // Permite múltiples consultas activas
    }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos SQL Server');
        return pool;
    })
    .catch(err => {
        console.log('Error en la conexión con la base de datos:', err);
        console.log(dbConfig);

    });

module.exports = { sql, poolPromise };
