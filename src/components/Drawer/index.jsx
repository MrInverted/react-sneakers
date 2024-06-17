import React from 'react'
import classes from "./drawer.module.scss"
import { SneakersContext } from '../../App';
import { useNavigate } from 'react-router-dom';

export default function Drawer() {
  const { isDrawer, setIsDrawer, sneakers, dispatch } = React.useContext(SneakersContext);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const overlayRef = React.useRef();
  const contentRef = React.useRef();
  const navigate = useNavigate()

  const totalPrice = sneakers.filter(item => item.isSelected).reduce((accum, item) => accum += item.price, 0);
  const taxPrice = (totalPrice * 0.05).toFixed(0);
  const sneakersInTheCart = sneakers.filter(item => item.isSelected);

  const onCloseDrawerClick = (e) => {
    if (contentRef.current.contains(e.target)) return;
    setIsDrawer(false);
  }

  const onDeleteCardClick = (id) => {
    dispatch({ type: "remove", payload: id });
  }

  const onSetCompleted = () => {
    dispatch({ type: "remove-all" });
    sneakersInTheCart.forEach(item => dispatch({ type: "purchase", payload: item.id }))
    setIsCompleted(true);
  }

  const onGoback = () => {
    setIsDrawer(false);
    setIsCompleted(false);
    navigate("/profile")
  }



  return (
    <div className={classes.drawer} ref={overlayRef} onClick={onCloseDrawerClick} hidden={!isDrawer}>
      <div className={classes.content} ref={contentRef}>
        <div className={classes.top}>
          <h2>Корзина</h2>
          <span className={classes.closeDrawer} onClick={() => setIsDrawer(false)}>✖</span>
        </div>

        {sneakersInTheCart.length
          ?
          <>

            <div className={classes.items}>
              {sneakersInTheCart.map((item, index) => (
                <article key={index} className={classes.card}>
                  <img width={70} src={item.imageUrl} alt="" />
                  <div className={classes.text}>
                    <h3>{item.title}</h3>
                    <b>{item.price} руб.</b>
                  </div>
                  <img src="/img/close.svg" alt="" className={classes.close} onClick={onDeleteCardClick.bind(this, item.id)} />
                </article>
              ))}
            </div>

            <div className={classes.footer}>
              <ul>
                <li>
                  <span>Итого: </span>
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <b>{taxPrice} руб. </b>
                </li>
              </ul>

              <button className='btn' onClick={onSetCompleted}>
                Оформить заказ
              </button>
            </div>

          </>
          :
          <>

            {isCompleted
              ?
              <>
                <div className={`${classes.empty} ${classes.completed}`}>
                  <img src="/img/completed.png" alt="" />
                  <h2>Заказ оформлен!</h2>
                  <p>Ваш заказ скоро будет передан курьерской доставке</p>
                  <button className='btn' onClick={onGoback}>
                    Перейти в профиль
                  </button>
                </div>
              </>
              :
              <>
                <div className={classes.empty}>
                  <img src="/img/cart.png" alt="" />
                  <h2>Корзина пустая</h2>
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                  <button className='btn' onClick={() => setIsDrawer(false)}>
                    Вернуться назад
                  </button>
                </div>
              </>
            }

          </>
        }

      </div >
    </div >
  )
}
