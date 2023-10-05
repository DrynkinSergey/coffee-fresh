import React from 'react'
import { Icon } from './Icon'

const SocialIcons = ({ direction }) => {
	return (
		<div className={`flex ${direction === 'col' ? 'flex-col' : ' '} gap-4`}>
			<Icon src='./images/instagram.svg' />
			<Icon src='./images/facebook.svg' />
			<Icon src='./images/twitter.svg' />
		</div>
	)
}

export default SocialIcons
