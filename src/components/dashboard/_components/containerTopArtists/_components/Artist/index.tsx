import style from './index.module.css';

interface props{
    img: any
}

function Artist(props: props){
    return(
        <main className={style.main}>
            <div className={style.ftArtist}>
                <img src={props.img} style={{width: "100%", borderRadius: "50%"}} alt="" />
            </div>
            <p style={{cursor: "pointer"}}>Top Artista</p>
        </main>
    )
}

export default Artist