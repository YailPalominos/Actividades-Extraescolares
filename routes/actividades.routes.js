import { Router } from "express";
import { getActividades,getActividad,createActividad,updateActividad,deleteActividad } from "../controllers/actividades.Controller.js";
const router = Router();

// Obtener todos los actividades
router.get("/actividades", getActividades);

//Obtener un solo actividad por ID
router.get("/actividades/:clave", getActividad);

// Crear un nuevo actividad
router.post("/actividades", createActividad);

//Actualizar un actividad por ID
router.put("/actividades", updateActividad)

//Eliminar un actividad por ID
router.delete("/actividades/:clave", deleteActividad)

export default router;
