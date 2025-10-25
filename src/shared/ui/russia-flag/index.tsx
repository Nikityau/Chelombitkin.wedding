import russia from './assets/russia.png'

import style from './style.module.css'

export const RussiaFlag = () => {
    return (
       <img
           className={style.flag}
           src={russia} alt={'ФЛАГ РОССИИ'}
       />
    );
};

