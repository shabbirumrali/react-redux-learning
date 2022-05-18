import { useSelector } from 'react-redux'
import '../../index.css'

const SoftSkill = () => {
    const {skills} = useSelector(state => state.softSkill)
  return (
    <div className='section'>
        <div className="heading">
            <h3>Soft skills</h3>
        </div>
        <div className="content">
            <div className="information">
            <section>
                <ul>
                {
                skills.map(skill => {
                    return (
                          <li key={skill}>{skill} </li>
                        )
                    })
                }
                </ul>
            </section>
            </div>
        </div>
    </div>
  )
}

export default SoftSkill