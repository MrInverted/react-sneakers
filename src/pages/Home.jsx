import React, { useContext } from 'react';
import classes from "./content.module.scss"
import Card from "../components/Card";
import { SneakersContext } from '../App';
import Skeleton from '../components/Skeleton';
import Slider from '../components/Slider';

export default function Home() {
  const { sneakers, isLoading, isError } = useContext(SneakersContext);
  const [input, setInput] = React.useState("");

  const skeleton = new Array(8).fill("").map((e, i) => <Skeleton key={i} />);

  return (
    <>
      <Slider />

      <div className={classes.content}>
        <div className={classes.top}>
          <h1>{input ? `Поиск по запросу: ${input}` : 'Все кроссовки'}</h1>
          <label>
            <img src="./img/search.svg" alt="" />
            <input type="text" placeholder='Поиск...' value={input} onChange={(e) => setInput(e.target.value)} />
          </label>
        </div>

        {isLoading && <div className={classes.cards}>{skeleton}</div>}
        {isError && <h2 className={classes.status}>Error...</h2>}

        <div className={classes.cards}>
          {sneakers
            .filter(item => item.title?.toLowerCase().includes(input.toLowerCase()))
            .map((item) => <Card {...item} key={item.id} />)}
        </div>

      </div>
    </>

  )
}
