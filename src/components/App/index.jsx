import { useState, useEffect, useMemo } from 'react';

import Header from '../Header';
import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import ErrorMessage from '../ErrorMessage';

import '../../scss/app.scss';

function App() {
    const [pizzasData, setPizzasData] = useState([]);
    const [process, setProcess] = useState('fetching');

    useEffect(() => {
        fetch('https://645517a5a74f994b3351eb89.mockapi.io/items')
            .then((item) => item.json())
            .then((item) => {
                setPizzasData(item);
                setProcess('fetched');
            })
            .catch((err) => {
                setProcess('error');
            });
    }, []);

    const pizzas = useMemo(
        () =>
            pizzasData.map(({ id, ...item }) => {
                return <PizzaBlock key={id} {...item} />;
            }),
        [pizzasData],
    );

    const skeleton = useMemo(() => {
        return [...new Array(8)].map((item, i) => <Skeleton key={i} />);
    }, []);

    const setContent = () => {
        switch (process) {
            case 'fetching':
                return skeleton;
                break;
            case 'fetched':
                return pizzas;
                break;
            case 'error':
                return <ErrorMessage />;
                break;
            default:
                new Error();
        }
    };

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
                    <div className="content__items">{setContent()}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
