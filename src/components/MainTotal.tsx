import { MainTotalSection } from "./MainTotalSection";

type Props = {
    getTotal: () => string
}

export function MainTotal({ getTotal }: Props) {
    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>

            <MainTotalSection getTotal={getTotal} />
        </div>
    )
}