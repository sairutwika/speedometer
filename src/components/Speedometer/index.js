import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  Increase = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  Decrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="Bg-Container">
        <h1 className="Main-heading">Speedometer</h1>
        <img
          className="imageclass"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-limit-heading">Speed is {count}mph</h1>
        <p className="instruction">Min limit is 0mph Max limit is 200mph</p>
        <div className="btn-con">
          <button
            type="button"
            onClick={this.Increase}
            className="accelarate btn"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.Decrease} className="break btn">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
