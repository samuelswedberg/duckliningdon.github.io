import React from 'react';
import MetaTags from 'react-meta-tags';
import { Header, HeaderTitle, HeaderBox, Section, SectionText } from '../components/Global/Global';

function Home() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Home</title> 
            </MetaTags>
            <Section>
            <Header style={{backgroundImage: `url("/media/pages/projects/header.jpg")`}}>
                <HeaderBox><HeaderTitle>UNDER DEVELOPMENT</HeaderTitle></HeaderBox>
            </Header>
            </Section>
            <Section>
                <SectionText>This website is currently under development. Most of the pages are not fully complete yet.</SectionText>
            </Section>
        </>
    )
}

export default Home
