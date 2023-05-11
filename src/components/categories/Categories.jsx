import { useState, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';
import classNames from "classnames";

export default function Categories() {
    const categories = [
        {name: 'All', id: uuidv4()},
        {name: 'Meat', id: uuidv4()},
        {name: 'Vegetarian', id: uuidv4()},
        {name: 'Grill', id: uuidv4()},
        {name: 'Spicy', id: uuidv4()},
        {name: 'Closed', id: uuidv4()},
    ]

    const [ activeId, setActive ] = useState(0)

    let elements = categories.map(({ name, id }, i) => {
        let className = classNames({
            active: activeId === i
        })

        return <li
            className={className}
            key={id}
            onClick={() => setActive(i)}
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