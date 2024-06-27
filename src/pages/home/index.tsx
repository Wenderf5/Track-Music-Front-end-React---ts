import style from './index.module.css';
import Search from '../../components/search';
import Buttom from '../../components/buttom';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.containerSearch}>
                <Search />
                <Buttom type='playlist'/>
            </div>
            <div>
                
            </div>
        </main>
    )
}

export default Home