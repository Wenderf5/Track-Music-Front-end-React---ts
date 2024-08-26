//CSS
import style from './index.module.css';

interface props {
    icon: React.ReactNode;
    action: () => void;
}

export function Button({ icon, action }: props) {
    return (
        <button
            className={style.button}
            onClick={action}
        >
            {icon}
        </button>
    )
}