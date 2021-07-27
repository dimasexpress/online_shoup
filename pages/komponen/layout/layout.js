import React from 'react';
import Nav from './navbar'
import Fot from './foter'
export default function lek ({children}){

    return(
        <div>
                <Nav/>
                        {children}
                <Fot/>
        </div>
    )
}