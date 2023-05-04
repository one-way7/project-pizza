import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";

import '../../scss/app.scss'

function App() {

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
              <PizzaBlock />
              <PizzaBlock />
              <PizzaBlock />
              <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
