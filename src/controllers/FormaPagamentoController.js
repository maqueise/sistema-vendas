const db = require('../db/connection')
class FormaPagamerntoController{
    
    // LISTAR TODOS OS REGISTROS
    index(req,res){
        db.query('SELECT * FROM forma_pagamento',(err,result)=>{
            if(err){
              console.log(`Houve um erro ao listar os formaPagamento: ${err}`)
            }
            res.render('forma_pagamento/listar',{forma_pagamento_lista:result.rows})
          })
    }
    create(req,res){
        res.render('forma_pagamento/adicionar')
    }
    store(req,res){
        const query = {
            text:'INSERT INTO forma_pagamento (descricao) VALUES ($1)',
            values:[req.body.descricao]
          }
          db.query(query,(err,result)=>{
            if(err){
              console.log(`Houve um erro ao inserir o forma_pagamento: ${err}`)
            }
            res.redirect('/forma_pagamento/listar') 
          })    
    }
    edit(req,res){
        
        const query = {
           text:'SELECT * FROM forma_pagamento WHERE id=$1',
           values:[req.params.id] 
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`houve um erro ao editar: ${err}`)
            }
            res.render('forma_pagamento/editar',{forma_pagamento:result.rows[0]})
        })
    }
    update(req,res){
        const dados = req.body
        const query = {
            text:'UPDATE forma_pagamento SET descricao=$1 WHERE id=$2',
            values:[dados.descricao,dados.id]
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`Houve um erro ao atualizar o registro: ${err}`)
            }
                res.redirect('/forma_pagamento/listar')
        })
    }
    delete(req,res){
        const id = req.params.id
        const query = {
            text:'DELETE FROM forma_pagamento WHERE id=$1',
            values:[id]
        }
        db.query(query,(err,result)=>{
            if(err){
                console.log(`Houve um erro ao excluir: ${err}`)
            }
            res.redirect('/forma_pagamento/listar')
        })
    }
}
module.exports = new FormaPagamerntoController