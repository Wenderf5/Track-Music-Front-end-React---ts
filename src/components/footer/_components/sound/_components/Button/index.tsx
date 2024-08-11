import style from './index.module.css';

interface props {
    icon: React.ReactNode;
}

export function Button({ icon }: props) {
    return (
        <button
            className={style.button}
        >
            {icon}
        </button>
    )
}