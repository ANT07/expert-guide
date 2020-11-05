const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuarios', function(req, res) {
    res.send('getUsuarios');
})

app.post('/usuarios', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {

        res.send(body);
    }

})

app.put('/usuarios/:id', function(req, res) {

    let id = req.params.id;

    res.json({ id });
})

app.delete('/usuarios', function(req, res) {
    res.send('deleteUsuarios');
})

app.listen(3000, () => {
    console.log('Escuando en puerto 3000')
});