import axios from 'axios'
import { Card } from "@/components/Card";
import { Restaurant } from './api/data';

const getRestaurants = async () => {
  try {
    const res = await axios.get('http://localhost:3002/api/restaurants')
    return res.data
  } catch (error) {
    console.log(error);
  }
}

export default async function Page() {
  const data = await getRestaurants();

  return (
    <div>
      <h1 className="my-6 mx-auto text-center text-2xl font-bold">Restros UK</h1>
      {data?.map((restaurant: Restaurant) => (
        <Card
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.name}
          imageSrc={restaurant.image_url}
          desc={restaurant.address}
        />
      ))}
    </div>
  )
}
