import Proyecto from "../../models/Proyecto.js";
import User from "../../models/User.js";

const Mutation = {

    createProyecto: async (_, { estado,fase,nombre_proyecto,objetivos_generales,objetivos_especificos,presupuesto,encargado, observaciones, avance }) => {
        const newProyecto = new Proyecto({ estado,fase,nombre_proyecto,objetivos_generales,objetivos_especificos,presupuesto,encargado, observaciones, avance })
        return await newProyecto.save();
      
    },
    updateFaseProyecto: async(_,{_id, fase})=>{
        const idd = await Proyecto.findById({_id});
        await Proyecto.updateOne({_id},{$set: {fase}}); 
        return await Proyecto.findById(_id);
    },
    deleteProyecto: async(_,{_id})=>{
        await Proyecto.findByIdAndDelete({_id})
        return "Delete successful"
    },

    updateProyecto: async(_,{_id, nombre_proyecto,objetivos_generales,objetivos_especificos,presupuesto})=>{
        const idd = await Proyecto.findById({_id});
        await Proyecto.updateOne({_id},{$set: { nombre_proyecto,objetivos_generales,objetivos_especificos,presupuesto}}); 
        
        return await Proyecto.findById(_id);
    },

    updateEstadoProyecto: async(_,{_id, estado})=>{
        const idd = await Proyecto.findById({_id});
        await Proyecto.updateOne({_id},{$set: {estado}}); 
        return await Proyecto.findById(_id);
    },

    createUser: async(_, { name, email, status, user, password, rol })=>{
        const newUser = new User({ name, email, status, user, password, rol })
        return await newUser.save();
    },
    updateUser: async(_,{_id, name, email})=>{
        const idd = await User.findById({_id});
        User.id="asdasd";
        await User.updateOne({_id},{$set: {name, email}}); // no se a que asignarle este valor, que es donde se hace el update
        return await User.findById(_id);
    },
    updateUserStatus: async(_,{_id, status})=>{
        const idd = await User.findById({_id});
        await User.updateOne({_id},{$set: {status}}); 
        return await User.findById(_id);
    },
    deleteUser: async(_,{_id})=>{
        await User.findByIdAndDelete({_id})
        return "Delete successful"
    },
    findUser: async(_,{email})=>{
        console.log(await User.findOne({email}))
        return await User.findOne({email})
    }

}
    

export default Mutation;