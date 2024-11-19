# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
