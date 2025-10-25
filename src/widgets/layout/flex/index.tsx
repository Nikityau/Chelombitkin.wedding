import type {FC, PropsWithChildren} from "react";

import style from './style.module.css'

export const FlexCenter: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.flex_center}>
            {children}
        </div>
    );
};

