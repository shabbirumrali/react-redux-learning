import { useSelector } from "react-redux"

const TechnicalSkills = () => {
    const {techSkill} = useSelector(state => state.technology)
    return (
    <div className='section'>
        <div className="heading">
            <h3>TechnicalSkills</h3>
        </div>
        <div className="content">
            <div className="information">
            <section>
                <ul>
                    {techSkill.map(tech => {
                        return (
                            <li key={tech}>{tech} </li>
                        )
                    })}
                </ul>
            </section>
            </div>
        </div>
    </div>
  )
}

export default TechnicalSkills