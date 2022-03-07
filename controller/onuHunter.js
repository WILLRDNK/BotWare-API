const { json } = require('express/lib/response')
const scanerTesteAcessoRemoto = require('../models/Bot_Scanner/onuHunterMark49')

module.exports = app =>{
    app.get('/onuhunter/mark49', (req, res)=>{
        res.send('voce esta na rota mark1 envie um post com ip se for capaz')

    });

    app.post('/onuhunter/mark49',async (req, res) => {
            const corpo = req.body;
            if(corpo.ip == undefined){
            res.json({erro:"ip não definido"});
            }
            const scan = await scanerTesteAcessoRemoto(corpo.ip);
            res.json(scan);
            })
}

