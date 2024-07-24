import style from './index.module.css';

interface props {
    txt: string;
    func?: ()=> void;
}

function Buttom({ txt, func }: props) {
    return (
        <button onClick={func} className={style.btn}>{txt}</button>
    )

}

export default Buttom;