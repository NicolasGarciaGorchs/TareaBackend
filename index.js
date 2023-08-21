const ManagerUsuarios = require ('./ManagerUsuarios.js')

const managerUsuarios = new  ManagerUsuarios ('Usuarios.json')

const usuario = 
    {
    nombre: 'Nicolás',
    apellido: 'García Gorchs',
    edad: '31',
    curso: 'Backend',
    pago: true,
}

managerUsuarios.crearUsuario(usuario)

managerUsuarios
    .consultarUsuarios ()
    .then (response => console.log (response))
    .catch (err => console.log (err))