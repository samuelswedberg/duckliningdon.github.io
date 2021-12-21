import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding-top: 3rem;
    place-items: baseline;
    column-gap: 1.5rem;
    row-gap: 3rem;
    width: 75%;
    @media screen and (max-width: 1068px) {
        width: auto;
    }
`;

export const Button = styled.section`
    background-color: rgb(250, 90, 90);
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    border-radius: 16px;
    font-size: 1.25rem;
    font-family: 'Raleway', sans-serif;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 10px 1px rgba(145, 50, 50, 0.5);
`;

export const Img = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
`;

export const BlogCard = styled.div`
    border-radius: 10px;
    box-shadow: 0px 2.5px 5px rgba(80, 78, 78, 0.5);
    text-align: center;
    width: 400px;
`;

export const TitleContent = styled.div`
    text-align: center;
    z-index: 20;
    width: 100%;
`;

export const HeaderThree = styled.h3`
    font-weight: 400;
    width: ${(props) => props.title ? '90%' : 'auto'};
    color: #000;
    padding: ${(props) => props.title ? '1rem 15px' : '0'};
    padding-bottom: ${(props) => props.title ? '0' : 'auto'};
    text-align: left;
    font-size: ${(props) => props.title ? '2rem' : '1.5rem'};
`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    border: 0;
    background: #000;
    margin-left: 1rem;
    margin-top: 0;
`;

export const Intro = styled.div`
    width: 170px;
    margin: 0 auto;
    color: #dce3e7;
    font-family: 'Droid Serif', serif;
    font-size: 13px;
    font-style: italic;
    line-height: 18px;
`;


export const CardInfo = styled.p`
    width: 100%;
    padding: 1rem 15px;
    padding-top: 0;
    padding-bottom: 0;
    color: #808080;
    font-style: 2rem;
    line-height: 24px;
    text-align: left;
`;

export const TagList = styled.ul`
    display: block;
    padding: 10px;
    padding-left: 0;
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 0;
`;

export const Tag = styled.li`
    color: #808080;
    padding-left: 0;
    font-size: 1rem;
    list-style-type: none;
`;

export const UtilityList = styled.div`
    padding: 1rem 15px;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-bottom: 0;
`;

export const InternalLinks = styled(Link)`
    color: #000;
    font-size: 1.25rem;
    border-radius: 15px;
    transition: 0.5s;
    bottom: 0;
    right: 0;
    position: absolute;
    margin: 1rem;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        color: #000;
    }
`;

export const ExternalLinks = styled.a`
    color: #fff;
    font-size: 1.6rem;
    padding:1rem 1.5rem;
    background: #fa5a5a;
    border-radius: 15px;
    transition: 0.5s;
    &:hover{
        background: #d60707;
        color: #fff
    }
`;
