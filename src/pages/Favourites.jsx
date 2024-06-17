import React, { useContext } from 'react';
import classes from "./content.module.scss"
import Card from "../components/Card";
import { SneakersContext } from '../App';
import { Link } from 'react-router-dom';


export default function Favourites() {
  const { sneakers } = useContext(SneakersContext);

  const favouriteSneakers = sneakers.filter(item => item.isFavourite);

  return (
    <div className={classes.content}>
      <div className={classes.top}>
        <h1>Мои закладки</h1>
      </div>

      {favouriteSneakers.length
        ?
        <>
          <div className={classes.cards}>
            {favouriteSneakers.map((item) => <Card {...item} key={item.id} />)}
          </div>
        </>
        :
        <>
          <div className={classes.favourites}>
            <img src="/img/sad-smile-favourites.png" alt="" />
            <h2>Закладок нет :(</h2>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <button className='btn'>Вернуться назад</button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}
