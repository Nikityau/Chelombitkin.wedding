import {Document} from "../widgets/layout/document/template";
import {DocumentHeader} from "../widgets/layout/document/header";
import {FlexCenter} from "../widgets/layout/flex";
import {PostMark} from "../entities/post-mark";
import {Frame} from "../widgets/layout/frame";
import {RussiaSign, RussiaSignWBg} from "../shared/ui/russia-sign";
import {HitmanCode} from "../entities/hitman-code";
import {DocYear} from "../widgets/layout/document/year";
import {DocCenter} from "../widgets/layout/document/center";
import {DocTitle} from "../widgets/layout/document/title";
import {DocText} from "../widgets/layout/document/text";
import {RussiaFlag} from "../shared/ui/russia-flag";
import {DocDefStart} from "../widgets/layout/document/defualt-start";
import {DocUl} from "../widgets/layout/document/doc-ul";
import {DocUl2} from "../widgets/layout/document/doc-ul-2";

import './style.css'
import {Form} from "../features/form";

export const App = () => {
    return (
        <div className={'app'} style={{
            backgroundImage: `url(/assets/bg.jpg)`,
        }}>
            <Document minH={650}>
                <DocumentHeader>
                    <FlexCenter>
                        <PostMark title={'Челомбиткиных'}/>
                        <Frame>
                            <RussiaSign/>
                        </Frame>
                    </FlexCenter>
                    <HitmanCode/>
                </DocumentHeader>
                <DocCenter>
                    <DocTitle title={'Извещение'}/>
                    <DocText text={'Семья Челомбиткиных сообщает о том, что свадебное мероприятие по делу о регистрации брачного договора ⠀⠀⠀ № 6013820599/2025 в отношении влюбленных Челомбиткина Богдана Сергеевича и Конечных Марии Сергеевны назначено к проведению на 25 ноября 2025 г.'}/>
                </DocCenter>
                <DocYear/>
            </Document>
            <Document minH={700}>
                <DocumentHeader>
                    <RussiaFlag/>
                </DocumentHeader>
                <DocDefStart>
                    <DocTitle title={'Повестка'}/>
                    <DocText text={'Семья Челомбиткиных вызывает Вас в качестве гостя к 11 часам 25.11.2025 г. по адресу: г.Ростов-на-Дону, Университетский переулок, 48/2А.'}/>
                    <DocUl
                        title={'Приложение:'}
                        list={[
                            <a
                                style={{ color: "#000"}}
                                target={'_blank'}
                                href={'https://yandex.ru/maps/39/rostov-na-donu/house/universitetskiy_pereulok_48_2a/Z0AYcQVoSUQGQFptfX5zd3xqbQ==/'}
                            >
                                Ссылка на карту места проведения.
                            </a>
                        ]}
                        style={{
                            marginBottom: '60px'
                        }}
                    />
                    <DocText text={'В соответствии с действующими законодательством нормы дресс-кода отсутсвуют, но предусмотрены меры обеспечивающие отличное настроение.'}/>
                    <DocText text={'Гостям разрешается плакать от счаться, учавствовать в конкурсах, танцевать, шутить, и даже кричать «Горько!».'}/>
                    <DocUl2
                        title={'Расписание мероприятия:'}
                        list={[
                            '10:30 - Сбор гостей;',
                            '11:00 - Торжественная церемония;',
                            '17:00 - Банкет;',
                            '23:00 - Заверешение.',
                        ]}
                    />
                </DocDefStart>
            </Document>
            <Form/>
            <Document minH={250}>
                <DocumentHeader>
                    <RussiaSignWBg/>
                </DocumentHeader>
                <DocDefStart>
                    <DocTitle title={'Последствия неявки:'}/>
                    <DocText text={'Материалы дела в отношении неявившегося лица будут переданы в семейно-дружеский надзорный орган для проведения проверки.'}/>
                </DocDefStart>
            </Document>
        </div>
    )
}