import Roadmap2021 from '../components/roadmap/desktop-roadmaps/Roadmap2021';
import Roadmap2022 from '../components/roadmap/desktop-roadmaps/Roadmap2022';
import RoadmapOngoing from '../components/roadmap/desktop-roadmaps/RoadmapOngoing';

export const R_2021 = {
  image: <Roadmap2021 />,
  id: '2021',
};
export const R_2022 = {
  image: <Roadmap2022 />,
  id: '2022',
};
export const R_ONGOING = {
  image: <RoadmapOngoing />,
  id: 'ongoing',
};

export const ROADMAPS = [R_2021, R_2022, R_ONGOING];
