import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import people from '../../public/images/3.jpeg'
function RestaurantCard() {
    return ( 
        <div className="border w-64 h-74 m-3 rounded overflow-hidden cursor-pointer">
            
            <Link href="">

                <Image
                 src={people} 
                 alt=""
                className="w-full h-36"/>

                <div className="p-1 text-green-500">
                <h3 className="font-bold mb-2 text-xl">Fine Indian Restaurant</h3>
                <div className="flex items-start">
                    <h3>****</h3>
                    <p className="ml-2">Reviews</p>
                    </div>
                    <div className="flex text-reg font-light capitalize">
                        <p className="mr-3">Indian</p>
                        <p className="mr-3">$$$$</p>
                        <p>toronto</p>
                    </div>
                    <p className="mt-1 font-bol
                    text-sm">Booked 3 times today</p>
                </div>
           

            </Link>
        
        </div>
     );
}

export default RestaurantCard;