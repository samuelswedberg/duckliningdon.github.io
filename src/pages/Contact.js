import React from 'react'
import MetaTags from 'react-meta-tags';
import { GridContainer, Header, HeaderTitle, HeaderBox, Section, BlogCard, Img, CardInfo, Hr, TitleContent, HeaderThree, TagList, UtilityList, ExternalLinks, InternalLinks, Tag } from '../components/Global/Global';

function Contact() {
    return (
        <>
            <MetaTags>
                <title>Samuel Swedberg | Contact</title> 
            </MetaTags>
            <Section>
                <Header style={{backgroundImage: `url("/media/pages/projects/references/header.JPG")`}}>
                    <HeaderBox><HeaderTitle>CONTACT</HeaderTitle></HeaderBox>
                </Header>
            </Section>
            <Section>
            </Section>
        </>
    )
}

export default Contact
