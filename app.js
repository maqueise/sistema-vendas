
const express = require('express')
const nunjucks = require('nunjucks')
const clienteController = require('./src/controllers/ClienteController')
const formaPagamentoController = require('./src/controllers/FormaPagamentoController') 
const categoriaProdutoController = require('./src/controllers/CategoriaProdutoController')


const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','.html')

nunjucks.configure('./src/views', {
  autoescape: true,
  express: app
});

app.get('/',(req, res)=>{
  res.render('index')
})
// ROTAS PARA CADASTRO DE CLIENTES

app.get('/cliente/listar',clienteController.index)
app.get('/cliente/adicionar',clienteController.create)
app.post('/cliente/salvar',clienteController.store)
app.get('/cliente/editar/:id',clienteController.edit)
app.post('/cliente/atualizar',clienteController.update)
app.get('/cliente/excluir/:id',clienteController.delete)

// ROTAS PARA CADASTRO DE Formas de Pagamento

app.get('/forma_pagamento/listar',formaPagamentoController.index)
app.get('/forma_pagamento/adicionar',formaPagamentoController.create)
app.post('/forma_pagamento/salvar',formaPagamentoController.store)
app.get('/forma_pagamento/editar/:id',formaPagamentoController.edit)
app.post('/forma_pagamento/atualizar',formaPagamentoController.update)
app.get('/forma_pagamento/excluir/:id',formaPagamentoController.delete)

// ROTAS PARA CADASTRO DE CATEGORIA DE PRODUTO

app.get('/categoria_produto/listar',categoriaProdutoController.index)
app.get('/categoria_produto/adicionar',categoriaProdutoController.create)
app.post('/categoria_produto/salvar',categoriaProdutoController.store)
app.get('/categoria_produto/editar/:id',categoriaProdutoController.edit)
app.post('/categoria_produto/atualizar',categoriaProdutoController.update)
app.get('/categoria_produto/excluir/:id',categoriaProdutoController.delete)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})