import React from 'react'

export const FormularioCrud = () => {

const datos  ={
nombre: '', 
mail:'',
password:'', 
esAdm:'',
comentarios:''
    
};

    return (
        <>
        <form>
            <label htmlfor="nombre">Nombre</label>
            <input name="nombre" 
            type="text" 
            placeholder="ingrese su nombre"/>
            <hr/>
            <label htmlfor="Email">Email</label>
            <input name="email" 
            type="email" 
            placeholder="ingrese su emaile"/>
            <hr/>
            <label htmlfor="PassWord">Contraseña</label>
            <input name="password" 
            type="password" 
            placeholder="**********"/>
        </form>
        <hr/>
        </>
    )
}
