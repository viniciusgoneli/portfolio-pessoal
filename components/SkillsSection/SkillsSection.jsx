import softSkillsSvg from './../../public/images/person-draw.svg'
import hardSkillsSvg from './../../public/images/html-tags.svg'
import Skill from '../Skill/Skill'

function SkillsSection(){
    const softSklls = {
        perseverança: 5,
        determinação: 5,
        foco: 4,
        paixãoPorAprender: 5,
        disciplina: 3,
        trabalhoEmEquipe: 3
    }
    const hardSkills = {
        html: 5,
        css: 4,
        javascript: 4,
        react: 3,
        nextjs: 3,
        jquery: 3,
        bootstrap: 1,
    }
    return(
        <section>
            <Skill skillTitle={'Soft skills'} skillImg={softSkillsSvg} skillList={softSklls} />
            <Skill skillTitle={'Hard Skills'} skillImg={hardSkillsSvg} skillList={hardSkills} />
        </section>
    )
}

export default SkillsSection;