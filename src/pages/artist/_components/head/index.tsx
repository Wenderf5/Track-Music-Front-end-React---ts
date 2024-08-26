//CSS
import style from './index.module.css';

//Interface
import { interfaceArtist } from '../../../../types/artist';

//Components
import { Button } from './_components/button';
import { Link } from 'react-router-dom';

interface props {
    artist: interfaceArtist | undefined;
}

export function Head({ artist }: props) {
    return (
        <main className={style.main}>
            <div className={style.container_info_artist}>
                <div>
                    <img className={style.img} src={artist?.picture} alt="" />
                </div>
                <span className={style.artist_name_txt}>{artist?.name}</span>
            </div>
            <div className={style.container_btn_home}>
                <Link to={'/'}>
                    <Button />
                </Link>
            </div>
        </main>
    )
}