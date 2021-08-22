import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';


const Dashboard = ({
getCurrentProfile,
deleteAccount,
auth: { user },
profile: { profile }
}) => {
useEffect(() => {
getCurrentProfile();
}, [getCurrentProfile]);


return (

Dashboard

Welcome {user && user.name}

{profile !== null ? (







deleteAccount()}>
Delete My Account



) : (

You have not yet setup a profile, please add some info

Create Profile


)}

);
};


Dashboard.propTypes = {
getCurrentProfile: PropTypes.func.isRequired,
deleteAccount: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
profile: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
auth: state.auth,
profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
Dashboard
);
