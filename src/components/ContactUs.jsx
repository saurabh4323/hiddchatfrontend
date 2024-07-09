import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Navbar />
      <AboutSection>
        <h2>About Us</h2>
        <p>
          Welcome to Hiddchat.in, your go-to platform for seamless and secure
          communication. At Hiddchat.in, we offer unique features such as
          anonymous chatting with avatars instead of profile photos. Connect
          with others, become friends, and if you vibe, explore many more
          exciting possibilities.
        </p>
      </AboutSection>
      <ContactSection>
        <h2>Contact Us</h2>
        <p>
          Have any questions or want to contribute to our project? We would love
          to hear from you! Reach out to us at{" "}
          <a href="mailto:hiddchathelpdesk@gmail.com">
            hiddchathelpdesk@gmail.com
          </a>
          . Whether you have feedback, suggestions, or just want to say hello,
          we're here to listen.
        </p>
        <p>Location: Noida</p>
      </ContactSection>
      <DeveloperNote>
        <h3>For Developers</h3>
        <p>
          Are you passionate about open-source development? Join our community
          of developers who are making an impact. Contributing to Hiddchat.in is
          a great way to showcase your skills and collaborate with like-minded
          individuals. Send us an email to get started. Special thanks to the
          developers for their continuous support and contributions.
        </p>
      </DeveloperNote>
    </ContactUsContainer>
  );
};

export default ContactUs;

const ContactUsContainer = styled.div`
  padding: 2rem;

  color: white;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const SectionBox = styled.div`
  max-width: 800px;

  width: 100%;
  padding: 2rem;
  border: 1px solid red;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: #222;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutSection = styled(SectionBox)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1.6;
  }
`;

const ContactSection = styled(SectionBox)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1.6;
  }

  a {
    color: #61dafb;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
`;

const DeveloperNote = styled(SectionBox)`
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #61dafb;
  }

  p {
    font-size: 1.2rem;
    color: #ccc;
    line-height: 1.6;
  }
`;
