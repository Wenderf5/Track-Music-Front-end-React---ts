import style from './index.module.css';

interface props {
    capa: any;
}

export function Artists({ capa }: props) {
    return (
        <main className={style.main}>
            <img className={style.img} src={capa} alt="" />
            <span className={style.artist_name} >Artist Name</span>
        </main>
    )
}