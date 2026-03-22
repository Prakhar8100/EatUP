import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {
    //console.log(data)
    const[foods,setFoods] = useState(data)
    const [category, setCategory] = useState('all')
    const [price, setPrice] = useState('all')

    const handleCategoryFilter = (cat) => {
        setCategory(cat)
        if (cat === 'all') {
            setFoods(data)
        } else {
            setFoods(data.filter(item => item.category === cat))
        }
    }

    const handlePriceFilter = (priceLevel) => {
        setPrice(priceLevel)
        if (priceLevel === 'all') {
            setFoods(data)
        } else {
            setFoods(data.filter(item => item.price === priceLevel))
        }
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
               <p className='font-bold text-gray-700'>Filter Type</p>
               <div className='flex justify-between flex-wrap'>
                <button onClick={() => handleCategoryFilter('all')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>All</button>
                <button onClick={() => handleCategoryFilter('burger')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Burgers</button>
                <button onClick={() => handleCategoryFilter('pizza')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Pizza</button>
                <button onClick={() => handleCategoryFilter('salad')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Salads</button>
                <button onClick={() => handleCategoryFilter('chicken')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>Chicken</button>
               </div>
            </div>

            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => handlePriceFilter('$')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$</button>
                    <button onClick={() => handlePriceFilter('$$')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$</button>
                    <button onClick={() => handlePriceFilter('$$$')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$$</button>
                    <button onClick={() => handlePriceFilter('$$$$')} className='m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
       {/*Display foods*/}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((items,index)=>(
                <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden'>
                    <img src={items.image} alt={items.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='p-4'>
                        <p className='font-bold text-gray-800'>{items.name}</p>
                        <p className='text-orange-600 font-bold text-lg'>
                            {items.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food