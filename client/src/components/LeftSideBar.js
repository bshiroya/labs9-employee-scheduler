import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import system from '../design/theme'
import StyledNavItem from './common/NavItem'

// this component will represent a button that will control the left side bar.
// it will be brought into container components and an open/close state will be held there.
class LeftSideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Nav>
        <StyledNavItem to="/calendar">Calendar</StyledNavItem>
        <StyledNavItem to="/employees">Employees</StyledNavItem>
        <StyledNavItem to="/shift-calendar">Create Schedule</StyledNavItem>
        <StyledNavItem to="/settings">Settings</StyledNavItem>
      </Nav>
    )
  }
}

export default LeftSideBar

LeftSideBar.propTypes = {
  // add propTypes here
}

const Nav = styled.nav``