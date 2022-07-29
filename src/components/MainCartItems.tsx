import { MainCartItemsUl } from "./MainCartItemsUl";

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
    getimgpath: (item: StoreItems[]) => string;
    DecreaseAmountInCart: (item: any) => void;
    IncreaseAmountInCart: (item: any) => void;
}

export function MainCartItems({ ItemsInCart, item, getimgpath, DecreaseAmountInCart, IncreaseAmountInCart }: Props) {
    return (
        <div className="cart--item-list-container">

            <MainCartItemsUl
                ItemsInCart={ItemsInCart}
                item={item}
                getimgpath={getimgpath}
                DecreaseAmountInCart={DecreaseAmountInCart}
                IncreaseAmountInCart={IncreaseAmountInCart}
                store={[]}
            />

        </div>
    )
}