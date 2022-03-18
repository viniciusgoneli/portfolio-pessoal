import githubLogo from './../../public/images/github.png'
import Image from 'next/image'
import styles from './../../styles/Navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <a className={styles.menuLinks__link} href="#">Home</a>
                <a className={styles.menuLinks__link} href="#">Habilidades</a>
                <a className={styles.menuLinks__link} href="#">Portifólio</a>
                <a className={styles.menuLinks__link} href="#">Contato</a>
            </div>
            <a className={styles.navbar__githubLink} href={'https://github.com/viniciusgoneli'}>
                <Image src={githubLogo} width='30px' height='30px' />
                <span className={styles.githubLink__title}>/viniciusgoneli</span>
            </a>
        </nav>
    )
}

export default Navbar;