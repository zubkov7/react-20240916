import { restaurants } from "../../materials/mock.js";
import { Restaurant } from "./Restaurant.jsx";
import { useState } from 'react'

export function TabsRestaurants() {
	const startIndex = restaurants.findIndex(((restaurantItem) => restaurantItem.name)); // на случай если ресторан с индексом 0 будет без имени, т.е. невалидный. Иначе, если далить имя у первого ресторана, то первый рендер будет баганый (будет постой таб).
	const [currIndex, setCurrIndex] = useState(startIndex);

	return !!restaurants.length && (
		<div className="restaurants-tabs">
			<div className="restaurants-tabs__header">
				{
					restaurants.map((restaurant, index) => !!restaurant.name && (
						<div
							onClick={event => setCurrIndex(event.target.dataset.index)}
							data-index={index}
							className="restaurants-tabs__title"
						>{restaurant.name}</div>
					))
				}
			</div>

			<div className="restaurants-tabs__body">
				<Restaurant restaurantData={restaurants[currIndex]} />
			</div>

		</div>
	)
}