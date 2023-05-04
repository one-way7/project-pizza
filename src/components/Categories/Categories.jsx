import { useState, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';
import classNames from "classnames";

export default function Categories() {
    const [ categories, setCategories ] = useState( [
        {name: 'All', id: uuidv4()},
        {name: 'Meat pizzas', id: uuidv4()},
        {name: 'Vegetarian pizza', id: uuidv4()},
        {name: 'Pizza Grill', id: uuidv4()},
        {name: 'Spicy pizzas', id: uuidv4()},
        {name: 'Closed pizzas', id: uuidv4()},
    ])
    const [ activeId, setActive ] = useState(categories[0].id)

    let elements = categories.map(({ name, id }) => {
        let className = classNames({
            active: activeId === id
        })

        return <li
            className={className}
            key={id}
            onClick={() => setActive(id)}
        >
            {name}
        </li>
    })

    return (
        <div className="categories">
            <ul>
                {elements}
            </ul>
        </div>
    )
}