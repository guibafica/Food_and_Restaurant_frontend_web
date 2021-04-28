import { useState } from 'react';
import Head from 'next/head';
import { FaHamburger, FaRegWindowClose } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  const [hamburgerIcon, setHamburgerIcon] = useState(true);
  const [navBarToogle, setNavBarToogle] = useState(true);

  function handleMenuBarClick() {
    setHamburgerIcon(!hamburgerIcon);
  }

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Food and Restaurant</title>
      </Head>

      {/* Começo header section */}
      <header>
        <a href="#" className={styles.logo}>
          <img src="/favicon.png" alt="logo" />
        </a>

        <div className={styles.menuBar} onClick={handleMenuBarClick}>
          {hamburgerIcon ? (
            <FaHamburger />
          ) : (
            <FaRegWindowClose />
          )}
        </div>

        <nav className={hamburgerIcon ? styles.navbarClosed : styles.navbarOpened}>
          <ul>
            <li><a className={styles.active} href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#cardapio">Cardápio</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#pedido">Pedido</a></li>
          </ul>
        </nav>
      </header>
      {/* Fim header section */}
    </div>
  )
}
