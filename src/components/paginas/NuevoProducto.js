import React, {useContext} from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {FirebaseContext} from '../../firebase'


const NuevoProducto = () => {

    //Operaciones de firebase con Context
    const {firebase} = useContext(FirebaseContext);

    const formik = useFormik({
        initialValues:{
            nombre: '',
            descripcion: '',
            precio: '',
            categoria: '',
            imagen:'',
            
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                            .min(3, 'Los productos deben tener mas caracteres')
                            .required('El nombre es obligatorio'),
            descripcion: Yup.string()
                            .min(10, 'La descripcion debe ser más larga')
                            .required('La descripcion es obligatoria'),
            precio: Yup.number()
                            .min(1, 'Debes agregar un número')
                            .required('El precio es obligatorio'),
            categoria: Yup.string()
                            .required('La categoria es obligatoria'),

        }),
        onSubmit: producto => {
            try{
                firebase.db.collection('productos').add(producto)
            }catch (error){
                console.log(error);
            }
        }
         
    })

    return ( 
        <>
            <h1 className='text-3xl font-light mb-4'>Agregar producto</h1>

            <div className='flex justify-center mt-10'>
                <div className='w-full max-w-3xl'>
                    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} onBlur={formik.handleBlur}>

                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                            <input className='shadow appearance-none border rounder w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            ' id='nombre' type='text' placeholder='Nombre producto' value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        </div>

                        { formik.touched.nombre && formik.errors.nombre? (
                            <div className='bg-red-100 border-l-4 border-red-700 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='descripcion'>Descripción</label>
                            <textarea className='shadow appearance-none border rounder w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40
                            ' id='descripcion' placeholder='Descripción del producto' value={formik.values.descripcion} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            </textarea>
                        </div>

                        { formik.touched.descripcion && formik.errors.descripcion? (
                            <div className='bg-red-100 border-l-4 border-red-700 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error</p>
                                <p>{formik.errors.descripcion}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='precio'>Precio</label>
                            <input className='shadow appearance-none border rounder w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            ' id='precio' type='number' placeholder='10000' min={0} value={formik.values.precio} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        </div>

                        {formik.touched.precio && formik.errors.precio? (
                            <div className='bg-red-100 border-l-4 border-red-700 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error</p>
                                <p>{formik.errors.precio}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='categoria'>Categoria</label>
                            <select className='shadow appearance-none border rounder w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            ' id='categoria' name='categoria' value={formik.values.categoria} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option value={""}>🎯➜ seleccione --</option>
                                <option value={"desayuno"}>🎯➜ Desayuno</option>
                                <option value={"almuerzo"}>🎯➜ Almuerzo</option>
                                <option value={"comida"}>🎯➜ Comida </option>
                                <option value={"bebida"}>🎯➜ Bebidas </option>
                                <option value={"postre"}>🎯➜ Postre </option>
                                <option value={"ensalada"}>🎯➜ Ensalada</option>
                            </select>
                        </div>

                        { formik.touched.categoria && formik.errors.categoria? (
                            <div className='bg-red-100 border-l-4 border-red-700 text-red-700 p-4 mb-5' role='alert'>
                                <p className='font-bold'>Hubo un error</p>
                                <p>{formik.errors.categoria}</p>
                            </div>
                        ): null
                        }

                        <div className='mb-4'>
                            <label className='block text-gray-600 text-sm font-bold mb-2' htmlFor='imagen'>Subir imagen</label>
                            <input className='shadow appearance-none border rounder w-full py-2 
                            px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                            ' id='imagen' type='file' accept='image/*' value={formik.values.imagen} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        </div>


                        <input
                        type='submit'
                        className='bg-gray-700 hover:bg-slate-500 w-full mt-5 p-2 text-white uppercase font-bold'
                        value={"Agregar producto"} 
                        />

                    </form>
                </div>
            </div>
        </>
     );
}
 
export default NuevoProducto;