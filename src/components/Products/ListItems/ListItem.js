import CartIcon from "../../../assets/add_cart.svg"
import DefaultItem from "../../../assets/placeholder.png"

const ListItem = ({data}) => {
    const discount = (percentageOff) => {
        return data.price * percentageOff;
    }
    const discountedPrice = discount(0.9);

    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={DefaultItem} alt='list item'/>
            <div className={"item-card_information"}>
                <div className={"pricing"}>
                    <span>${discountedPrice}</span>
                    <small><strike>${data.price}</strike></small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={CartIcon} alt='Cart icon'/>
            </button>
        </div>
    )
}

export default ListItem