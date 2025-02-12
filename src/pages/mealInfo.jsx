import React, { useState } from 'react'
import { useParams } from 'react-router'

function MealInfo() {

    const {mealid} = useParams()
    const [info, setInfo] = useState()

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json()
        setInfo(jsonData.meals[0])
    }

    if (info != '') {
        getInfo()
    }
    return (
       <div>
        {!info ? 'data not found!' : 
        <div className=' xl:items-center xl:flex xl:p-20 mt-2 sm:flex-col sm:p-10 ' >
            <img className='xl:h-120 xl:w-120 rounded-lg drop-shadow-xl sm:h-100' src={info.strMealThumb} alt={`${info.strMeal} image`} />
            <div className='xl:p-10 text-center items-center flex flex-col justify-center' >
            <h1 className='font-bold text-6xl mb-10 text-[#4B164C]' > {info.strMeal} </h1>
            <h3 className='font-bold text-2xl text-[#1A120B]'>Instructions:</h3>
            <p className='mb-10'>{info.strInstructions}</p>
            <p className='text-2xl' >Recipe Tutorial on Youtube</p>
            <a href={info.strYoutube} className='text-[#cd1818] font-bold text-3xl' target='blank' >Click Here</a>

            </div>
        </div>
        }
       </div>
    )
}

export default MealInfo
