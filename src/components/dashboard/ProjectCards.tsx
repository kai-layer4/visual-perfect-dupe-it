import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollBar from '../ui/ScrollBar';

interface ProjectCardsProps {
  count: number;
  title: string;
}

export const ProjectCards: React.FC<ProjectCardsProps> = ({ count, title }) => {
  // Sample project data
  const projects = [
    {
      projectName: "Parkettsanierung",
      clientName: "Fröhlich & Partner",
      date: {
        month: "Jan",
        day: "02",
        fullDate: "Do. 02.01.2025"
      },
      time: "08:00 - 15:00",
      status: {
        text: "Projekt 1 Tag überfällig",
        isError: true
      },
      buttonText: "Projekt ansehen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b224e63212cc48a2b05549e456d75e8bc804dcb?placeholderIfAbsent=true",
      isOverdue: true
    },
    {
      projectName: "Au��enreinigung",
      clientName: "Vero Industries",
      date: {
        month: "Mon",
        day: "06",
        fullDate: "Mon. 06.01.2025"
      },
      time: "09:00 - 17:00",
      status: {
        text: "1 Team Mitglied fehlend",
        isError: true
      },
      buttonText: "Mitarbeitende zuweisen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87bf3eef8d3934826f40d3252b0932ac165bed5f?placeholderIfAbsent=true",
      isOverdue: true
    },
    {
      projectName: "Fassadenreinigung",
      clientName: "TechnoVision",
      date: {
        month: "Mon",
        day: "06",
        fullDate: "Mon. 06.01.2025"
      },
      time: "09:00 - 17:00",
      status: {
        text: "1 Team Mitglied fehlend",
        isError: true
      },
      buttonText: "Mitarbeitende zuweisen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87bf3eef8d3934826f40d3252b0932ac165bed5f?placeholderIfAbsent=true",
      isOverdue: true
    },
    {
      projectName: "Heizungsreperatur",
      clientName: "Optima Group",
      date: {
        month: "Jan",
        day: "07",
        fullDate: "Di. 07.01.2025"
      },
      time: "11:00 - 13:00",
      status: {
        text: "Nicht zugewiesen",
        isError: false
      },
      buttonText: "Mitarbeitende zuweisen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87bf3eef8d3934826f40d3252b0932ac165bed5f?placeholderIfAbsent=true"
    },
    {
      projectName: "Gehölzschnitt",
      clientName: "Zentra Consulting",
      date: {
        month: "Jan",
        day: "03",
        fullDate: "Fr. 03.01.2025"
      },
      time: "10:00 - 14:00",
      status: {
        text: "Nicht zugewiesen",
        isError: false
      },
      buttonText: "Mitarbeitende zuweisen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87bf3eef8d3934826f40d3252b0932ac165bed5f?placeholderIfAbsent=true"
    },
    {
      projectName: "Reinigung Außenjalousien",
      clientName: "GreenPeak",
      date: {
        month: "Jan",
        day: "03",
        fullDate: "Fr. 03.01.2025"
      },
      time: "09:00 - 15:00",
      status: {
        text: "Nicht abgeschlossen",
        isError: false
      },
      buttonText: "Projekt ansehen",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b224e63212cc48a2b05549e456d75e8bc804dcb?placeholderIfAbsent=true"
    },
    {
      projectName: "Fenster Putzen",
      clientName: "Feld & Fluss",
      date: {
        month: "",
        day: "",
        fullDate: ""
      },
      time: "",
      buttonText: "",
      buttonIcon: "",
      isEmpty: true
    },
    {
      projectName: "Baumfällarbeiten",
      clientName: "NovaTech Solutions",
      date: {
        month: "",
        day: "",
        fullDate: ""
      },
      time: "",
      buttonText: "",
      buttonIcon: "",
      isEmpty: true
    }
  ];

  return (
    <div
      className="items-stretch z-0 flex min-w-60 min-h-[686px] flex-col overflow-hidden font-normal w-[829px] gap-2 max-md:max-w-full"
    >
      <div
        className="items-center flex gap-3 text-[#362F2B] px-4"
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
        className="content-start flex-wrap flex h-[634px] w-full gap-[16px] overflow-hidden mt-2 max-md:max-w-full relative"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            clientName={project.clientName}
            date={project.date}
            time={project.time}
            status={project.status}
            buttonText={project.buttonText}
            buttonIcon={project.buttonIcon}
            isOverdue={project.isOverdue}
            isEmpty={project.isEmpty}
          />
        ))}
        <ScrollBar 
          height="min-h-[610px]" 
          position="absolute" 
          right="300px" 
          bottom="6" 
        />
      </div>
    </div>
  );
};

export default ProjectCards;
