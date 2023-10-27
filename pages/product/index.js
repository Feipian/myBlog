import Product from "../../components/Product/Product"



export default function product() { 
    return (
        <>
            <div className="m-2  grid md:grid-cols-3 ">
                {/* Product component */}
                <Product></Product>
            </div>
        </>
    )
}
