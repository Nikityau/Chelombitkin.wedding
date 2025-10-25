import type {FC, PropsWithChildren} from "react";

import style from './style.module.css'

export const Frame: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.frame + ' ' + 'box'}>
            {children}
        </div>
    );
};

