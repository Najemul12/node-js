
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var mysql = require('mysql');
var myConnection = require('express-myconnection');

var app = express();

// Importing Models
var Perpus = require('./models/PerpusModel');

// Konfigurasi
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));

// -------------------------------------------*/
// Koneksi Database
app.use(
    myConnection(mysql,{
        
        host: 'localhost', 
        user: 'root',
        password : 'password',
        port : 3306, 
        database:'perpustakaan'

    }
    ,'single') //atau pool

);

app.use(express.urlencoded({ extended: false }));

// Route Models
app.use('/', Perpus);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting Server
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'));
});