import Image from 'next/image'
import styles from './Skill.module.css'

export default function Skill(props){
    const skillsList = Object.entries(props.skillList).map(([skillName, skillLevel], index) => {
        return <li className={styles.listDiv__listItem} key={index}><p>{ skillName }</p><p>{ skillLevel }</p></li>
    })

    return(
        <section className={styles.skill}>
            <div className={styles.skill__imageDiv}>
                <Image className={styles.imageDiv__image} src={props.skillImg} width='125px' height='125px' />
                <h2 className={styles.imageDiv__title}>{props.skillTitle}</h2>
            </div>
            <div className={styles.skill__listDiv}>
                <ul className={styles.listDiv__list}>
                    { skillsList }
                </ul>
            </div>
        </section>
    )
}