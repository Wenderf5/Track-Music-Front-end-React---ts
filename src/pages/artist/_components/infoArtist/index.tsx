import { Link } from 'react-router-dom';
import BtnHome from '../../../../components/btnHome';
import style from './index.module.css';

interface Props {
    name?: string;
    img?: string;
}

function InfoArtist({
    name,
    img
}: Props) {
    return (
        <div className={style.divInfoArtist}>
            <div className={style.artistIMG}>
                <img
                    style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                    src={img} alt="Foto do artista"
                />
            </div>
            <div className={style.divInfo}>
                <span className={style.ArtistName}>{name}</span>
            </div>
            <div className={style.divBtnHome}>
                <Link to={'/'}>
                    <BtnHome />
                </Link>
            </div>
        </div>
    )
}

export default InfoArtist;
