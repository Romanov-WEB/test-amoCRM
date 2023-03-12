import React from 'react';
import classNames from "classnames";
import telegram from '@assets/image/messengerIcon/telegram.png'
import whatsapp from '@assets/image/messengerIcon/whatsapp.png'
import viber from '@assets/image/messengerIcon/viber.png'
import styles from './styles.module.scss'

const listMenu: Array<string> = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']
export default function Menu(): JSX.Element {
    return (
        <nav className={styles.navigate}>
            <ul className={styles.menu}>
                {listMenu.map((item, i) => (
                    item === 'Сертификаты'?
                    <li className={classNames([styles.menuItem, styles.hiddenMobile])} key={i}>{item}</li>:
                    <li className={styles.menuItem} key={i}>{item}</li>
                ))}
            </ul>

            <ul className={styles.infoMessenger}>
                <li className={styles.infoMessengerItemLink}>
                    <a href={'tel:$+7 555 555-55-55'}>+7 555 555-55-55</a>
                </li>
                <li className={styles.infoMessengerItem}><img src={telegram} alt={'telegram'}/></li>
                <li className={styles.infoMessengerItem}><img src={viber} alt={'viber'}/></li>
                <li className={styles.infoMessengerItem}><img src={whatsapp} alt={'whatsapp'}/></li>
            </ul>
        </nav>
    );
}
