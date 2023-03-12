import React from 'react';
import styles from './styles.module.scss'
import Logo from "../../component-svg/Logo";
import Menu from "@features/Menu";
import Button from "../../component/Button";
import Footer from "@features/Footer";

const arrayInfo: Array<{header: string, description: string}> = [
    {
        header: 'Виджеты',
        description: '30 готовых решений'
    },
    {
        header: 'Dashboard',
        description: 'с показателями вашего бизнеса'
    },
    {
        header: 'Skype Аудит',
        description: 'отдела продаж и CRM системы'
    },
    {
        header: '35 дней',
        description: 'использования CRM'
    }
]
const arrayInfoMobile: Array<string> = ['Skype аудит', '30 виджетов', 'Dashboard', 'Месяц аmoCRM']

export default function Main(): JSX.Element {
    return (
        <div className={styles.layout}>
            <header className={styles.container}>

                <Logo className={styles.logo} />
                <Menu />
            </header>

            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <div>
                        <h1 className={styles.header}>Зарабатывайте больше</h1>
                        <span className={styles.welbexText}>с WELBEX</span>
                        <p className={styles.description}>Развиваем и контролируем продажи за вас</p>
                    </div>

                    <div className={styles.blockInfo}>
                        <h2 className={styles.headerInfo}>Вместе с
                            <span className={styles.headerText}> бесплатной</span>
                        </h2>
                        <h2 className={styles.headerInfo}>
                            <span className={styles.headerText}>консультацией</span> мы дарим:
                        </h2>

                        <ul className={styles.infoList}>
                            {
                                arrayInfo.map((item, i) => (
                                    <li className={styles.infoItemHeader} key={i}>
                                        <h3 >{item.header}</h3>
                                        <p>{item.description}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <ul className={styles.infoListMobile}>
                            {
                                arrayInfoMobile.map((item, i) => (
                                    <li className={styles.item} key={i}>
                                        <div className={styles.dash} />
                                        <p>{item}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <Button text={'Получить консультацию'}
                                style={styles.btnAdvice}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
