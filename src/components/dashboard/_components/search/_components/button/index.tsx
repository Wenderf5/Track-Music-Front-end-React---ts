import style from './index.module.css';
import search from '../../../../../../assets/icons/search-regular-240.png';

function Button() {
    return (
        <button className={style.button}>
            <img src={search} width={"100%"} height={"85%"} alt="search" />
        </button>
    )
}

export default Button