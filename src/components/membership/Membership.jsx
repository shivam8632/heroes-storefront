import React from 'react';
import MembershipBanner from './membership-banner/MembershipBanner';
import MembershipAbout from './membership-about/MembershipAbout';
import MembershipPlan from './membership-plan/MembershipPlan';

import './membership.scss';
function Membership() {
  return (
    <div className="membership">
        <MembershipBanner />
        <MembershipAbout />
        <MembershipPlan />
    </div>
  )
}

export default Membership