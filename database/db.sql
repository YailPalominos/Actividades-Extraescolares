CREATE DATABASE [Actividades-extraescolares];
GO

USE [Actividades-extraescolares];
GO

CREATE TABLE Actividades
(
    clave INT PRIMARY KEY,                       -- Clave primaria
    nombre NVARCHAR(50) NOT NULL,               -- Nombre de la actividad
    categoria CHAR(1) NOT NULL,                 -- Categoría de la actividad (una letra)
    descripcion NVARCHAR(250) NOT NULL           -- Descripción de la actividad
);
GO
