import React from "react"

function Product(props) {
    return (
        <div>
            {/* <p>Id: {props.product.id} Name: {props.product.name}
            £ {props.product.price} Description: {props.product.description}</p> */}
            <p>Id: {props.id} Name: {props.name}
            £ {props.price} Description: {props.description}</p>
        </div>
    )
}

export default Product