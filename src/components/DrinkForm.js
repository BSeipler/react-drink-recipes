import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const DrinkForm = () => {
  const [redirect, setRedirect] = useState(false)
  const [spirit, setSpirit] = useState('')

  const toLink = `/drinks/${spirit}`

  const handleSubmit = e => {
    e.preventDefault()
    setRedirect(true)
  }

  useEffect(() => {
    setRedirect(false)
  })

  return (
    <div>
      {!redirect ? (
        <div class='flex justify-center mt-12'>
          <form className='w-full max-w-sm' onSubmit={handleSubmit}>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                  for='inline-full-name'
                >
                  Enter Spirit
                </label>
              </div>
              <div className='md:w-2/3'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='inline-full-name'
                  type='text'
                  onChange={e => setSpirit(e.target.value)}
                  value={spirit}
                />
              </div>
            </div>

            <div className='md:flex md:items-center'>
              <div className='md:w-1/3'></div>
              <div className='md:w-2/3'>
                <button
                  className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
                  type='submit'
                >
                  Get Cocktails
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Redirect to={toLink} />
      )}
    </div>
  )
}

export default DrinkForm
