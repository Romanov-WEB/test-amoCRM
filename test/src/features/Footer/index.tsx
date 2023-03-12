import React from 'react';
import styles from "./styles.module.scss";
import MenuFooter from "@features/MenuFooter";
import telegram from "@assets/image/messengerIcon/telegram.png";
import viber from "@assets/image/messengerIcon/viber.png";
import whatsapp from "@assets/image/messengerIcon/whatsapp.png";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.blockFooterLeft}>
                    <div className={styles.infoCompany}>
                        <h3 className={styles.headerFooter}>О компании</h3>

                        <ul className={styles.list}>
                            <li className={styles.item}>Партнёрская программа</li>
                            <li className={styles.item}>Вакансии</li>
                        </ul>
                    </div>

                    <MenuFooter />
                </div>

                <div className={styles.blockMessenger}>
                    <h3 className={styles.headerFooter}>Контакты</h3>

                    <ul className={styles.messengerList}>
                        <li className={styles.infoMessengerItemLink}>
                            <a href={'tel:$+7 555 555-55-55'}>
                                +7 555 555-55-55
                            </a>
                        </li>

                        <li className={styles.infoMessengerItem}>
                            <ul className={styles.listGroupMessenger}>
                                <li>
                                    <img src={telegram} alt={'telegram'}/>
                                </li>

                                <li>
                                    <img src={viber} alt={'viber'}/>
                                </li>

                                <li>
                                    <img src={whatsapp} alt={'whatsapp'}/>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.infoMessengerItem}><p>
                            Москва, Путевой проезд 3с1, к 902
                        </p></li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p className={styles.politicLink}>Политика конфиденциальности</p>
            </div>
        </footer>
    );
}
