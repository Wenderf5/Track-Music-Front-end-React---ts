//CSS
import style from './index.module.css';

interface props {
    icon: string;
    action?: ()=> void;
}

export function Button({ icon, action }: props) {
    return (
        <button
            className={style.button}
            onClick={action}
        >
            <img
                src={icon}
                alt=""
                width={30}
            />
        </button>
    )
}