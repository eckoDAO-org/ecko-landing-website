import Roadmap2021 from '../components/roadmap/desktop-roadmaps/Roadmap2021';
import Roadmap2022 from '../components/roadmap/desktop-roadmaps/Roadmap2022';
import RoadmapOngoing from '../components/roadmap/desktop-roadmaps/RoadmapOngoing';
import MobileRoadmap2021 from '../components/roadmap/mobile-roadmaps/MobileRoadmap2021';
import MobileRoadmap2022 from '../components/roadmap/mobile-roadmaps/MobileRoadmap2022';
import MobileRoadmapOngoing from '../components/roadmap/mobile-roadmaps/MobileRoadmapOngoing';

export const R_2021 = {
  desktopImage: <Roadmap2021 />,
  mobileImage: <MobileRoadmap2021 />,
  id: '2021',
  color: 'primary',
};
export const R_2022 = {
  desktopImage: <Roadmap2022 />,
  mobileImage: <MobileRoadmap2022 />,
  id: '2022',
  color: 'primary',
};
export const R_2023 = {
  desktopImage: <Roadmap2022 />,
  mobileImage: <MobileRoadmap2022 />,
  id: '2023',
  color: 'primary',
};
export const R_ONGOING = {
  desktopImage: <RoadmapOngoing />,
  mobileImage: <MobileRoadmapOngoing />,
  id: 'ongoing',
  color: 'yellow',
};

export const ROADMAPS = [R_2021, R_2022, R_2023, R_ONGOING];
