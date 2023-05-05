import { useState, useEffect, useMemo } from 'react';

import Header from '../Header';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';


import '../../scss/app.scss';

function App() {
    const [pizzasData, setPizzasData] = useState([]);

    useEffect(() => {
            fetch('https://645517a5a74f994b3351eb89.mockapi.io/items')
                .then(item => item.json())
                .then(item => setPizzasData(item))
                .catch(err => new Error(err.status));
    }, []);

    const pizzas = useMemo(() => pizzasData.map(({ id, ...item }) => {
        return <PizzaBlock key={id} {...item} />
    }), [pizzasData]);

    const skeleton = useMemo(() => {
        return [...new Array(8)].map((item, i) => <Skeleton key={i}/>)
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">
                        {skeleton}
                        {/*{pizzas}*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
