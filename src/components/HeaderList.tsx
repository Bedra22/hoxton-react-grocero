type StoreItems = {
    id: number;
    name: string;
    price: number;
    incart: number;
    stock: number;
}

type SingleItem = {
    id: number;
    name: string;
    price: number;
    incart: number;
    stock: number;
}


type Props = {
    store: StoreItems[];
    item: any;
    getimgpath: (item: any) => string;
    IncreaseAmountInCart: (item: any) => void;
}

export function HeaderList({ store, item, getimgpath, IncreaseAmountInCart }: Props) {
    return (
        <ul className="item-list store--item-list">
            {
                store.map(item => (<li>
                    <div className=".store--item-icon">
                        <img src={getimgpath(item)} />
                    </div>
                    <button
                        onClick={function () {
                            IncreaseAmountInCart(item)
                        }}
                    >
                        Add to cart ({item.stock})
                    </button>
                </li>))
            }
        </ul>
    )
}