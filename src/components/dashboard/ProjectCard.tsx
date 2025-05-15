import React from 'react';

interface ProjectCardProps {
  projectName: string;
  clientName: string;
  date: {
    month: string;
    day: string;
    fullDate: string;
  };
  time: string;
  status?: {
    text: string;
    isError?: boolean;
  };
  buttonText: string;
  buttonIcon: string;
  isOverdue?: boolean;
  isEmpty?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  clientName,
  date,
  time,
  status,
  buttonText,
  buttonIcon,
  isOverdue = false,
  isEmpty = false
}) => {
  if (isEmpty) {
    return (
      <div
        className="rounded border border-[color:var(--surface-outline,#83746A)] min-w-60 text-base text-[#362F2B] grow shrink w-[325px] p-4 bg-[#FFF8F5] border-solid"
      >
        <div className="w-full">
          <div className="flex w-full gap-2">
            <div
              className="text-[#362F2B] text-ellipsis text-base leading-[24px]"
            >
              {projectName}
            </div>
            <div className="border self-stretch w-0 shrink-0 h-[13px] bg-[#83746A] border-[rgba(131,116,106,1)] border-solid" />
            <div
              className="text-[#362F2B] text-ellipsis text-base leading-[24px]"
            >
              {clientName}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded border ${isOverdue ? 'border-[color:var(--system-error,#B81D2D)] border-2' : 'border-[color:var(--surface-outline,#83746A)]'} min-w-60 grow shrink w-[325px] p-4 bg-[#FFF8F5] border-solid`}
    >
      <div className="min-h-[95px] w-full">
        <div
          className="flex w-full gap-2 text-base text-[#362F2B]"
        >
          <div
            className="text-[#362F2B] text-ellipsis text-base leading-[24px]"
          >
            {projectName}
          </div>
          <div className="border self-stretch w-0 shrink-0 h-6 bg-[#83746A] border-[rgba(131,116,106,1)] border-solid" />
          <div
            className="text-[#362F2B] text-ellipsis text-base leading-[24px]"
          >
            {clientName}
          </div>
        </div>
        <div
          className="flex w-full gap-4 mt-[11px]"
        >
          <div
            className={`rounded border ${isOverdue ? 'border-[color:var(--system-error,#B81D2D)]' : 'border-[color:var(--surface-outline-var,#D6C3B7)]'} shadow-[0px_3px_10px_0px_var(--other-shadow-soft,#ECE0DA)] text-[#362F2B] whitespace-nowrap text-center w-[60px] h-[60px] border-solid`}
          >
            <div
              className="text-[#362F2B] text-sm leading-[20px]"
            >
              {date.month}
            </div>
            <div
              className="text-[#362F2B] text-[22px] leading-[28px]"
            >
              {date.day}
            </div>
          </div>
          <div
            className="min-w-60 text-sm leading-none flex-1 shrink basis-6 gap-2"
          >
            <div
              className="flex w-full items-center gap-[40px_100px] text-[#362F2B] justify-between"
            >
              <div
                className="text-[#362F2B] text-sm leading-[20px]"
              >
                {date.fullDate}
              </div>
              <div
                className="text-[#362F2B] text-sm leading-[20px]"
              >
                {time}
              </div>
            </div>
            {status && (
              <div
                className={`items-center flex w-full gap-1 ${status.isError ? 'text-[#B81D2D]' : 'text-[#362F2B]'} mt-2`}
              >
                {status.isError && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6655ed6eb14367ec20f0267dd239c47012c8b66e?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                    alt="Error icon"
                  />
                )}
                <div
                  className={`${status.isError ? 'text-[#B81D2D]' : 'text-[#362F2B]'} text-sm leading-[20px]`}
                >
                  {status.text}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="justify-center items-center shadow-[0px_3px_10px_0px_var(--other-shadow-soft,#ECE0DA)] flex w-full gap-2 text-base text-white px-4 bg-[#121741] mt-4 py-3 rounded-lg cursor-pointer"
      >
        <img
          src={buttonIcon}
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Button icon"
        />
        <div
          className="text-white text-base leading-[24px]"
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
