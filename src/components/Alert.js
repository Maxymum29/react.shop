import { useEffect } from 'react';

const Alert = (props) => {
    const { displayName = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [displayName, closeAlert]);

    return (
        <div id="toast-container">
            <div className="toast">{displayName} добавлен в корзину</div>
        </div>
    );
};

export default Alert;
