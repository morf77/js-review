import React from 'react';

const Description = ({id,title,text,mysource})=>{
    return(
        <div className="lightest-blue tl flip-left">
            <h1 className="titleShow bt">{`${id}) ${title}`}</h1>
            <div className="d-none">
                <img className="w-40 fr myanimation imgShadow ml3 br4" alt="." src={`${mysource}`} />
                {text.map((item,i)=>{
                    return (
                        <div>
                            <h2>{item.h}</h2>
                            <p>{item.p}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Description;