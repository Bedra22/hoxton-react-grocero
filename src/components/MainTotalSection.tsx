type Props = {
    getTotal: any;
}

export function MainTotalSection({ getTotal }: Props) {
    return (
        <div>
            <span className="total-number">£{getTotal()}</span>
        </div>
    )
}