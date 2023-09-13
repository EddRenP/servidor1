import chalk from "chalk";

import http from "http";

const port = 8080;

const host = "http://localhost:";

//objeto req = request; url, metodo, data
//objeto res = response; http
//ruta es la direccion al recurso que quiero acceder

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/user') {
    console.log(chalk.green("GET "+host+port+req.url));
  } 
  else if (req.method === 'POST' && req.url === '/user') {
    console.log(chalk.green("POST "+host+port+req.url));
  }
});

const mensaje ={
    "mensaje": "Servidor corriendo",
    "nombre": "Edd R"
}

server.listen(port, () => {
  console.log(chalk.blue("Hola "+mensaje.nombre+", "+mensaje.mensaje));
});