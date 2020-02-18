const express = require("express");
const app = express();
const conexion = require('./database/conect')
const rutas = require('./routes/index')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

/**inicializaciones */
conexion;



/**midleware */
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors({ origin: '*'}))
app.use('/', rutas);


app.listen(3000, () => {
    console.log('listening app on port: 3000')
})