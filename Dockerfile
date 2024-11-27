# Usa la imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
