import type {FC} from "react";
import {RussiaFlag} from "../../../../shared/ui/russia-flag";

import style from './style.module.css'
import {PatternFormat} from "react-number-format";

type Props = {
    value: string,
    onChange: (value: string) => void,
}

export const Phone: FC<Props> = ({value, onChange}) => {
    return (
        <div className={style.phone}>
            <div className={style.phone_region}>
                <RussiaFlag/>
                <span>+7</span>
            </div>
          <PatternFormat
              className={style.phone_input}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              format={"### ###-##-##"}
              type={'tel'}
          />
        </div>
    );
};

