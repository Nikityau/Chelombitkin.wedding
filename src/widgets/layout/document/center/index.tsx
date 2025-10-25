import type {FC, PropsWithChildren} from "react";

import style from './style.module.css'

export const DocCenter: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.doc_center}>
            {children}
        </div>
    );
};

