import React, { useEffect, useState } from 'react'
import DrinkCard from './../components/DrinkCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DrinksPage = () => {
  const [error, setError] = useState(false)
  const [drinks, setDrinks] = useState([])
  const { drink } = useParams()

  const getDrinks = async () => {
    try {
      const results = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`
      )
      if (!results.data.drinks) {
        return setError(true)
      }
      setError(false)
      return setDrinks(results.data.drinks)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getDrinks()
  }, [drink])

  return (
    <div className='flex flex-wrap justify-center'>
      {!error ? (
        drinks.map((drink, i) => {
          return (
            <DrinkCard
              name={drink.strDrink}
              image={drink.strDrinkThumb}
              id={drink.idDrink}
              key={i}
            />
          )
        })
      ) : (
        <h1 className='h-full'>There are no results</h1>
      )}
    </div>
  )
}

export default DrinksPage
