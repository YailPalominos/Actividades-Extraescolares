import sql from "mssql";

const dbSettings = {
    user: "sa",
    password: "191By1471",
    server: "127.0.0.1",
    database: "Actividades_extraescolares",
    options: {
        trustServerCertificate: true,
    },
    port: 1433
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
}