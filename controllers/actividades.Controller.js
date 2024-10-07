import { getConnection } from '../database/conexion.js';

// Obtener todas las actividades
export const getActividades = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.request.query('SELECT * FROM actividades');
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send("Error al obtener las actividades");
    }
};

// // Obtener una actividad por clave
// export const getActividad = async (req, res) => {
//     try {
//         const { clave } = req.params;
//         const connection = await getConnection();
//         const result = await connection.query('SELECT * FROM actividades WHERE clave = ?', [clave]);
//         if (result.length === 0) {
//             res.status(404).send("Actividad no encontrada");
//         } else {
//             res.json(result[0]);
//         }
//     } catch (error) {
//         res.status(500).send("Error al obtener la actividad");
//     }
// };

// // Crear una nueva actividad
// export const createActividad = async (req, res) => {
//     try {
//         const { nombre, categoria, descripcion } = req.body;
//         const connection = await getConnection();
//         const result = await connection.query(
//             'INSERT INTO actividades (nombre, categoria, descripcion) VALUES (?, ?, ?)',
//             [nombre, categoria, descripcion]
//         );
//         res.send("Actividad creada con éxito");
//     } catch (error) {
//         res.status(500).send("Error al crear la actividad");
//     }
// };

// // Actualizar una actividad por clave
// export const updateActividad = async (req, res) => {
//     try {
//         const { clave } = req.params;
//         const { nombre, categoria, descripcion } = req.body;
//         const connection = await getConnection();
//         const result = await connection.query(
//             'UPDATE actividades SET nombre = ?, categoria = ?, descripcion = ? WHERE clave = ?',
//             [nombre, categoria, descripcion, clave]
//         );
//         res.send("Actividad actualizada con éxito");
//     } catch (error) {
//         res.status(500).send("Error al actualizar la actividad");
//     }
// };

// // Eliminar una actividad por clave
// export const deleteActividad = async (req, res) => {
//     try {
//         const { clave } = req.params;
//         const connection = await getConnection();
//         const result = await connection.query('DELETE FROM actividades WHERE clave = ?', [clave]);
//         res.send("Actividad eliminada con éxito");
//     } catch (error) {
//         res.status(500).send("Error al eliminar la actividad");
//     }
// };
