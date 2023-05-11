import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

export default function PizzaBlock({ imageUrl, title, types, sizes, price }) {
    const [activeTypeIndex, setActiveTypeIndex] = useState(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    console.log(title, types, sizes, price);
    const type = types.map((item, i) => {
        let className = classNames({
            active: activeTypeIndex === i,
        });

        if (item === 0) {
            return (
                <li
                    className={className}
                    key={uuidv4()}
                    onClick={() => setActiveTypeIndex(i)}
                >
                    thin
                </li>
            );
        } else if (item === 1) {
            return (
                <li
                    className={className}
                    key={uuidv4()}
                    onClick={() => setActiveTypeIndex(i)}
                >
                    traditional
                </li>
            );
        }
    });

    const size = sizes.map((item, i) => {
        let className = classNames({
            active: activeSizeIndex === i,
        });

        return (
            <li
                className={className}
                key={uuidv4()}
                onClick={() => setActiveSizeIndex(i)}
            >
                {item} cm
            </li>
        );
    });

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt={`Pizza ${title}`}
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>{type}</ul>
                    <ul>{size}</ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">from {price} $</div>
                    <div className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Add</span>
                        <i>2</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
