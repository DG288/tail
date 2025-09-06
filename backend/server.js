// server.js

// 1. Importamos las herramientas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 2. Creamos el servidor
const app = express();

// 3. Configuramos el servidor para que entienda JSON y acepte peticiones del frontend
app.use(cors());                    // permite que React (en otro puerto) hable con este backend
app.use(express.json());            // permite leer datos en formato JSON

// 4. Conectamos a MongoDB
mongoose.connect('mongodb://localhost:27017/tareas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 5. Verificamos si la conexión fue exitosa
const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ Error al conectar a MongoDB:'));
db.once('open', () => {
  console.log('✅ Conexión exitosa a MongoDB');
});

// 6. Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend funcionando 🚀' });
});

// 7. Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`👉 Servidor corriendo en http://localhost:${PORT}`);
});