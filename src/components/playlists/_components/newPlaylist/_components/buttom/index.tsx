import style from './index.module.css';

interface props {
    icon?: React.ReactNode;
    txt: string;
    func?: ()=> void;
}

function Buttom({ icon, txt, func }: props) {
    return (
        <button onClick={func} className={style.btn}>{txt}</button>
    )

}

export default Buttom;