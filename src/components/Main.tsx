import { MainTotal } from "./MainTotal";
import { MainCartItems } from "./MainCartItems"
import { MainTitle } from "./MainTitle"

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
    getTotal: any;
}




export function Main({ ItemsInCart, item, getimgpath, DecreaseAmountInCart, IncreaseAmountInCart, getTotal }: Props) {
    return (

        <main id="cart">

            <MainTitle />

            <MainCartItems
                ItemsInCart={ItemsInCart}
                item={item}
                getimgpath={getimgpath}
                DecreaseAmountInCart={DecreaseAmountInCart}
                IncreaseAmountInCart={IncreaseAmountInCart} store={[]} />

            <MainTotal getTotal={getTotal} />
        </main>
    )
}