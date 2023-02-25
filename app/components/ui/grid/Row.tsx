import { CSSProperties, FC, PropsWithChildren } from 'react'
import cn from 'clsx'


interface IRow {
    className?: string
    style?: CSSProperties
}

const Row: FC<PropsWithChildren<IRow>> = ({ className, style, children }) => {
    return (
        <div className={cn('grid w-full grid-cols-12 border-b-2 border-t-2 border-black border-solid h-full flex items-center',
                className
            )} style={style}
        >
            { children }
        </div>
    )
}

export default Row