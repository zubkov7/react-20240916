import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// root.render(
//   createElement(
//     "ul",
//     {}, // { style: { color: "red" }, className: "someClass otherClass" },
//     [1, 2, 3, 4, 5, 6].map((item) => createElement("li", {}, item))
//   )
// );


root.render(
	restaurants.map(
		restaurant => (
			<div className="restaurant">
				<h2 id={restaurant.id} className="restaurantName">
					{restaurant.name}
				</h2>
				<h3>Меню</h3>
				<ul>
					{restaurant.menu.map(menuItem => (
						<li
							data-price={menuItem.price}
							data-id={menuItem.id}
							data-ingredients={menuItem.ingredients}
						>{menuItem.name}</li>
					))}
				</ul>

				<h3>Отзывы</h3>
				<ul>
					{restaurant.reviews.map(reviewsItem => (
						<li
							data-rating={reviewsItem.rating}
							data-id={reviewsItem.id}
							data-user={reviewsItem.user}
						>{reviewsItem.text}</li>
					))}
				</ul>
			</div >
		)
	)
);
