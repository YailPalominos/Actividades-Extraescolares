import { getConnection } from '../database/conexion.js';
import sql from "mssql";

// Obtener todas las actividades
export const getActividades = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM Actividades');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send("Error al obtener las actividades");
    }
};

export const getActividad = async (req, res) => {
    const { clave } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("clave", sql.Int, clave)
            .query("SELECT * FROM actividades WHERE clave = @clave");

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Actividad no encontrada" });
        }

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la actividad" });
    }
};

// Crear una nueva actividad
export const createActividad = async (req, res) => {

    const { clave, nombre, categoria, descripcion } = req.body;

    // Validación de los campos requeridos
    if (!clave || !nombre || !categoria || !descripcion) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    try {
        const pool = await getConnection();
        await pool.request()
            .input("clave", sql.Int, clave)
            .input("nombre", sql.NVarChar(50), nombre)
            .input("categoria", sql.Char(1), categoria)
            .input("descripcion", sql.NVarChar(250), descripcion)
            .query("INSERT INTO Actividades (clave, nombre, categoria, descripcion) VALUES (@clave, @nombre, @categoria, @descripcion)");

        res.status(201).json({ message: "Actividad creada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la actividad" });
    }
};

//Actualiza una actividad
export const updateActividad = async (req, res) => {
    const { clave, nombre, categoria, descripcion } = req.body;

    // Validación de los campos requeridos
    if (!clave || !nombre || !categoria || !descripcion) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("clave", sql.Int, clave)
            .input("nombre", sql.NVarChar(50), nombre)
            .input("categoria", sql.Char(1), categoria)
            .input("descripcion", sql.NVarChar(250), descripcion)
            .query("UPDATE actividades SET nombre = @nombre, categoria = @categoria, descripcion = @descripcion WHERE clave = @clave");

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Actividad no encontrada" });
        }

        res.json({ message: "Actividad actualizada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la actividad" });
    }
};

// Eliminar una actividad por clave
export const deleteActividad = async (req, res) => {
    const { clave } = req.params;

    // Validar que se proporcione la clave
    if (!clave) {
        return res.status(400).json({ message: "La clave es requerida" });
    }

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input("clave", sql.Int, clave)
            .query("DELETE FROM actividades WHERE clave = @clave");

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Actividad no encontrada" });
        }

        res.json({ message: "Actividad eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar la actividad" });
    }
};