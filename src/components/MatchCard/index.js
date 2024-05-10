// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetails

  const resultColor = () => {
    if (matchStatus === 'Lost') {
      return 'colorIsRed'
    }
    return 'colorIsGreen'
  }

  return (
    <li className="recent-matches-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-team-logo"
      />
      <p className="team-name-text">{competingTeam}</p>
      <p>{result}</p>
      <p className={`status ${resultColor()}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
