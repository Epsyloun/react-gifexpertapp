import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    
    //const categories = ['One Punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['Samurai X']);

    // const AgregarTema = () => {

    //     setCategories([...categories, 'hunterXhunter']);

    // }

    return <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(cat =>(
                        <GifGrid
                            key={cat}
                            category={cat}
                        />
                    ))
                }
            </ol>
        </>

}

export default GifExpertApp;