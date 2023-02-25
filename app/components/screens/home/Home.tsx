import { FC } from 'react'
import { IProductsPage } from '@/../pages'

import Layout from '@/layout/Layout'
import Column from '@/ui/grid/Column'
import Image from 'next/image'
import Row from '@/ui/grid/Row'
import HotSale from './hot-sale/HotSale'
import HomeInformation from './home-information/HomeInformation'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-dark-primary'>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png'
						alt=''
						width={720}
						height={628}
					/>
				</Column>
				<Column size={5} isPadding={false} className='flex-col' >
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
