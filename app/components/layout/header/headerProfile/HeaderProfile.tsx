import Column from '@/ui/grid/Column'
import SquareButton from '@/ui/square-button/SquareButton'
import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

const HeaderProfile: FC = () => {
    return (
        <Column size={3} className='flex items-center'>
            <SquareButton Icon={FiUser} onClick={ () => {} }/>
            <div className='ml-2'>
                <div className='text-gray text-sm'>Ninja Prog</div>
            </div>
        </Column >
    )
}

export default HeaderProfile