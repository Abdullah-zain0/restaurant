import Image from 'next/image'
import people from '../public/images/6again.jpg'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'


export default function Home() {
  const restaurant = [1,2,3,4,5,6,7,8]
  
  return (
    <>
    <Header/>
    <div className='flex px-36 py-3 flex-wrap mt-10 justify-center'>
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