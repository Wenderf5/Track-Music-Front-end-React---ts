//CSS
import style from './index.module.css';

//Interface
import { interfacePlaylist } from '../../../../types/playlist';

//Components
import { Button } from './_components/button';
import { Link } from 'react-router-dom';

interface props {
    playlist: interfacePlaylist | undefined;
}

export function Head({ playlist }: props) {
    return (
        <main className={style.main}>
            <div className={style.container_info_artist}>
                <div>
                    <img className={style.img} src={playlist?.picture} alt="" />
                </div>
                <div className={style.container_info}>
                    <span className={style.artist_name_txt}>{playlist?.title}</span>
                    <span className={style.artist_creator_txt}>Autor: {playlist?.creator.name}</span>
                    <span className={style.artist_creator_txt}>Data de criação: {playlist?.creation_date}</span>
                </div>
            </div>
            <div className={style.container_btn_home}>
                <Link to={'/'}>
                    <Button />
                </Link>
            </div>
        </main>
    )
}