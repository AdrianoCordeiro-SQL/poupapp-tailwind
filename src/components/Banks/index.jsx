import { BankItem } from "../BankItem";
import { Button } from "../Button";
import { IconWallet } from "../Icons";

export const Banks = () => {
  const items = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <>
      <ul className="p-0 m-0 list-none mb-12 text-neutral-text">
        {items.map((bank) => (
          <li key={bank.bank} className="border-b border-neutral-header pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
            <BankItem {...bank} />
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-auto">
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </>
  );
};
