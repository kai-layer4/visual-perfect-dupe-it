import React from 'react';

interface BillingCardProps {
  clientName: string;
  status: {
    text: string;
    type: 'error' | 'warning';
  };
}

export const BillingCard: React.FC<BillingCardProps> = ({ clientName, status }) => {
  const statusColors = {
    error: {
      bg: 'bg-[#FFDAD8]',
      text: 'text-[#93001B]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6410667cd3219c9b4cf9608609fbae814af3c4e8?placeholderIfAbsent=true'
    },
    warning: {
      bg: 'bg-[#FFF1B9]',
      text: 'text-[#524600]',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d9871dd6c50a22adda450d5af28ff46272468689?placeholderIfAbsent=true'
    }
  };

  const { bg, text, icon } = statusColors[status.type];

  return (
    <div
      className="items-center rounded border border-[color:var(--surface-outline,#83746A)] flex w-full gap-1 px-4 bg-[#FFF8F5] py-3 border-solid"
    >
      <div
        className="items-stretch self-stretch flex w-full flex-col flex-1 shrink basis-[0%] gap-2 my-auto"
      >
        <div
          className="text-[#362F2B] text-ellipsis text-sm leading-[20px]"
        >
          {clientName}
        </div>
        <div
          className={`items-center flex gap-2 text-xs ${text} whitespace-nowrap leading-none px-3 ${bg} mt-2 py-2 rounded-3xl`}
        >
          <img
            src={icon}
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Status icon"
          />
          <div
            className={`${text} text-xs leading-[16px]`}
          >
            {status.text}
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25374f284661bf167096586903cf502bc0da07a?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        alt="Arrow icon"
      />
    </div>
  );
};

export default BillingCard;
