import React from 'react';
import Router from 'next/router';
import Meta from '../components/Meta';
import Nav from '../components/Nav/Nav';
import { withRouter } from 'next/router';
import { useSelector } from 'react-redux';

import _ from 'lodash';

function Profile(props) {
	const { isFetching, error, user } = useSelector(state => state.auth);

	console.log(props);

	if (!_.isEmpty(user)) {
		Router.push('/');
	}

	return (
		<React.Fragment>
			<Meta />
			<Nav />
			<p>{props.router.query.edit}</p>
		</React.Fragment>
	);
}

export default withRouter(Profile);
