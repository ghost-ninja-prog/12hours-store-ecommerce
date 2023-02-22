import { FC } from 'react'

import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

import styles from './HeaderMenu.module.scss'
import Column from '@/ui/grid/Column'


const HeaderMenu: FC = () => {
	return (
		<Column size={5} >
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
		</Column>
	)
}

export default HeaderMenu
