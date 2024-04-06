import ListItem from './ListItems/ListItem'

const Products = () => {
    const items = [
        {
            price: 100,
            title: "Sweater"
        },
        {
            price: 300,
            title: "Coat"
        }
    ]

    return (
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                <ListItem data={items[0]}></ListItem>
                <ListItem data={items[1]}></ListItem>
            </div>
        </div>
    )
}

export default Products