import { ListVideo } from 'lucide-react';
import Buttom from '../button';
import Playlist from './_components/playlist';
import style from './index.module.css';

import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function BarPlaylists() {
    return (
        <div className={style.playlistBar}>
            <div className={style.containerbtnPlaylistbar}>
                <Buttom type='playlist' icone={<ListVideo color='#989898' size={35} style={{ marginLeft: "8px" }} />} />
            </div>
            <div className={style.divPlaylist}>
                <Playlist img={capa6} />
                <Playlist img={capa2} />
                <Playlist img={capa3} />
                <Playlist img={capa4} />
                <Playlist img={capa5} />
                <Playlist img={capa1} />
            </div>
        </div>
    )
}

export default BarPlaylists