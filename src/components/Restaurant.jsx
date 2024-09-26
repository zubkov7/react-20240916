import { Menu } from "./Menu.jsx";
import { Reviews } from "./Reviews.jsx";

export function Restaurant({ restaurantData }) {
	console.dir(restaurantData);
	return restaurantData?.name && (
		<div className="restaurant-item" data-id={restaurantData.id}>
			<h2 className="restaurant-item__name">
				{restaurantData.name}
			</h2>

			<Menu menuData={restaurantData.menu} />

			<Reviews reviewsData={restaurantData.reviews} />
		</div>
	)
}