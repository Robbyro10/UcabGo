
import { restaurants } from '../data/restaurants'

export const getRestaurantById = (id) => {
    return restaurants.find( restaurant => restaurant.id === id)
}