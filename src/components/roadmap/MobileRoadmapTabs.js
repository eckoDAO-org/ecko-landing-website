import React from 'react'
import { Tab } from 'semantic-ui-react'
import styled from 'styled-components'
import MobileRoadmap2021 from './mobile-roadmaps/MobileRoadmap2021'
import MobileRoadmap2022 from './mobile-roadmaps/MobileRoadmap2022'
import MobileRoadmapOngoing from './mobile-roadmaps/MobileRoadmapOngoing'

const RoadMapTab = styled(Tab)`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 100%;
  margin-top:32px;
  & > div{
        & > *:not(:last-child) {
        margin-right: 16px;
    }
  }
  .menu{
    display:flex;
}
  .item{
    cursor:pointer;

  }
    .active{
            color:white;
    }
`

const RoadmapPane = styled(Tab.Pane)`
    margin-top: 32px;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`


const MobileRoadmapTabs = () => {
    const panes = [
        {
          menuItem: '2021',
          render: () => <RoadmapPane attached={false} >
                            <MobileRoadmap2021/>
                        </RoadmapPane>,
        },
        {
          menuItem: '2022',
          render: () => <RoadmapPane attached={false}> 
                            <MobileRoadmap2022/>
                        </RoadmapPane>,
        },
        {
          menuItem: 'ONGOING',
          render: () => <RoadmapPane attached={false}>
                            <MobileRoadmapOngoing/>
                        </RoadmapPane>,
        },
      ]
      
        return(
        <RoadMapTab menu={{ text: true }} panes={panes} defaultActiveIndex={0} onTabChange={(data)=>console.log(data)}/>
        )
};

export default MobileRoadmapTabs;