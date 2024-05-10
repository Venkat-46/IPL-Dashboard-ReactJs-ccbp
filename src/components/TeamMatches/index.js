// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    matchesList: [],
    latestMatchDetails: {},
    teamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamsMatchesData()
  }

  getFormettedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_inningseach,
    matchStatus: data.match_status,
  })

  getTeamsMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()

    const teamBannerUrlData = matchData.team_banner_url
    const latestMatchData = this.getFormettedData(
      matchData.latest_match_details,
    )
    const updatedMatchesList = matchData.recent_matches.map(each =>
      this.getFormettedData(each),
    )

    this.setState({
      isLoading: false,
      matchesList: updatedMatchesList,
      latestMatchDetails: latestMatchData,
      teamBannerUrl: teamBannerUrlData,
    })
  }

  renderTeamMatches = () => {
    const {matchesList, latestMatchDetails, teamBannerUrl} = this.state
    return (
      <div className="team-matches-section">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <h1 className="latest-match-heading">Latest matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="matches-list-container">
          {matchesList.map(eachItem => (
            <MatchCard key={eachItem.id} matchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const getClassName = `team-matches-container ${this.getBackgroundColor()}`
    return (
      <div className={getClassName}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
