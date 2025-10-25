import type {FC, PropsWithChildren} from "react";

import style from './style.module.css';

type Props = {
    minH?:number
} & PropsWithChildren;

export const Document: FC<Props> = ({children,minH}) => {
    return (
        <div
            className={style.document}
            style={{
                minHeight: `${minH || 200}px`
            }}
        >
            {children}
        </div>
    );
};

