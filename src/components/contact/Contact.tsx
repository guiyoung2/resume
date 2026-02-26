"use client";
import { contactContent } from "@/app/data/contact";
import {
  ContactSection,
  ContactContainer,
  ContactCard,
  SectionLabel,
  ContactTitle,
  ContactDescription,
  ContactList,
  ContactItem,
  ContactLink,
  ContactInfo,
  ContactLabel,
  ContactValue,
  ArrowIcon,
} from "./Contact.styled";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactCard>
          <SectionLabel>Contact</SectionLabel>
          <ContactTitle>{contactContent.title}</ContactTitle>
          <ContactDescription>{contactContent.description}</ContactDescription>

          <ContactList>
            {contactContent.links.map((link) => (
              <ContactItem key={link.id}>
                {link.href ? (
                  <ContactLink
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                    aria-label={`${link.label} 링크`}
                  >
                    <span>
                      <ContactLabel>{link.label}</ContactLabel>
                      <ContactValue>{link.value}</ContactValue>
                    </span>
                    <ArrowIcon>↗</ArrowIcon>
                  </ContactLink>
                ) : (
                  <ContactInfo>
                    <span>
                      <ContactLabel>{link.label}</ContactLabel>
                      <ContactValue>{link.value}</ContactValue>
                    </span>
                  </ContactInfo>
                )}
              </ContactItem>
            ))}
          </ContactList>
        </ContactCard>
      </ContactContainer>
    </ContactSection>
  );
}
