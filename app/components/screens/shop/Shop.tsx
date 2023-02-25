import { IProductsPage } from "@/../pages";
import Layout from "@/layout/Layout";
import Column from "@/ui/grid/Column";
import Row from "@/ui/grid/Row";
import Image from "next/image";
import { FC } from "react";

const Shop: FC<IProductsPage> = ({ products }) => {
    return (
        <Layout
			title='Shop'
			description='Catalog clothing and accessories'
		>
			<Row className='bg-dark-primary'>
                {
                    products.map(product => (
                        <Column size={3} key={product.id}>
                            <div>
                                <Image alt={product.name} src={product.images[0]} width={220} height={220} />
                                <h2>{ product.name }</h2>
                                <div className="">{ product.price }</div>
                                <button>Add to cart</button>
                            </div>
                        </Column>
                    ))
                }
				
			</Row>
		</Layout>
    )
}


export default Shop