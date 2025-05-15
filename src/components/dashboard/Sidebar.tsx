import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => {
  return (
    <div
      className={`items-center flex w-full gap-3 ${isActive ? 'text-[#8E4E00]' : 'text-[#362F2B]'} whitespace-nowrap pr-[12px] pl-[12px] pt-0 pb-[12px] cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={icon}
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        alt={`${label} icon`}
      />
      <div
        className={`${isActive ? 'text-[#8E4E00]' : 'text-[#362F2B]'} text-base leading-[24px]`}
      >
        {label}
      </div>
    </div>
  );
};

const Divider: React.FC = () => (
  <div className="border min-h-px w-full bg-[#83746A] mt-10 border-[rgba(131,116,106,1)] border-solid" />
);

export const Sidebar: React.FC = () => {
  return (
    <div
      className="shadow-[0px_3px_10px_0px_var(--other-shadow-soft,#ECE0DA)] relative min-h-[982px] grow w-full bg-[#FFF8F5] max-md:mt-7 max-md:px-5"
    >
      <div
        className="z-0 max-w-full w-[222px] gap-20"
      >
        <div className="w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01cdca9f6e62d923a7b11f0899bcd1c3d1f8b0ff?placeholderIfAbsent=true"
            className="aspect-[4.61] object-contain w-full"
            alt="TechTool Logo"
          />
        </div>
        <div
          className="w-full max-w-[222px] text-base text-[#362F2B] font-normal gap-10 mt-20 max-md:mt-10"
        >
          <NavItem 
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fd0a49926191f960f4462250c79ff99b09bc81a0?placeholderIfAbsent=true" 
            label="Übersicht" 
            isActive={true} 
          />
          <Divider />
          <div
            className="flex w-full flex-col gap-6 mt-10"
          >
            <NavItem 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/988fd913922c27edf5147c2f9a4610dd790a42d3?placeholderIfAbsent=true" 
              label="Mitarbeitende & Teams" 
            />
            <NavItem 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/445e5caa898836f3563b98d2366caf7f0af44092?placeholderIfAbsent=true" 
              label="Kundschaft" 
            />
            <NavItem 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/85c45f8728a94d824af809c4adadae14dee4851b?placeholderIfAbsent=true" 
              label="Abwesenheiten" 
            />
          </div>
          <Divider />
          <div
            className="flex w-full flex-col gap-6 mt-10"
          >
            <NavItem 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/337e55596ca4514541ebd4ec8e494883546e97c3?placeholderIfAbsent=true" 
              label="Projekte" 
            />
            <NavItem 
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1535254d53e84f8fc7d5d0e30488ab418823dac2?placeholderIfAbsent=true" 
              label="Materialien & Service" 
            />
          </div>
        </div>
      </div>
      <div
        className="z-0 flex w-full flex-col text-base text-[#362F2B] font-normal whitespace-nowrap gap-6 mt-4"
      >
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/952c23b66a03b9397615f6fcd24d3f74f04c8c6e?placeholderIfAbsent=true" 
          label="Einstellungen" 
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3296f07a9a66f6780ade50456cebf921b978502c?placeholderIfAbsent=true" 
          label="Abmelden" 
        />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06b407ad05869fac9f2ee82c4d4762abcaa1bb0?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-6 absolute z-0 h-6 right-[15px] bottom-6"
        alt="Help icon"
      />
    </div>
  );
};

export default Sidebar;
