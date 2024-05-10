// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {id, teamImageUrl, name} = matchDetails

  return (
    <Link to={`/team-matches/${id}`} className="nav-link">
      <li className="match-list-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="name-text">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
