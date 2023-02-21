import { FC } from 'react'

import HeaderMenu from './menu/HeaderMenu'
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderButtons from './headerButtons/HeaderButtons'
import HeaderProfile from './headerProfile/HeaderProfile'

import styles from './Header.module.scss'


const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
		</header>
	)
}

export default Header
