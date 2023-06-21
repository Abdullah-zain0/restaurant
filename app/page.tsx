import Image from 'next/image'
import people from '../public/images/6again.jpg'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import SearchBar from './components/SearchBar'


export default function Home() {
  const restaurant = [1,2,3,4,5,6,7,8]
  
  return (
    <>
    <Header/>
    <div className='flex sm:px-16 px:3 sm:py-3 py-0 flex-wrap mt-10 justify-center'>
    
    {
      restaurant.map(res =>(
        <RestaurantCard/>
      ))
    }
    </div>
    </>
  )
}
//bg-gradient-to-r from-yellow-200  via-[#3e201b]  to-yellow-100