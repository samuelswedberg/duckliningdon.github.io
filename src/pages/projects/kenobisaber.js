import React from 'react'
import MetaTags from 'react-meta-tags';
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';

function kenobisaber() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Master Chief</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}>
                    <HeaderBox><HeaderTitle>MASTER CHIEF HELMET</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Divider/>
            <Section>
                <SectionText>I'm a freshman at North Dakota State University currently studying electrical engineering. I have a particular interest in robotics, but I am looking forward to expanding my knowledge and explore the engineering world. In my free time, you can find me often working out, playing video games, or working on my projects. I've always been a maker. Whether that was putting together LEGOs at a young age, creating content, or building electronics... I've always loved creating. I often teach myself new skills such as 3D printing, basic programming, and a handful of musical instruments. If you can't tell, I have a problem of wanting to do everything possible. I am passionate for learning new things and seeking the satisfaction that comes from completing a project. To see a collection of my proudest projects, click here. If you want to see what I'm doing in my life right now, click here.
                </SectionText>
            </Section>
            <Divider/>
        </>
    )
}

export default kenobisaber
