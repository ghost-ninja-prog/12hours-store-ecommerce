
import Column from '@/ui/grid/Column'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'


const HeaderLogo: FC = () => {
    return (
        <Column size={2}>
            <Link href='/' className='flex items-center'>
                <Image
                    src='/images/logo.svg'
                    width={100}
                    height={100}
                    alt='Lorian'
                    className='-mr-4'
                    />
                <span>
                    <span className='text-white block font-light tracking-[0.1em]'>LORIAN</span>
                    <span className='text-gray text-sm block text-dark-gray tracking-[0.4em] font-extralight'>STORE</span>
                </span>
            </Link>
        </Column>
    )
}

export default HeaderLogo