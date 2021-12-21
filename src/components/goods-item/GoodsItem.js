const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        addToBasket = Function.prototype,
    } = props;

    const price = 1500;

    const img =
        'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg';

    return (
        <div className="card cards">
            <div className="card-image">
                <img src={img} alt={displayName} />
            </div>
            <div className="card-content">
                <div className="card-title">{displayName}</div>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button
                    onClick={() =>
                        addToBasket({
                            mainId,
                            displayName,
                            price,
                        })
                    }
                    className="btn"
                >
                    Купить
                </button>
                <span className="right descr">{price}</span>
            </div>
        </div>
    );
};

export default GoodsItem;
