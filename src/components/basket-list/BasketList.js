import BasketItem from '../basket-item/BasketItem';

import './BasketList.css';

const BasketList = (props) => {
    const {
        order = [],
        handelBasketShow = Function.prototype,
        removeFromBasket,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection bascket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоймость: {totalPrice}
            </li>
            <li className="collection-item">
                <button className="btn right">Оформить</button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handelBasketShow}
            >
                close
            </i>
        </ul>
    );
};

export default BasketList;
