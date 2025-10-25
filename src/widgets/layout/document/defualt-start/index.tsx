import type {FC, PropsWithChildren} from "react";

import style from './style.module.css'

export const DocDefStart: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.def_text}>
            {children}
        </div>
    );
};

