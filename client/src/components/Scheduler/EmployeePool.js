import React from 'react'
import EmployeeResource from './EmployeeResource'
import styled from '@emotion/styled'

export default function(props) {
  const { employees } = props
  return (
    <Container>
      {employees.map(employee => (
        <EmployeeResource key={employee.id} employee={employee} />
      ))}
    </Container>
  )
}

const Container = styled('div')`
  max-height: 100vh;
  min-width: 344px;
  overflow-y: auto;
`
