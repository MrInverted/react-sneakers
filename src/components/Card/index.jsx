import React from 'react';
import classes from "./card.module.scss"
import { SneakersContext } from '../../App';

export default function Card({ title, price, imageUrl, id, isSelected, isFavourite }) {
  const { dispatch } = React.useContext(SneakersContext)

  const onAddPlusClick = (id) => {
    dispatch({ type: "add", payload: id })
  }

  const onRemovePlusClick = (id) => {
    dispatch({ type: "remove", payload: id })
  }

  const onAddFavouriteClick = (id) => {
    dispatch({ type: "add-favourite", payload: id })
  }

  const onRemoveFavouriteClick = (id) => {
    dispatch({ type: "remove-favourite", payload: id })
  }

  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <img
          src={`./img/${isFavourite ? 'heart-red' : 'heart-white'}.svg`}
          className={classes.heart}
          onClick={isFavourite ? onRemoveFavouriteClick.bind(this, id) : onAddFavouriteClick.bind(this, id)}
          alt="" />

        <img src={imageUrl} alt="" className={classes.image} />
        <h3>{title}</h3>

        <div className={classes.bottom}>
          <div className={classes.left}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>

          <div>
            <img
              src={`./img/${isSelected ? 'added' : 'plus'}.svg`}
              className={classes.addToCart}
              onClick={isSelected ? onRemovePlusClick.bind(this, id) : onAddPlusClick.bind(this, id)}
              alt="" />
          </div>
        </div>
      </div>
    </article>
  )
}
