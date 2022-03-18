export default function Skill(props){
    return(
        <section>
            <div>
                <img src={props.skillImg}></img>
                <h2>{props.skillTitle}</h2>
            </div>
            <div>
                <ul>
                </ul>
            </div>
        </section>
    )
}