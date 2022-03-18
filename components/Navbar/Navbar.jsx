import githubLogo from './../../public/images/github.png'
import Image from 'next/image'

function Navbar(){
    return(
        <nav className='navbar'>
            <button></button>
            <div>
                <a href="#">Home</a>
                <a href="#skill-section">Habilidades</a>
                <a href="#">Portifólio</a>
                <a href="#">Contato</a>
            </div>
            <a href={'https://github.com/viniciusgoneli'}>
                <div></div>
                <Image src={githubLogo} width='30px' height='30px' />
                <span>/viniciusgoneli</span>
            </a>
        </nav>
    )
}

export default Navbar;