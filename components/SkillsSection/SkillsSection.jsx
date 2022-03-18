import softSkillsSvg from './../../public/images/person-draw.svg'
import hardSkillsSvg from './../../public/images/html-tags.svg'
import Skill from '../Skill/Skill'

function SkillsSection(){
    return(
        <section>
            <Skill skillTitle={'Soft skills'} skillImg={softSkillsSvg} />
            <Skill skillTitle={'Hard Skills'} skillImg={hardSkillsSvg} />
        </section>
    )
}

export default SkillsSection;