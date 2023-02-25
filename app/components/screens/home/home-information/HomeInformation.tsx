import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import { FC } from 'react'

const HomeInformation: FC = () => {
    return (
        <Row>
            <Column size={3} className='flex-col py-10'>
                <div className='font-medium text-2xl text-white'>100K</div>
                <div className='text-white/60'>Customers</div>
            </Column>
            <Column size={9} className='flex-col py-5 px-5'>
                <div className='font-medium text-2xl text-white'>New collection</div>
                <div className='text-white/60 text-sm'>The red dress was inspired by a love of fashion and a fear of complacency. Our chellenge was to create a dress.</div>
            </Column>
        </Row>
    )
}

export default HomeInformation