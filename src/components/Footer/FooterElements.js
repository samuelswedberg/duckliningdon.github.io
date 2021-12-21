import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterSection = styled.section`
    margin-top: 1rem;
    padding: 1rem;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 90;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const FooterText = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 1rem;
    height: 100%;
`;

export const FooterLink = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color: #808080;
    }
    &:hover {
        color: #808080;
    }
`;

