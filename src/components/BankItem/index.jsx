import { IconBank } from "../Icons"

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const BankItem = ({ bank, balance }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="text-[15px] font-semibold leading-[120%] tracking-0 flex items-center gap-2.5">
                <IconBank />
                <span className="">{bank}</span>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className="text-left leading-[120%] w-10.75 h-4.5 font-semibold">Saldo </span>
                <span>{formater.format(balance)}</span>
            </div>
        </div>
    )
}