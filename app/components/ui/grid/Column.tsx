import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'


interface IColumn {
    size: number
    isCenter?: boolean
    className?: string
}

const Column: FC<PropsWithChildren<IColumn>> = ({ size, className, isCenter = true, children }) => {
    return (
        <div style={{gridColumn: `span ${size} / span ${size}`}}
            className={cn('border-r-2 border-black border-solid h-full flex items-center p-3',
                {'justify-center': isCenter},
                className
            )}
        >
            { children }
        </div>
    )
}

export default Column