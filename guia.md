# INTEGRAR UN socket

un socket nos permite comunicar entre dos procesos o aplicaciones.

## Instalar libreria

```bash
npm i socket.io
```
## Importarlas en el proyecto 

```javascript
const http = require('http');
const { Server } = require('socket.io');

```
## Crear nuestro servidor socket

```javascript
const server = http.createServer(app);
const io = new Server(server);

```

## crear endpoint

```javascript
io.on('connection',(socket) =>{
    console.log('A user connected');
    socket.on('disconnect',(){
        console.log('A user disconnected');
    });
});

```

## Poner el servidor  ESCUCHAR
```javascript
server.listen(3000,() => {
    console.log('Server is running )
});
const io = new Server(server);

```
