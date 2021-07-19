import "./styles.css";
import { useState } from "react";

var foodType = {
  Indian: [
    {
      name: "Butter Chicken",
      rating: "8/10"
    },
    {
      name: "Palak Paneer",
      rating: "8/10"
    },
    {
      name: "Fish Curry",
      rating: "9/10"
    }
  ],
  Italian: [
    {
      name: "Lasagna",
      rating: "7/10"
    },
    {
      name: "Gelato",
      rating: "8/10"
    },
    {
      name: "Panzanella",
      rating: "1/10"
    }
  ],
  German: [
    {
      name: "Wurst",
      rating: "7/10"
    },
    {
      name: "Rouladen",
      rating: "8/10"
    },
    {
      name: "Käsespätzle",
      rating: "9/10"
    }
  ]
};
export default function App() {
  var foodTypeList = Object.keys(foodType);
  console.log(foodTypeList);
  const [getList, updateList] = useState("Indian");

  function getDishes(dishes) {
    updateList(dishes);
  }
  return (
    <div className="App">
      <h1> 😋 My Favourite Foods</h1>
      <h3>
        These are the foods i have tasted and gave ratings according to me.
      </h3>
      <div>
        {foodTypeList.map((item) => (
          <button
            key={item}
            onClick={() => {
              getDishes(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />
      <ul>
        {foodType[getList].map((item) => (
          <li className="ls">
            <div className="name">{item.name}</div>
            <div className="rating">{item.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
