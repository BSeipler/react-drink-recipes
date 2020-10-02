import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DrinkDetails from '../components/DrinkDetails'
import axios from 'axios'
import DrinkDetailsCard from '../components/DrinkDetailsCard'

const DrinkDetailsPage = () => {
  const [drink, setDrink] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [measurements, setMeasurements] = useState([])
  const [directions, setDirections] = useState('')
  const { id } = useParams()

  let listOfIngredients

  const getDrinkDetails = async () => {
    try {
      const results = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      console.log(results.data.drinks[0])
      const ingredientList = Object.values(results.data.drinks[0])
        .slice(21, 36)
        .filter(ingredient => {
          if (ingredient !== null) return ingredient
        })
      console.log(ingredientList)
      console.log(Object.values(results.data.drinks[0]))
      const listOfMeasurements = Object.values(results.data.drinks[0])
        .slice(36, 50)
        .filter(measurement => {
          if (measurement !== null) return measurement
        })
      const directions = Object.values(results.data.drinks[0])[14]
      setDirectionsState(directions)
      setMeasurementListState(listOfMeasurements)
      listOfIngredients = ingredientList
      setIngredientListState(listOfIngredients)
      return setDrink(results.data.drinks[0])
    } catch (error) {
      console.log(error.message)
    }
  }

  const setIngredientListState = ingredients => {
    return setIngredients(ingredients)
  }

  const setMeasurementListState = measurements => {
    return setMeasurements(measurements)
  }

  const setDirectionsState = directions => {
    return setDirections(directions)
  }

  useEffect(() => {
    getDrinkDetails()
  }, [])

  return (
    <div className='flex justify-center'>
      <DrinkDetailsCard
        name={drink.strDrink}
        image={drink.strDrinkThumb}
        ingredients={ingredients}
        measurements={measurements}
        directions={directions}
      />
    </div>
  )
}

export default DrinkDetailsPage
