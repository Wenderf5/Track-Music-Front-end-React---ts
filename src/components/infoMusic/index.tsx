import style from './index.module.css';
import Buttom from '../button';
import { ChevronDown } from 'lucide-react';

interface props {
    img: any
}

function InfoMusic(props: props) {
    return (
        <main className={style.main}>
            <div className={style.imgMusic}>
                <img src={props.img} width={"100%"} height={"100%"} style={{ borderRadius: "10px" }} alt="" />
            </div>
            <div className={style.text}>
                <span className={style.bandaName}>Black Sabbath</span>
                <span className={style.infoMusic}>Heaven and Hell</span>
            </div>
            <div className={style.text}>
                <span className={style.infoMusic}>Album: Black Sabbath</span>
                <span className={style.infoMusic}>Data de lançamento: 18/03/2005</span>
            </div>
            <div className={style.text}>
                <span className={style.verAlbum}>Ver Album <Buttom type='viewMore' icone={<ChevronDown color='#999999'/>} /></span>
            </div>
        </main>
    )
}

export default InfoMusic

