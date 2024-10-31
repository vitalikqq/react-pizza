import React from "react";

function Categories({categoryId , onClickCategory}) {

  const categories = ["Bci","Мясні","Веган-піца","Чизбургер","Папероні","Сирна",];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i}
            onClick={() => onClickCategory(i)}
            className={categoryId === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))
        }
      </ul>
    </div>
  );
}
export default Categories;
