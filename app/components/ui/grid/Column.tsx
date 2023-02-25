import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'


interface IColumn {
    size: number
    className?: string
    isCenter?: boolean
    isPadding?: boolean 
}

const Column: FC<PropsWithChildren<IColumn>> = ({ size, className, isCenter = true, isPadding=true, children }) => {
    return (
        <div style={{gridColumn: `span ${size} / span ${size}`}}
            className={cn('border-r-2 border-black border-solid h-full flex items-center',
                {
                    'justify-center': isCenter,
                    'p-3': isPadding
                },
                className
            )}
        >
            { children }
        </div>
    )
}

export default Column