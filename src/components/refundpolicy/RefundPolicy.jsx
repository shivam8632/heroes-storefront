import React from 'react'
import { Container } from 'react-bootstrap'

import './refundpolicy.scss'

const RefundPolicy = () => {
  return (
    <div className='refundpolicy pt-4'>
        <Container>
            <div className='refundpolicy-header heading'>
                <h2><strong>Refund Policy</strong></h2>
            </div>
            <div className='refundpolicy-body pt-4'>
                <p>
                All confirmed purchases on Heroes platform are non-refundable. No cancellation will be accepted upon confirmation of purchase. Rescheduling (must be done 24 hours in advance of appointment) is allowed except for exclusive events which is set on a fixed date.
                </p>
            </div>
        </Container>
    </div>
  )
}

export default RefundPolicy