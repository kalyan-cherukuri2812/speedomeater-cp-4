import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  break = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-card">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="para">Speed is {speed}mph</h1>
        <p className="p2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="Accelerate-btn"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="Apply-Brake-btn"
            type="button"
            onClick={this.break}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
