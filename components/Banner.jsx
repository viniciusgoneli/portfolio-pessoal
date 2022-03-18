import bannerImage from './../public/images/banner-image.png'
import Image from 'next/image'
import styles from './../styles/Banner.module.css'

function Banner(){
    const description = 'Meu nome é Vinicius, tenho 24 anos e sou desenvolvedor front-end com 6 meses de experiência na área. Eu amo resolver problemas usando programação a tal ponto de passar o dia todo estudando e me aprimorando.'
    return(
        <section className={styles.banner}>
            <div className={styles.banner__titleDescriptionDiv}>
                <div className={styles.titleDescriptionDiv__container}>
                    <h1 className={styles.titleDescriptionDiv__title}>Vinicius Goneli</h1>
                    <h2 className={styles.titleDescriptionDiv__subtitle}>Desenvolvedor front-end</h2>
                    <p className={styles.titleDescriptionDiv__description}>{description}</p>
                </div>
            </div>
            <div className={styles.banner__imgDiv}>
                <Image draggable={false} src={bannerImage} width='300px' height='600px' />
            </div>
        </section>
    )
}

export default Banner;