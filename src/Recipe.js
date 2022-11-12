import React from 'react'

function Recipe({title,calories,image,ingredients}) {
  return (
    <div>
        <h1 className='title'>{title}</h1>
        <ol>
           {ingredients.map(ing => (
            <li>
                {ing.text}
            </li>
           ))}

        </ol>
        <p>Calorise.  {calories}</p>
        <img src={image} alt=''/>
        
    </div>
  )
}

export default Recipe
