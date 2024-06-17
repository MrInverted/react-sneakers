import React from 'react';
import { Link } from 'react-router-dom';

import classes from "./header.module.scss"
import { SneakersContext } from '../../App';

export default function Header() {
  const { isDrawer, setIsDrawer, sneakers } = React.useContext(SneakersContext);

  const totalPrice = sneakers.filter(item => item.isSelected).reduce((accum, item) => accum += item.price, 0);

  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <Link to="/">
          <img src="./img/logo.jpg" alt="" />
          <div className={classes.title}>
            <b>REACT SNEAKERS</b>
            <span>Магазин лучших кроссовок</span>
          </div>
        </Link>
      </div>

      <div className={classes.right}>
        <ul>
          <li onClick={() => setIsDrawer(!isDrawer)}>
            <img src="./img/card.svg" alt="" />
            <span><b>{totalPrice} руб.</b></span>
          </li>
          <li>
            <Link to="/favourite">
              <img src="./img/heart.svg" alt="" />
              <span>Закладки</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src="./img/user.svg" alt="" />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
