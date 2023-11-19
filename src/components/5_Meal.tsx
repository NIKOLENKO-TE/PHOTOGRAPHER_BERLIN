import React, { useState } from 'react'
import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { mealData } from '../data/data'

const Meal = () => {
    const [foods, setFoods] = useState(mealData)
    const filterCat = (category) => {
        setFoods(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }
    return (
        <div className='w-full m-auto px-4 py-1 '>
            <h3 className="flex justify-center py-2">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block ">
                    <span className='relative text-white font-bold text-2xl '>Our Meal</span>
                </span>
            </h3>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center'>
                    <button
                        onClick={() => setFoods(mealData)}
                        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover: border-orange700'>All</button>
                    <button
                        onClick={() => filterCat('pizza')}
                        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover: border-orange700'>Pizza</button>
                    <button
                        onClick={() => filterCat('chicken')}
                        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover: border-orange700'>Chicken</button>
                    <button
                        onClick={() => filterCat('salad')}
                        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover: border-orange700' >Salad</button>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4' >
                {
                    foods.map((item) => (
                        <div key={item.id} className='border-none hover:scale-105 duration-300'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-[200px] object-cover rounded-lg'
                            />
                            <div className='flex justify-between px-2'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-700 h-20 w-20 rounded-full -mt-10 text-white text-xl py-4 px-2 border-8 font-bold'>{item.price}</p>
                            </div>
                            <div className='pl-2 py-4 -mt-9'>
                                <p className='flex items-center text-indigo-600'>View more<ArrowSmRightIcon className='w-5 ml-2' /></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Meal
