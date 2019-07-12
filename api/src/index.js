const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* cros permite que todos endereços/urls/servidores/ips possam acessar esse backend */
const cors = require('cors');

/* express nos permite lidar com rotas/parametros/respostas */
const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

/* protocolo http */
const server = require('http').Server(app);

/* protocolo web-socket ele permite fazer a comunicação em tempo real */
const io = require('socket.io')(server);

/* conexão com o banco de dados mongodb */
mongoose.connect('mongodb+srv://howl:root@cluster0-korym.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.get('/', (req, res) => {
  res.json({
       ok: 'api',
  });
});

/* nosso middleware passa o io para todas as rotas */
app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

/* todas as rotas da aplicação */
app.use(require('./routes'));


server.listen(3333);
