import React from 'react';

interface DashboardHeaderProps {
  date: string;
  greeting: string;
  name: string;
  notificationCount?: number;
  messageCount?: number;
  initials: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  date,
  greeting,
  name,
  notificationCount = 2,
  messageCount = 2,
  initials
}) => {
  return (
    <div
      className="flex w-full gap-5 font-normal flex-wrap justify-between bg-[#FFF8F5] pl-20 pr-10 py-9 max-md:max-w-full max-md:px-5"
    >
      <div className="mt-[9px]">
        <div
          className="text-[#362F2B] text-sm leading-[20px)]"
        >
          {date}
        </div>
        <div
          className="text-[#8E4E00] text-[28px] leading-[36px)]"
        >
          {greeting} {name}
        </div>
      </div>
      <div
        className="items-center flex min-h-16 gap-8 text-sm text-[#4C2700] whitespace-nowrap text-center leading-none"
      >
        <div
          className="items-start border border-[color:var(--surface-outline,#83746A)] self-stretch relative flex min-h-12 gap-2.5 w-12 h-12 my-auto p-3 rounded-[40px] border-solid"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9118fc64c1ffe64079b09b0e4d443919cde074ce?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 z-0 shrink-0 my-auto"
            alt="Notification icon"
          />
          <div
            className="text-[#4C2700] text-sm leading-[20px)]"
          >
            {notificationCount}
          </div>
        </div>
        <div
          className="items-start border border-[color:var(--surface-outline,#83746A)] self-stretch relative flex min-h-12 gap-2.5 w-12 h-12 my-auto p-3 rounded-[40px] border-solid"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/640599c87d98602599e817f62363fcee48291add?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 z-0 shrink-0 my-auto"
            alt="Message icon"
          />
          <div
            className="text-[#4C2700] text-sm leading-[20px)]"
          >
            {messageCount}
          </div>
        </div>
        <div
          className="text-[#4C2700] text-[28px] leading-none self-stretch min-h-16 w-16 h-16 bg-[#EC9846] my-auto pl-3.5 pr-[13px] rounded-[40px] flex items-center justify-center"
        >
          {initials}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
