import React from "react";

import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";



const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
      name: 'популярністю',
      sortProperty: 'rating'
    });

    useEffect(() => {
      setIsLoading(true)
      fetch(
        `https://654d302977200d6ba85a1cc7.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc`,
    )
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setItems(json);
          setIsLoading(false);
        });
    }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort sortValue={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title"> всі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock {...obj} />)}
      </div>
    </>
  );
};

export default Home;
