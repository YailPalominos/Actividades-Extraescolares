import sql from "mssql";

const dbSettings = {
    user: "sa",
    password: "191By1471",
    server: "YAIL\\SERVIDORSQL",
    database: "Actividades",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}