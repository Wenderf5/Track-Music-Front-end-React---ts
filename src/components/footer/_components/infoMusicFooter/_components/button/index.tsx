//CSS
import style from './index.module.css';

interface props {
    icon: string;
}

export function Button({ icon }: props) {
    return (
        <button
            className={style.button}
        >
            <img
                src={icon}
                alt=""
                width={30}
            />
        </button>
    )
}