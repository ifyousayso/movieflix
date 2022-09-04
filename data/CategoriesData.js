import Category from "../models/Category";

export default {
	DOCUMENTARY: [
		new Category(0, "Popular", require("../assets/images/no-image.png"))
	],
	FILM: [
		new Category(1, "Action", require("../assets/images/cat_action.jpg")),
		new Category(2, "Adventure", require("../assets/images/cat_adventure.jpg")),
		new Category(3, "Drama", require("../assets/images/cat_drama.jpg")),
		new Category(4, "Horror", require("../assets/images/cat_horror.jpg")),
		new Category(5, "Thriller", require("../assets/images/cat_thriller.jpg"))
	],
	SPORT: [
		new Category(6, "Indoor", require("../assets/images/no-image.png")),
		new Category(7, "Indoor team", require("../assets/images/no-image.png")),
		new Category(8, "Outdoor", require("../assets/images/no-image.png")),
		new Category(9, "Outdoor team", require("../assets/images/no-image.png"))
	]
};
