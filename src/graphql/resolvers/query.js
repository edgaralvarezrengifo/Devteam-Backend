
import Proyecto from "../../models/Proyecto.js"
import User from "../../models/User.js"
import Estados_proyecto from "../../models/Estados_proyecto.js"
import Estados_usuarios from "../../models/Estados_usuario.js"
import Fase_proyecto from "../../models/Fase_proyecto.js"
import Roles_usuarios from "../../models/Roles_usuarios.js"

const Query = {

    hola() {
        return "Esta es la respuesta de la query hola"
    },
    proyectos: async () => {
        return await Proyecto.find()
            .populate({path: "estado", model: "Estados_proyectos"})
            .populate({ path:"encargado" , model:"User"})
            .populate({ path: "fase", model:"Fase_proyecto" });
    },
    user: async () => {
        return await User.find().populate({ path: "status" , model:'Estados_usuarios'}).populate({ path: "rol" , model:'Roles_usuarios'})

       // return await User.find().populate('status','estados_usuario')
        //return await User.find({}).populate({ path: 'status', model: 'estados_usuarios' })
    },
    estados_proyecto:async () => {
        return await Estados_proyecto.find()
    },
    estados_usuario:async () => {
        return await Estados_usuarios.find()
    },
    fase_proyecto:async () => {
        return await Fase_proyecto.find()
    },
    roles_usuario:async () => {
        return await Roles_usuarios.find()
    }
}

export default Query;