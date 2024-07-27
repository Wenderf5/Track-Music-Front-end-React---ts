import { Link } from 'react-router-dom';
import BtnHome from '../../../../components/btnHome';
import style from './index.module.css';
import Loading from '../../../../components/loading';

interface Props {
    name?: string;
    picture?: string;
}

function InfoArtist({
    name,
    picture
}: Props) {

    if (!name || !picture) {
        return (
            <div className={style.divInfoArtist}>
                <Loading />
            </div>
        )
    }

    return (
        <div className={style.divInfoArtist}>
            <div className={style.artistIMG}>
                <img
                    style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                    src={picture} alt="Foto do artista"
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
