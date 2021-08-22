import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, register, isAuthenticated }) => {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
password2: ''
});


const { name, email, password, password2 } = formData;


const onChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });


const onSubmit = async (e) => {
e.preventDefault();
if (password !== password2) {
setAlert('Passwords do not match', 'danger');
} else {
register({ name, email, password });
}
};


if (isAuthenticated) {
return ;
}


return (

Sign Up

Create Your Account








This site uses Gravatar so if you want a profile image, use a
Gravatar email











Already have an account? Sign In


);
};


Register.propTypes = {
setAlert: PropTypes.func.isRequired,
register: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool
};


const mapStateToProps = (state) => ({
isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { setAlert, register })(Register);