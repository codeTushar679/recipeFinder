import React, { useState } from 'react'
import Animate from './animate'
import Mealcard from './mealcard'

function Homepage() {
    const [data, setData] = useState()
    const [search, setSearch] = useState()

    const result = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData = await get.json()
        // console.log(jsonData.meals);
        setData(jsonData.meals)
    }

    const handle = (a) => {
        setSearch(a.target.value)
    }

    
    // console.log(data);
    
    return (
        <div>

            <div className=' flex justify-center mt-16' >
                <Animate src='https://i.pinimg.com/originals/88/60/25/8860255f132b3f392e47e57d131219b9.gif' alt='two chefs cooking' />
            </div>
        <div>
        <h1 className='text-5xl font-bold text-gray-700 mt-10 mb-10 text-center'>Let's Search!</h1>
        </div>

        <div className='flex justify-center mb-10' >
            <input onChange={handle} className='rounded-l-lg bg-amber-50 h-9 w-60 p-3 outline-none' type="search" placeholder='Search any recipe!' name="" id="" />

            <button onClick={result} className='bg-[#F3C623] rounded-r-lg h-9 w-15' type="button">Search</button>
        </div>

        <div className=' ml-20 mb-10 '>
            <Mealcard detail={data} />
        </div>
        
        </div>
    )
}

export default Homepage
