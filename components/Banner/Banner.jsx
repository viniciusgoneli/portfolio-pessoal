import bannerImage from './../../public/images/banner-image.png'
import Image from 'next/image'

function Banner(){
    const description = 'Meu nome é Vinicius, tenho 24 anos e sou desenvolvedor front-end com 6 meses de experiência na área. Eu amo resolver problemas usando programação a tal ponto de passar o dia todo estudando e me aprimorando.'
    return(
        <section>
            <div>
                <div>
                    <h1>Vinicius Goneli</h1>
                    <h2>Desenvolvedor front-end</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <Image draggable={false} src={bannerImage} />
            </div>
        </section>
    )
}

export default Banner;