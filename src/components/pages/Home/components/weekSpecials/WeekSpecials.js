import { Link } from "react-router-dom";
import bruschettaImage from "../../assets/bruschetta.jpg";
import greekSaladImage from "../../assets/greek-salad.jpg";
import lemonDessertImage from "../../assets/lemon-dessert.jpg";
import "./WeekSpecials.css";
import pages from "../../../../../utils/pages";
import MealCard from "../mealCard/MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$11.49",
    description: `Our Greek Salad is made with pieces of tomatoes, sliced
      cucumbers, onion, feta cheese, and olives, typically seasoned with salt
      and oregano, and dressed with olive oil.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Bruschetta is an antipasto (starter dish) from Italy consisting
      of grilled bread rubbed with garlic and topped with olive oil and salt.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$4.00",
    description: `Lemon dessert is a dessert made with lemon, typically flavored
      with zest and juice of lemon.`,
  },
];

const WeekSpecials = () => {
  const orderOnlinePage = pages.filter((page) => page.key === "orderOnline")[0];
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={orderOnlinePage.path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
