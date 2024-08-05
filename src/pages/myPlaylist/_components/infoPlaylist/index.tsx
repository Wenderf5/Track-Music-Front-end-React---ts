import { Link } from 'react-router-dom';
import BtnHome from '../../../../components/btnHome';
import style from './index.module.css';

interface props {
    title: string | undefined;
    creation_date: string | undefined;
    img: string | undefined;
}

function InfoPlaylist({
    title,
    creation_date,
    img
}: props) {

    return (
        <div className={style.divInfoPlaylist}>
            <div className={style.playlistIMG}>
                <img
                    style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                    src={img} alt="Capa da playlist"
                />
            </div>
            <div className={style.divInfo}>
                <span className={style.playlistName}>{title}</span>
                <span className={style.creationDate}>Data de criação: {creation_date}</span>
            </div>
            <div className={style.divBtnHome}>
                <Link to={'/'}>
                    <BtnHome />
                </Link>
            </div>
        </div>
    )
}

export default InfoPlaylist;