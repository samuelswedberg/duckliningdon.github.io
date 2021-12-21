import React from 'react'
import { FooterSection, FooterText, FooterLink } from './FooterElements';

function Footer() {
    return (
        <FooterSection>
            <FooterText>© Samuel Swedberg 2021</FooterText>
            <FooterLink href='https://www.google.com'>samuel@samuelswedberg.com</FooterLink>
        </FooterSection>
    )
}

export default Footer
