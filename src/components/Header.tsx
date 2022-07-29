import { HeaderList } from "./HeaderList"
import { HeaderTitle } from "./HeaderTitle"

type StoreItems = {
    id: number;
    name: string;
    price: number;
    incart: number;
    stock: number;
}


type Props = {
    store: StoreItems[];
    item: any[];
    getimgpath: (item: StoreItems[]) => string;
    IncreaseAmountInCart: (item: any) => void;
}
export function Header({ store, item, getimgpath, IncreaseAmountInCart }: Props) {
    return (
        <header id="store">
            <HeaderTitle />

            <HeaderList store={store} item={item} getimgpath={getimgpath} IncreaseAmountInCart={IncreaseAmountInCart} />
        </header>
    )
}