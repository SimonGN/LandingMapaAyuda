import React from 'react';
import { useSelector } from 'react-redux';
import StyledFullScreenContainer from './styled';

const FullScreenContainer = props => {
	const navHeight = useSelector(state => state.general.navHeight);
	return (
		<StyledFullScreenContainer navHeight={navHeight} color={props.color}>
			<div className='content'>{props.children}</div>
		</StyledFullScreenContainer>
	);
};

export default FullScreenContainer;
