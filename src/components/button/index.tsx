import style from './index.module.css';

interface props {
    type: string
    icone: any
}

function Buttom({ type, icone }: props) {

    return (
        <button
            className={style.button}
        >
            {
                type === 'playlist' && icone
            }
            {
                type === 'volume' && icone
            }
            {
                type === 'multimedia' && icone
            }
            {
                type === 'music' && icone
            }
            {
                type === 'viewMore' && icone
            }
        </button >
    )
}

export default Buttom