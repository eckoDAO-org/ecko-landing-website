import React from 'react'
import { Tab } from 'semantic-ui-react'
import styled from 'styled-components'
import Ongoing from './desktop-roadmaps/Ongoing'
import Roadmap2021 from './desktop-roadmaps/Roadmap2021'
import Roadmap2022 from './desktop-roadmaps/Roadmap2022'

const RoadMapTab = styled(Tab)`
  font-family: ${({ theme: { fontFamily } }) => fontFamily.bold};
  font-size: 32px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 100%;
  margin-top:40px;
  & > div{
        & > *:not(:last-child) {
        margin-right: 32px;
    }
  }
  .item{
    cursor:pointer;

  }

    .active{
            color:white;
    }

`

const RoadmapPane = styled(Tab.Pane)`
    margin-top: 56px;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`



const RoadmapTabs = () => {
    const panes = [
        {
          menuItem: '2021',
          render: () => <RoadmapPane attached={false} >
                            <Roadmap2021/>
                        </RoadmapPane>,
        },
        {
          menuItem: '2022',
          render: () => <RoadmapPane attached={false}>    
                            <Roadmap2022/>
                        </RoadmapPane>,
        },
        {
          menuItem: 'ONGOING',
          render: () => <RoadmapPane attached={false}>
                            <Ongoing/>
                        </RoadmapPane>,
        },
      ]
      
        return(
        <RoadMapTab menu={{ text: true }} panes={panes} defaultActiveIndex={0} onTabChange={(data)=>console.log(data)}/>
        )
}

export default RoadmapTabs