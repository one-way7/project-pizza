import React, { useEffect, useMemo, useState } from 'react';
import Categories from '../../Categories';
import Sort from '../../Sort';
import PizzaBlock from '../../PizzaBlock';
import Skeleton from '../../PizzaBlock/Skeleton';
import ErrorMessage from '../../ErrorMessage';

const HomePage = () => {
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
            case 'fetched':
                return pizzas;
            case 'error':
                return <ErrorMessage />;
            default:
                new Error();
        }
    };

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">{setContent()}</div>
        </>
    );
};

export default HomePage;
