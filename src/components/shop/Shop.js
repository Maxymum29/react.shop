import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config';

import GoodsList from '../goods-list/GoodsList';
import Preloader from '../preloader/Preloader';
import Cart from '../cart/Cart';
import BasketList from '../basket-list/BasketList';
import Alert from '../Alert';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loding, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((i) => i.mainId === item.mainId);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.displayName);
    };

    const removeFromBasket = (id) => {
        const newOrder = order.filter((el) => el.mainId !== id);
        setOrder(newOrder);
    };

    const handelBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.mainId === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity,
                };
            } else {
                return item;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.mainId === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : null,
                };
            } else {
                return item;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((responce) => responce.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handelBasketShow={handelBasketShow} />
            {loding ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handelBasketShow={handelBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && (
                <Alert displayName={alertName} closeAlert={closeAlert} />
            )}
        </main>
    );
};

export default Shop;
