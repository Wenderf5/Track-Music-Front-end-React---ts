import style from './index.module.css';

interface props{
    capa: any
}

function Playlist(props: props){
    return(
        <main className={style.main}>
            <img src={props.capa} width={"100%"} height={"100%"} style={{borderRadius: "6px"}} alt="" />
        </main>
    )
}

export default Playlist