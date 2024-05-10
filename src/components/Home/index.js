// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getMatchsData()
  }

  getMatchsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data

    const formatedList = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isLoading: false, teamsList: formatedList})
  }

  renderTeams = () => {
    const {teamsList} = this.state
    return (
      <ul className="matchs-list-container">
        {teamsList.map(eachItem => (
          <TeamCard key={eachItem.id} matchDetails={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="dashboard-container">
          <div className="ipl-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            this.renderTeams()
          )}
        </div>
      </div>
    )
  }
}

export default Home
