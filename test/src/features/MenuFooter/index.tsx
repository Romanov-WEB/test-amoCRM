import React from 'react';

import styles from './styles.module.scss'
import data from './data.json'
export default function MenuFooter() {
    return (
        <nav className={styles.menu}>
            <h3 className={styles.header}>Меню</h3>
            <ul className={styles.menuList}>
                {
                    data.menu.map((item, i)  => (<li className={styles.menuItem} key={i}>{item}</li>))
                }
            </ul>
        </nav>
    );
}
