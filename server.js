const express=require('express');
const sqlite3=require('sqlite3');
const bodyParser=require('body-parser');
const Sequelize=require('sequelize');
const methodOverride=require('method-override');
const session=require('express-session');
const findUserMiddleware=require('./middlewares/find_user');
const authUserMiddleware=require('./middlewares/auth_user');

const app= express();

const tasksRoute=require('./routes/tasks_routes');
const registrationsRoute=require('./routes/registrations_routes');
const sessionsRoute=require('./routes/sessions_routes');
app.use(bodyParser.urlencoded({extented: true}));
app.use(methodOverride('_method'));
app.set('view engine','pug');
app.use(session({
  secret:['12eeerehgwolhuywrye9opwnkdur7','uwysohy2537qnsyfir6e90pjidy'],
  saveUninitialized: false,
  resave: false
}));
//Para que el middleware creado para las sesiones debe estar después de creada las sesión
app.use(findUserMiddleware);
app.use(authUserMiddleware);
app.use(tasksRoute);
app.use(registrationsRoute);
app.use(sessionsRoute);

//Creamos una nueva ruta home que tenga en cuenta el inicio de sesion del usuario
app.get('/',function(req,res){
  res.render('home',{user: req.user});
})

app.listen(3000);
