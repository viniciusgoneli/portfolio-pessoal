import Image from 'next/image'

export default function Skill(props){
    return(
        <section>
            <div>
                <Image src={props.skillImg} width='125px' height='125px' />
                <h2>{props.skillTitle}</h2>
            </div>
            <div>
                <ul>
                </ul>
            </div>
        </section>
    )
}