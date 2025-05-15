import React from 'react';
import BillingSection from './BillingSection';

export const BillingSections: React.FC = () => {
  const overdueClients = [
    'NovaTech Solutions',
    'NovaTech Solutions',
    'NovaTech Solutions'
  ];

  const requestedClients = [
    'Cosmo Enterprise',
    'Cosmo Enterprise',
    'GreenPeak'
  ];

  return (
    <div
      className="z-0 min-w-60 w-[274px] gap-6"
    >
      <BillingSection
        title="Überfällige Rechnungen"
        count={3}
        type="overdue"
        clients={overdueClients}
      />
      <div className="border min-h-px w-full bg-[#83746A] mt-6 border-[rgba(131,116,106,1)] border-solid" />
      <BillingSection
        title="Angefragte Rechnungen"
        count={5}
        type="requested"
        clients={requestedClients}
      />
    </div>
  );
};

export default BillingSections;
