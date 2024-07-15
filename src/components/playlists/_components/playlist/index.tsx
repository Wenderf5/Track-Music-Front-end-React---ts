import style from './index.module.css';

interface props {
    img: any
}

function Playlist({ img }: props) {
    return (
        <main className={style.main}>
            <img src={img} width={"100%"} height={"100%"} style={{ borderRadius: "6px" }} alt="" />
        </main>
    )
}

export default Playlist