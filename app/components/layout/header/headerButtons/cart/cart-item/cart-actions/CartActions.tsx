import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div>
				<button
					{...dec}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					-
				</button>

				<input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					value={quantity}
				/>

				<button
					{...inc}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					+
				</button>
			</div>

			<button
				onClick={() => removeFromCart({ id: item.id })}
			>
				Remove
			</button>
		</div>
	)
}

export default CartActions
