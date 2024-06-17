import React, { useContext } from 'react';
import classes from "./content.module.scss"
import Card from "../components/Card";
import { SneakersContext } from '../App';
import { Link } from 'react-router-dom';


export default function Purchased() {
  const { sneakers } = useContext(SneakersContext);

  const purchasedSneakers = sneakers.filter(item => item.isPurchased);

  return (
    <div className={classes.content}>
      <div className={classes.top}>
        <h1>Мои покупки</h1>
      </div>

      {purchasedSneakers.length
        ?
        <>
          <div className={classes.cards}>
            {purchasedSneakers.map((item) => <Card {...item} key={item.id} />)}
          </div>
        </>
        :
        <>
          <div className={classes.favourites}>
            <img src="/img/sad-smile-purchased.png" alt="" />
            <h2>У вас нет заказов</h2>
            <p>
              Вы нищеброд?
              <br />
              Оформите хотя бы один заказ.
            </p>
            <Link to="/">
              <button className='btn'>Вернуться назад</button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}
