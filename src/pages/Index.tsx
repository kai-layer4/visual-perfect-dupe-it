import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Sidebar from '../components/dashboard/Sidebar';
import KeyMetrics from '../components/dashboard/KeyMetrics';
import ProjectCards from '../components/dashboard/ProjectCards';
import BillingSections from '../components/dashboard/BillingSections';

const Index: React.FC = () => {
  // Sample data for key metrics
  const metrics = [
    { title: "Gesamte Projekte diesen Monat", value: 139 },
    { title: "Aktive Projekte", value: 12 },
    { title: "Gesamtanzahl Kunden", value: 127 },
    { title: "Abwesende Mitarbeitende", value: 5 },
    { title: "Neue Abwesenheits-anfragen", value: 16 }
  ];

  return (
    <div className="overflow-hidden bg-[#FFF8F5]">
      <DashboardHeader 
        date="Day, 06. Month 2024"
        greeting="Good Morning"
        name="Klara"
        notificationCount={2}
        messageCount={2}
        initials="KH"
      />
      <div className="z-10 mt-[-140px] w-full max-w-[1472px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[21%] max-md:w-full max-md:ml-0">
            <Sidebar />
          </div>
          <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full mt-[148px] max-md:max-w-full max-md:mt-10">
              <KeyMetrics metrics={metrics} />
              <div className="flex w-full items-stretch mt-[38px] max-md:max-w-full">
                <div className="relative flex gap-[39px] grow shrink basis-auto -mr-12 pb-10">
                  <ProjectCards count={8} title="Projekte mit Komplikationen" />
                  <BillingSections />
                  <div
                    className="items-center rounded border-[color:var(--primary-primary-container,#EC9846)] flex min-h-12 gap-2.5 w-12 h-12 p-3 border-2 border-solid"
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/29c3d3809aef360eb6f04d5b4ce786ff0f818b35?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch my-auto"
                      alt="Add button"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
