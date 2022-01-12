import React, { useEffect, useRef, useState } from "react";
import {
  ContainerTitle,
  FeaturesContainer,
  FeatureText,
  FeatureTitle,
  ImageContainer,
  Section,
  SectionContainer,
  SectionMenuContainer,
  SectionsContainer,
} from "../components/partners/PartnersContainers";
import { partnersList } from "../components/partners/partnersList";
import useWindowSize from "../hooks/useWindowSize";

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

const PartnersSection = () => {
  const ref = useRef();
  const [visibleSection, setVisibleSection] = useState(
    partnersList[0].sectionID
  );
  const [sectionNavHeight, setSectionNavHeight] = useState();
  const [screenWidth, screenHeight] = useWindowSize();

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(
        document.getElementById(partnersList[0].sectionID)
      );
      const scrollPosition = window.scrollY + headerHeight;

      const selected = partnersList.find(({ section, sectionID }) => {
        const ele = document.getElementById(sectionID);
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return null;
      });

      if (selected && selected.sectionID !== visibleSection) {
        setVisibleSection(selected.sectionID);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    const partnersNav = document.getElementById("partners-nav");
    if (partnersNav) {
      setSectionNavHeight(partnersNav.getBoundingClientRect().height);
    }
  }, [screenHeight, screenWidth]);

  return (
    <FeaturesContainer
      screenHeight={screenHeight}
      sectionNavHeight={sectionNavHeight}
      ref={ref}
    >
      <div
        id="partners"
        style={{ position: "relative", color: "trasparent", height: 100 }}
      ></div>
      <ContainerTitle isSafari={isSafari}>Partners</ContainerTitle>
      <main>
        <nav class="partners-nav" id="partners-nav">
          {partnersList.map((s, i) => {
            return (
              <a href={`#${s.sectionID}`} style={{ padding: 0 }}>
                <SectionMenuContainer
                  key={i}
                  color={s.color}
                  className={visibleSection === s.sectionID ? "active" : ""}
                  onClick={() => setVisibleSection(s.sectionID)}
                  style={{
                    transition: "all 100ms ease-in-out",
                    borderLeft:
                      visibleSection === s.sectionID
                        ? `5px solid #FFFFFF`
                        : "3.5px solid #ffffff60",
                  }}
                >
                  <a
                    href={`#${s.sectionID}`}
                    style={{
                      whiteSpace: "nowrap",
                      color:
                        visibleSection === s.sectionID
                          ? "#FFFFFF"
                          : "#FFFFFF60",
                    }}
                  >
                    {s.title}
                  </a>
                </SectionMenuContainer>
              </a>
            );
          })}
        </nav>
        <SectionsContainer id="partners-container">
          <SectionContainer visibleSection={visibleSection}>
            {partnersList.map((p, i) => {
              return (
                <Section
                  isVisible={visibleSection === p.sectionID}
                  id={p.sectionID}
                  key={i}
                >
                  <ImageContainer style={{ padding: "10px 10px 10px 0px" }}>
                    {p.image}
                  </ImageContainer>
                  <FeatureTitle style={{ color: "#FFFFFF" }}>
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

export default PartnersSection;
