import style from './style.module.css'
import type {FC, PropsWithChildren} from "react";

export const DocumentHeader: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.doc_header}>
            {children}
        </div>
    );
};

