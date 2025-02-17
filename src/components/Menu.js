import "../styles/Menu.css";
import GreekSalad from "../assets/GreekSalad.jpg";
import Bruschetta from "../assets/Bruschetta.jpg";
import GrilledFish from "../assets/GrilledFish.jpg";

function Menu() {
  const handleOrderClick = () => {
    alert("Coming Soon!");
  };

  const specials = [
    {
      name: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: GreekSalad,
    },
    {
      name: "Bruschetta",
      price: "$7.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or...",
      image: Bruschetta,
    },
    {
      name: "Grilled Fish",
      price: "$16.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: GrilledFish,
    },
  ];

  return (
    <section className="specials" id="menu">
      <div className="specials-header">
        <h2 className="specials-title">This week's specials!</h2>
        <button className="main-order-btn" onClick={handleOrderClick}>
          Order Online
        </button>
      </div>
      <div className="specials-container">
        {specials.map((special, index) => (
          <div key={index} className="special-card">
            <img
              src={special.image}
              alt={special.name}
              className="special-image"
            />
            <div className="special-content">
              <div className="special-header">
                <h3 className="special-name">{special.name}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p className="special-description">{special.description}</p>
              <button className="order-btn" onClick={handleOrderClick}>
                Order online <span>🛒</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Menu;
