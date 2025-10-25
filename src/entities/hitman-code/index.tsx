import code from './assets/code.png'

import style from './style.module.css'

export const HitmanCode = () => {
    return (
        <div className={style.code}>
            <img src={code} alt={'code'}/>
            <span>4НЕ 973Ф 7С24Б</span>
        </div>
    );
};

