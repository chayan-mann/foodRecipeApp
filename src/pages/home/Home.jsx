import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import RecipeItem from "../../components/RecipeItem.jsx"

export default function Home() {

  const{recipeList, loading} = useContext(GlobalContext)

  if(loading) return <div>Loading...please wait!</div>
  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipeList && recipeList.length>0
      // eslint-disable-next-line react/jsx-key
      ?recipeList.map((item)=> <RecipeItem item={item}/>)
      : <div>
        <p className='lg:text-4xl text-xl text-center text-black font-entrabold'>Nothing to show. Please search something</p>
        </div>
        }
    </div>
  )
}
