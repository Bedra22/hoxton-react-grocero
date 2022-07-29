type StoreItems = {
    id: number;
    name: string;
    price: number;
    incart: number;
    stock: number;
}
type CartItem = {
    id: number;
    name: string;
    price: number;
    incart: number;
    stock: number;
}

type Props = {
    store: StoreItems[];
    ItemsInCart: CartItem[];
    item: any[];
    getimgpath: (item: any) => string;
    DecreaseAmountInCart: (item: any) => void;
    IncreaseAmountInCart: (item: any) => void;
}



export function MainCartItemsUl({ ItemsInCart, item, getimgpath, DecreaseAmountInCart, IncreaseAmountInCart }: Props) {
    console.log(ItemsInCart)


    return (
        <ul className="item-list cart--item-list">
            {
                ItemsInCart.map(item => (
                    <li>
                        <img className="cart--item-icon"
                            src={getimgpath(item)}
                            alt={item.name} />
                        <p>
                            {item.name}
                        </p>

                        <button className="quantity-btn remove-btn center"
                            onClick={function () {
                                DecreaseAmountInCart(item)
                            }}
                        >
                            -
                        </button>
                        <span className="quantity-text center">
                            {item.incart}
                        </span>
                        <button className="quantity-btn add-btn center"
                            onClick={function () {
                                IncreaseAmountInCart(item)
                            }}>
                            +
                        </button>
                    </li>
                ))
            }

        </ul>
    )
}