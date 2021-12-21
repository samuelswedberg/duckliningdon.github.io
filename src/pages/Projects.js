import React from 'react'
import MetaTags from 'react-meta-tags';
import { AiFillTag } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Header, HeaderBox, Section, HeaderTitle } from '../components/Global/Global';
import { GridContainer, BlogCard, Img, CardInfo, Hr, TitleContent, HeaderThree, TagList, UtilityList, ExternalLinks, InternalLinks, Tag } from '../components/ProjectElements';
import { projects } from '../constants/constants';

function Projects() {
    return (
      <>
        <MetaTags>
            <title>Samuel Swedberg | Projects</title> 
        </MetaTags>
        <Section>
            <Header style={{backgroundImage: `url("/media/pages/projects/3dprinting/header.jpg")`}}>
                <HeaderBox><HeaderTitle>PROJECTS</HeaderTitle></HeaderBox>
            </Header>
        </Section>
        <Section>
            <GridContainer>
                {projects.map((p, i) => { 
                    return ( 
                        <BlogCard key={i}>
                        <Img src={p.image} />
                            <TitleContent>
                            <HeaderThree title>{p.title}</HeaderThree>
                            <Hr />
                            </TitleContent>
                            <CardInfo className="card-info">{p.description}</CardInfo>
                            <UtilityList>
                            <TagList><AiFillTag/>
                                {p.tags.map((t, i) => {
                                    return <Tag key={i}>{t}</Tag>;
                                })}
                            </TagList>
                            <InternalLinks to={p.path} activeStyle>Read More <BsFillArrowRightCircleFill/></InternalLinks>
                            </UtilityList>
                        </BlogCard>
                    );
                })}
            </GridContainer>
        </Section>
      </>
    )
}

export default Projects
