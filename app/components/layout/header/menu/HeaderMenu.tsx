import { FC } from 'react'

import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

import styles from './HeaderMenu.module.scss'


const HeaderMenu: FC = () => {
	return (
		<div className={styles.menu}>		
			<nav>
				<ul>
					{
						menu.map(item => (
							<MenuItem item={item} key={item.link} />
						))
					}
				</ul>
			</nav>
			
		</div>
	)
}

export default HeaderMenu
