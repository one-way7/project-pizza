import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';

import pizzasData from '../../assets/pizzas.json'

import '../../scss/app.scss';

function App() {

    const pizzas = pizzasData.map(({ id, ...item }) => <PizzaBlock key={id} {...item} />);

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
                        {pizzas}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
