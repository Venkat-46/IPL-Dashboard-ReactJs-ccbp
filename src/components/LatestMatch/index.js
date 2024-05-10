// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="venue-container">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="sm-team-logo"
        />
      </div>
      <hr className="line" />
      <div className="match-details">
        <p className="sub-text">First Innings</p>
        <p className="content-text">{firstInnings}</p>
        <p className="sub-text">Second Innings</p>
        <p className="content-text">{secondInnings}</p>
        <p className="sub-text">Man Of The Match</p>
        <p className="content-text">{manOfTheMatch}</p>
        <p className="sub-text">Umpires</p>
        <p className="content-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
