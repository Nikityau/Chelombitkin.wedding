import style from './style.module.css'
import {RequiredTitle} from "./ui/required-title";
import {DocTitle} from "../../widgets/layout/document/title";
import {useState} from "react";
import {FioError, PhoneError, RequiredError} from "./errors";
import {toast} from "react-toastify";
import {Phone} from "./ui/phone";
import {CheckBox} from "./ui/check-box/indext.tsx";
import axios, {type AxiosError} from "axios";

const isFIORight = (fio: string) => fio.trim().split(" ").length >= 3;
const isNumberRight = (phone: string) => phone.length === 13;

export const Form = () => {
    const [fio, setFio] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [required, setRequired] = useState<boolean | null>(null);

    const onSubmit = () => {
        try {
            if(!isFIORight(fio)) throw new FioError("Неверно введеное имя");
            if(!isNumberRight(number.trim())) throw new PhoneError("Неверно введен номер телефона");
            if(required === null) throw new RequiredError("Вы обязаны указать явку");

            toast.promise(
                axios.post('http://84.201.155.254/api/add-user', {
                    fio,
                    phone: `+7 ${number}`,
                    appear: required
                }),
                {
                    pending: 'Отправка расписки',
                    success: 'Расписка отправлена',
                }
            ).catch(e => {
                const er = e as AxiosError;
                if(er.status === 403) {
                    toast.warning("Расписка уже существует");
                    return;
                }

                toast.error("Ошибка создания расписки")
            })
        } catch (e) {
            const msg = (e as Error).message;

            toast.error(msg);
        }
    }

    return (
        <div className={style.form}>
            <DocTitle title={'Расписка'}/>
            <div className={style.form_item}>
                <RequiredTitle title={'ФИО'}/>
                <input
                    className={style.form_input}
                    value={fio}
                    onChange={e => setFio(e.target.value)}
                />
            </div>
            <div className={style.form_item}>
                <RequiredTitle title={'Номер телефона'}/>
                <Phone value={number} onChange={setNumber}/>
            </div>
            <div className={style.form_item}>
                <CheckBox
                    value={1}
                    checked={required === true}
                    onCheck={(v) => {
                        if(Number(required) == v) {
                            setRequired(null);
                            return;
                        }
                        setRequired(true)
                    }}
                    label={'Обязуюсь своевременно явиться к назначенноц дате и времени'}
                />
                <CheckBox
                    value={0}
                    checked={required == false}
                    onCheck={(v) => {
                        if(required !== null && Number(required) === v) {
                            setRequired(null);
                            return;
                        }
                        setRequired(false);
                    }}
                    label={'Не смогу явиться'}
                />
            </div>
            <div
                className={style.form_button}
                onClick={onSubmit}
            >
                отправить
            </div>
        </div>
    );
};

