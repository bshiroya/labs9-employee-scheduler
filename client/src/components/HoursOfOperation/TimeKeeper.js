import React, { Component } from 'react'
import Timekeeper from 'react-timekeeper'
import moment from 'moment'
import styled from '@emotion/styled'
import system from '../../design/theme'
import propTypes from 'prop-types'

class TimeKeeper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '12:00 pm',
      openTime: null,
      closeTime: null
    }
  }

  //sets the chosen time on state and assigns it to openTime or closeTime depending on if this.props.name is 'open' or 'close'
  handleTimeChange = newTime => {
    // function that takes in an input and coverts it from a string of '12:30' to a number of 12.5 to match server side data format
    const convert = num => {
      const newTime = num.split(':').map(num => parseInt(num))
      const result = newTime[0] + newTime[1] / 60
      return Number(result.toFixed(2))
    }

    // moment format to take 12 hour clock into a 24 hour clock for server format
    let myNewTime = moment(newTime.formatted, ['h:mm A']).format('HH:mm')

    let convertedTime = convert(myNewTime)

    this.setState({ time: newTime.formatted })
    if (this.props.name === 'close') {
      this.setState({ closeTime: convertedTime })
    } else {
      this.setState({ openTime: convertedTime })
    }
  }

  render() {
    return (
      <Container>
        <Timekeeper
          time={this.state.time}
          name={this.props.name}
          onChange={this.handleTimeChange}
          onDoneClick={() =>
            this.props.name === 'open'
              ? this.props.saveAndClose(this.state.openTime)
              : this.props.saveAndClose(this.state.closeTime)
          }
        />
        <p>{this.props.day}</p>
      </Container>
    )
  }
}

export default TimeKeeper

TimeKeeper.propTypes = {
  handleTimeChange: propTypes.func.isRequired,
  saveAndClose: propTypes.func.isRequired,
  time: propTypes.string.isRequired
}

const Container = styled('div')`
  padding: ${system.spacing.standardPadding};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  p {
    font-size: ${system.fontSizing.ml};
    text-align: center;
    margin-top: 20px;
  }
`