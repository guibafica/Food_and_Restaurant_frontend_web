import { useState } from 'react';
import Head from 'next/head';
import {
  FaHamburger,
  FaRegWindowClose,
  FaStar,
  FaStarHalfAlt,
  FaRegStar
} from 'react-icons/fa';

import styles from './home.module.scss';

export default function Home() {
  const [hamburgerIcon, setHamburgerIcon] = useState(true);

  function handleMenuBarClick() {
    setHamburgerIcon(!hamburgerIcon);
  }

  return (
    <div className={styles.homepage}>
      <Head>
        <title>GoNutri</title>
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
            <li><a href="#menu">Dicas</a></li>
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
          <h3>uma palavra sobre mim</h3>

          <p>
            Veniam nulla laborum adipisicing ad velit ad aliquip et sint
            reprehenderit laborum dolor irure adipisicing. Minim aliquip fugiat
            laborum cupidatat dolore laborum nostrud aute ut exercitation nisi
            officia ea. Velit sunt amet et dolore tempor consequat ullamco.
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

      {/* Começo menu section */}
      <section className={styles.menu} id="menu">
        <h1 className={styles.heading}>Minhas saborosas <span>dicas</span> do mês</h1>

        {/* Add funcionalidade de mudar o conteúdo clicando nas opções...
        talvez trazer de um arquivo de fora, e ir mapeando (dicas.li1 / dicas.img) */}

        <ul className={styles.list}>
          <li className={`${styles.btn} ${styles.active}`}>Café da manhã</li>
          <li className={styles.btn}>Almoço</li>
          <li className={styles.btn}>Lanche</li>
          <li className={styles.btn}>Janta</li>
        </ul>

        <div className={styles.row}>
          <div className={styles.image}>
            <img
              src="/pexels-nataliya-vaitkevich-5794879.jpg"
              alt="Dica de comida"
              id="menu-img"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <h3><span>01.</span> Id occaecat ullamco magna minim.</h3>

              <p>Labore velit fugiat cillum et tempor proident et consectetur.</p>
            </div>

            <div className={styles.info}>
              <h3><span>02.</span> Id occaecat ullamco magna minim.</h3>

              <p>Labore velit fugiat cillum et tempor proident et consectetur.</p>
            </div>

            <div className={styles.info}>
              <h3><span>03.</span> Id occaecat ullamco magna minim.</h3>

              <p>Labore velit fugiat cillum et tempor proident et consectetur.</p>
            </div>

            <div className={styles.info}>
              <h3><span>04.</span> Id occaecat ullamco magna minim.</h3>

              <p>Labore velit fugiat cillum et tempor proident et consectetur.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Fim menu section */}

      {/* Começo popular section */}
      <section className={styles.popular} id="popular">
        <h1 className={styles.heading}>Alimentos mais <span>populares</span></h1>
        {/* Perguntas mais comuns? */}
        {/* Feedbacks dos pacientes? h3 => Frase sobre | div => nome do paciente */}

        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <img src="/pexels-cup-of-couple-7660473.jpg" alt="Alimento popular" />

            <h3>Deserunt velit ul.</h3>

            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>

            <div className={styles.price}>Commodo ex incididunt.</div>

            <a href="#">
              <button type="button" className={styles.btn}>Cupidatat.</button>
            </a>
          </div>

          <div className={styles.box}>
            <img src="/pexels-cup-of-couple-7657316.jpg" alt="Alimento popular" />

            <h3>Deserunt velit ul.</h3>

            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>

            <div className={styles.price}>Commodo reprehenderit.</div>

            <a href="#">
              <button type="button" className={styles.btn}>Minim.</button>
            </a>
          </div>

          <div className={styles.box}>
            <img src="/pexels-cup-of-couple-7656948.jpg" alt="Alimento popular" />

            <h3>Deserunt velit ul.</h3>

            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className={styles.price}>Mollit ipsum offic.</div>

            <a href="#">
              <button type="button" className={styles.btn}>Esse enim.</button>
            </a>
          </div>

          <div className={styles.box}>
            <img src="/pexels-jane-d-793759.jpg" alt="Alimento popular" />

            <h3>Deserunt velit ul.</h3>

            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>

            <div className={styles.price}>Magna Lorem.</div>

            <a href="#">
              <button type="button" className={styles.btn}>Enim elit.</button>
            </a>
          </div>
        </div>
      </section>
      {/* Fim popular section */}
    </div>
  )
}

// contato com as redes sociais e ir auto pro wpp
