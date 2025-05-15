import React from 'react';
import BillingCard from './BillingCard';
import ScrollBar from '../ui/ScrollBar';

interface BillingSectionProps {
  title: string;
  count: number;
  type: 'overdue' | 'requested';
  clients: string[];
}

export const BillingSection: React.FC<BillingSectionProps> = ({ 
  title, 
  count, 
  type, 
  clients 
}) => {
  const statusText = type === 'overdue' ? 'Anfrage offen' : 'Angefragt';
  const statusType = type === 'overdue' ? 'error' : 'warning';

  return (
    <div
      className="items-stretch flex min-h-[319px] w-full flex-col gap-2"
    >
      <div
        className="items-center flex gap-3 text-[#362F2B] font-normal"
      >
        <div
          className="text-[#362F2B] text-4xl leading-[44px]"
        >
          {count}
        </div>
        <div
          className="text-[#362F2B] text-base leading-[24px]"
        >
          {title}
        </div>
      </div>
      <div
        className="flex h-[267px] w-full gap-1 overflow-hidden mt-2 relative"
      >
        <div
          className="min-w-60 w-full font-normal flex-1 shrink basis-[0%] flex flex-col gap-4"
        >
          {clients.map((client, index) => (
            <BillingCard
              key={index}
              clientName={client}
              status={{
                text: statusText,
                type: statusType
              }}
            />
          ))}
        </div>
        <ScrollBar />
      </div>
    </div>
  );
};

export default BillingSection;
