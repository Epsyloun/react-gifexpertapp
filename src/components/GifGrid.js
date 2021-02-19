import React, {useState, useEffect} from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const{data:images,loading} = useFecthGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            {loading && <p className='card animate__animated animate__flash'>Cargando...</p>}
            
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem 
                        img = {img}
                        key = {img.id}
                        //Para enviar las propiedades de las imagenes como propiedades imdependientes
                        {...img}
                        />
                    ))
                }
            </div>
        </>
    )

}