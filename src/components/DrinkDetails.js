import React from 'react'

const DrinkDetails = props => {
  console.log(props.ingredients)
  return (
    <div className='flex flex-col items-center my-10 text-gray-800'>
      <div>
        <h1 className='text-center text-3xl mb-3'>{props.name}</h1>
        <img src={props.image} alt='Image of drink' />
      </div>
      <div class='my-10'>
        <h2 className='text-2xl text-center'>Ingredients</h2>
        <ul>
          {props.ingredients.map((ingredient, i) => {
            return (
              <li class='my-3 mx-3'>
                {ingredient} - {props.measurements[i]}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='text-center mt-10 mb-20'>
        <h2 className='text-2xl'>Directions</h2>
        <p>{props.directions}</p>
      </div>
    </div>
  )
}

export default DrinkDetails
