import React, { useEffect, useRef, useState } from 'react';
import { ContainerTitle, FeaturesContainer, FeatureText, FeatureTitle, ImageContainer, Section, SectionContainer, SectionMenuContainer, SectionsContainer } from '../components/partnership/PartnershipContainers';
import { partnershipList } from '../components/partnership/partnershipList';
import useWindowSize from '../hooks/useWindowSize';

const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
  
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  

const PartnershipSection = () => {

    const ref = useRef();
    const [visibleSection, setVisibleSection] = useState(partnershipList[0].sectionID);
    const [sectionNavHeight, setSectionNavHeight] = useState();
    const [screenWidth, screenHeight] = useWindowSize();
  
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    useEffect(() => {
        const handleScroll = () => {
          const { height: headerHeight } = getDimensions(
            document.getElementById(partnershipList[0].sectionID)
          );
          const scrollPosition = window.scrollY + headerHeight;
    
          const selected = partnershipList.find(({ section, sectionID }) => {
            const ele = document.getElementById(sectionID);
            if (ele) {
              const { offsetBottom, offsetTop } = getDimensions(ele);
              return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
          });
    
          if (selected && selected.sectionID !== visibleSection) {
            setVisibleSection(selected.sectionID);
          } else if (!selected && visibleSection) {
            setVisibleSection(undefined);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [visibleSection]);

      useEffect(() => {
        const partnershipNav = document.getElementById('partnership-nav');
        if (partnershipNav) {
          setSectionNavHeight(partnershipNav.getBoundingClientRect().height);
        }
      }, [screenHeight, screenWidth]);
  

    return (
        <FeaturesContainer
        screenHeight={screenHeight}
        sectionNavHeight={sectionNavHeight}
        ref={ref}
        >
            <div
            id='partnership'
            style={{ position: 'relative', color: 'trasparent', height: 100 }}
            ></div>
            <ContainerTitle isSafari={isSafari}>
                Partnership
            </ContainerTitle>
            <main>
                <nav class='partnership-nav' id='partnership-nav'>
                {partnershipList.map((s, i) => {
                    return (
                    <a href={`#${s.sectionID}`} style={{ padding: 0 }}>
                        <SectionMenuContainer
                        key={i}
                        color={s.color}
                        className={visibleSection === s.sectionID ? 'active' : ''}
                        onClick={() => setVisibleSection(s.sectionID)}
                        style={{
                            transition: 'all 100ms ease-in-out',
                            borderLeft: visibleSection === s.sectionID
                            ? `5px solid #FFFFFF`
                            : '3.5px solid #ffffff60',
                        }}
                        >
                        <a
                            href={`#${s.sectionID}`}
                            style={{
                            whiteSpace: 'nowrap',
                            color: visibleSection === s.sectionID ? '#FFFFFF' : '#FFFFFF60',
                        }}
                        >
                            {s.title}
                        </a>
                        </SectionMenuContainer>
                    </a>
                    );
                })}
                </nav>
                <SectionsContainer id='partnership-container'>
                    <SectionContainer visibleSection={visibleSection}>
                        {partnershipList.map((p, i) => {
                        return (
                            <Section
                            isVisible={visibleSection === p.sectionID}
                            id={p.sectionID}
                            key={i}
                            >
                            <ImageContainer 
                                style={{padding:'10px 10px 10px 0px'}}
                            >
                                {p.image}
                            </ImageContainer>
                            <FeatureTitle style={{color:'#FFFFFF'}}>
                                {p.title}
                            </FeatureTitle>
                            <FeatureText>{p.text}</FeatureText>
                            </Section>
                        );
                        })}
                    </SectionContainer>
                </SectionsContainer>
            </main>   
        </FeaturesContainer>
    );
};

export default PartnershipSection;