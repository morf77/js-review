import React from 'react';
import Description from './description'

const Information =({info})=>{
    return (
        <div>
            {info.map((item,i) =>{
                    console.log(item.text)
                    return (<Description
                    key={i} 
                    id={item.id} 
                    title={item.title} 
                    text={item.text}
                    mysource={item.mysource}/>
                    );
                })
            }            
        </div>
    )
}
export default Information;