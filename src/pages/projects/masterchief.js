import React from 'react'
import MetaTags from 'react-meta-tags';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Header, HeaderBox, Section, SectionText, HeaderTitle, Divider } from '../../components/Global/Global';
import { Opening, OpeningCard, OpeningHeader, OpeningBody, OpeningText, OpeningImg, ImgSection, ImgCard, Img } from '../../components/Global/Blog'
function masterchief() {
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
            <Opening>
                <OpeningCard>
                    <OpeningBody>
                        <OpeningHeader>Files used:</OpeningHeader>
                            <OpeningText>Bruh <FaExternalLinkAlt/></OpeningText>
                            <OpeningText>Bruh <FaExternalLinkAlt/></OpeningText>
                    </OpeningBody>
                    <OpeningImg style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}></OpeningImg>
                </OpeningCard>
            </Opening>
            <Divider/>
            <Section>
                <SectionText>This one I still have yet to make the visor. I'll update this later once I have the visor finished. Besides that point, if I were to recommend a helmet for someone to start, and didn't have a large printer, I'd say this one. Every part fits well on an Ender 3 Pro, and each part has connection holes that actually work good together. It was very satisfying putting together the helmet and actually seeing it come to life. The wiring for this was rather simple, so I don't think it'll need a reference page. It was just wires leading from batteries to four white LED lights (two on each side), with a button on the side next to the ear.</SectionText>
            </Section>
            <Divider/>
                <ImgSection><ImgCard><Img style={{backgroundImage: `url("/media/pages/about/header.jpg")`}}></Img></ImgCard></ImgSection>
            <Divider/>
            <Section>
                <SectionText>This one I still have yet to make the visor. I'll update this later once I have the visor finished. Besides that point, if I were to recommend a helmet for someone to start, and didn't have a large printer, I'd say this one. Every part fits well on an Ender 3 Pro, and each part has connection holes that actually work good together. It was very satisfying putting together the helmet and actually seeing it come to life. The wiring for this was rather simple, so I don't think it'll need a reference page. It was just wires leading from batteries to four white LED lights (two on each side), with a button on the side next to the ear.</SectionText>
            </Section>
            <Divider/>
        </>
    )
}

export default masterchief
