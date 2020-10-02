import React from 'react'

const DrinkDetailsCard = props => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mt-10 mb-32'>
      <img className='w-full' src={props.image} alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='font-bold text-2xl mb-2 text-center'>{props.name}</div>
        <div className='font-bold text-lg mb-2'>Ingredients</div>
        <ul>
          {props.ingredients.map((ingredient, i) => {
            return (
              <li class='my-3 mx-3'>
                {ingredient} - {props.measurements[i]}
              </li>
            )
          })}
        </ul>
        <div className='font-bold text-lg mb-2'>Directions</div>
        <p className='text-gray-700 text-base'>{props.directions}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  )
}

export default DrinkDetailsCard
