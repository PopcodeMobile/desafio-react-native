const Todo = require('../models/Todo');

module.exports = {
  async index(req, res) {
    const todos = await Todo.find().sort('-createdAt');

    return res.json(todos);
  },

  async store(req, res) {

    const {
      text, label, date,
    } = req.body;

    console.log(req.body);

    const complete = false;
    /* salvando no banco de dados */
    const post = await Todo.create({
      text,
      label,
      date,
      complete,
    });

    /* envia o post para o client em tempo real */
    req.io.emit('post', post);

    return res.json(post);
  },

  async remove(req, res) {
    const { id } = req.params;
    const resp = await Todo.findByIdAndRemove(id);
    return res.json(resp);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      text, label, date, complete
    } = req.body;
    const resp = await Todo.findByIdAndUpdate(id, { text, label, date, complete });
    return res.json(resp);
  },

  async toggle(req, res) {
    const { id } = req.params;
    const resp = await Todo.findByIdAndUpdate(id, { complete: true });
    return res.json(resp);
  }

};
