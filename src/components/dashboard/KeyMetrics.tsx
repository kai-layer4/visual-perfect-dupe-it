import React from 'react';

interface KeyMetricProps {
  title: string;
  value: string | number;
}

const KeyMetric: React.FC<KeyMetricProps> = ({ title, value }) => {
  return (
    <div
      className="rounded shadow-[0px_3px_10px_0px_var(--other-shadow-soft,#ECE0DA)] w-[219px] p-4 bg-[#FFF8F5] flex flex-col gap-[4px]"
    >
      <div
        className="text-[#362F2B] text-base leading-[24px]"
      >
        {title}
      </div>
      <div
        className="text-[#362F2B] text-4xl leading-[44px]"
      >
        {value}
      </div>
    </div>
  );
};

interface KeyMetricsProps {
  metrics: KeyMetricProps[];
}

export const KeyMetrics: React.FC<KeyMetricsProps> = ({ metrics }) => {
  return (
    <div
      className="items-stretch flex gap-3 text-[#362F2B] font-normal flex-wrap"
    >
      {metrics.map((metric, index) => (
        <KeyMetric 
          key={index} 
          title={metric.title} 
          value={metric.value} 
        />
      ))}
    </div>
  );
};

export default KeyMetrics;
