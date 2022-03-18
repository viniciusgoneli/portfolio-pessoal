import Image from 'next/image'
import styles from './../styles/Skill.module.css'

function formatSkillName(skill = ''){
    const chars = [...skill];
    const formatedChars = chars.map(char => {
        if(char === char.toUpperCase()) return ' ' + char.toUpperCase();
        return char.toUpperCase();
    })
    return formatedChars.join('');
}

export default function Skill(props){
    const skillsList = Object.entries(props.skillList).map(([skillName, skillLevel], index) => {
        return(
            <li className={styles.listDiv__listItem} key={index}>
                <p className={styles.listItem__p}>{ formatSkillName(skillName) }</p>
                <p className={styles.listItem__p}>{ skillLevel }</p>
            </li>
        )
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