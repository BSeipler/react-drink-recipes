import React from 'react'
import { Link } from 'react-router-dom'

const DrinkCard = props => {
  const toLink = `/drink/details/${props.id}`
  return (
    <div className='m-5'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img
          className='w-full'
          src={props.image}
          alt='Sunset in the mountains'
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-center'>{props.name}</div>
        </div>
        <div className='px-6 pt-4 pb-2 text-center'>
          <Link to={toLink}>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DrinkCard
