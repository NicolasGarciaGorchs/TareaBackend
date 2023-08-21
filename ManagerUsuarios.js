const fs = require('fs');

class ManagerUsuarios {
  path
  constructor(file) {
    this.path = `${process.cwd()}/files/Usuarios.json${file}`
  }

  async crearUsuario(usuario) {
    try {
      const { nombre, apellido, edad, curso } = usuario
      const infoUser = {
        nombre,
        apellido,
        edad,
        curso,
      }

      const users = []

      users.push(infoUser)

      await fs.promises.writeFile(this.path, JSON.stringify(users))

      return infoUser
    } catch (error) {
      console.log(error)
    }
  }

  async consultarUsuarios() {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, 'utf-8')
        const users = JSON.parse(data)
        return users
      }
      return []
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ManagerUsuarios