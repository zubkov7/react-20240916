import { Menu } from "./Menu.jsx";
import { Reviews } from "./Reviews.jsx";

export function Restaurant({ restaurantData }) {
	console.dir(restaurantData);
	return ( // здесь условый рендеринг (restaurantData.name &&) не нужен, т.к. сюда всегда будут попадать "restaurantData", у которых есть имя, т.к. проверка на имя ресторана ужеесть в заголовке таба.
		<div className="restaurant-item" data-id={restaurantData.id}>
			<h2 className="restaurant-item__name">
				{restaurantData.name}
			</h2>

			<Menu menuData={restaurantData.menu} />

			<Reviews reviewsData={restaurantData.reviews} />
		</div>
	)
}