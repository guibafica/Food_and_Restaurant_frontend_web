import { useState } from 'react';
import Head from 'next/head';
import { FaHamburger, FaRegWindowClose } from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  const [hamburgerIcon, setHamburgerIcon] = useState(true);

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
            <li><a href="#about">Sobre</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#order">Pedido</a></li>
          </ul>
        </nav>
      </header>
      {/* Fim header section */}

      {/* Começo home section */}
      <section className={styles.home} id="home">
        <div className={styles.content}>
          <h3>Anim est do tempor minim.</h3>

          <p>
            Magna quis deserunt et est voluptate sint cupidatat sint. Pariatur
            minim nulla ut ea adipisicing ipsum non cillum ut officia id mollit.
          </p>

          <a href="#">
            <button type="button" className={styles.btn}>Iniciar</button>
          </a>
        </div>

        <div className={styles.image}>
          <img src="/home-img.png" alt="Imagem da home" />
        </div>
      </section>
      {/* Fim home section */}

      {/* Começo about section */}
      <section className={styles.about} id="about">
        <div className={styles.image} />

        <div className={styles.content}>
          <h3>uma palavra sobre nós</h3>

          <p>
            Veniam nulla laborum adipisicing ad velit ad aliquip et sint
            reprehenderit laborum dolor irure adipisicing. Minim aliquip fugiat
            laborum cupidatat dolore laborum nostrud aute ut exercitation nisi
            officia ea. Velit sunt amet et dolore tempor consequat ullamco
          </p>

          <p>
            Ex commodo adipisicing id et in proident do commodo ea duis
            consectetur nostrud aliqua.
          </p>

          <a href="#">
            <button type="button">Saiba mais</button>
          </a>
        </div>
      </section>
      {/* Fim about section */}
    </div>
  )
}

// contato com as redes sociais e ir auto pro wpp
