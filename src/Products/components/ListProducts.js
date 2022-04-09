import React, { useState, useEffect } from 'react';
import Loanding from './Loanding';

const ListProducts = () => {
    const [isLoading, setIsLoading ] = useState(true)    

    useEffect(() => {
    
    })

    return (        
            isLoading
            ? <Loanding />
            : 'Mostrar Listado...'        
    )
}

export default ListProducts