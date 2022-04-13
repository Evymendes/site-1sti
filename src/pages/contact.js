import React from "react";

import styledComponents from "styled-components";
import BookCover from "../images/DT-Livro-Capa-2.png";

import Layout from "../components/Layout";
import Seo from "../components/seo";

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-color: #0B1617;
`
const Title = styledComponents.h1`
  font-size: 4rem;
  font-family: "GoshaSans-Bold";
  margin: 6rem 0rem 5rem;
  padding: 0  0 0 4rem;
`
const UpText = styledComponents.div`
  font-size: 1.75rem;
  line-height: 1.2;
  padding: 0 0 0 12rem;
  margin: 0 0 6rem;

  p {
    font-family: "CabinetGrotesk-Extralight";
    width: 42.063rem;
  }
`
const LineBox = styledComponents.section`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  padding: 0 0 2rem 9rem;
  width: 100%;
  justify-content: space-evenly;
`
const Boxes = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 19rem;

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-family: "CabinetGrotesk-Extrabold";
    letter-spacing: 0.125rem;
  }
  p {
    font-size: 1.25rem;
    font-family: "CabinetGrotesk-Extralight";
    line-height: 1.5;
  }
`
const NewsLetter = styledComponents.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-family: "CabinetGrotesk-Extralight";

  :placeholder-shown {
    color: #FFF;
    font-family: "CabinetGrotesk-Extralight";
  }
`
const Image = styledComponents.img`

`
const BlueLine = styledComponents.div`
  width: 90%;
  height: 0.05rem;
  background-color: #00C8DBCC;
  margin: 0 auto;
`

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Container>
    <Title>Contact</Title>
    <UpText>
      <p>We train business, from the frontline to the executive, in the new business discipline of Deep Tech. We advise and guide business to make strong and powerful decisions on the principles of deep tech.</p>
      <p>Contact us to work with Deep Tech and amplify your organization : <a href="#">ola@1sti.com.br</a></p>
    </UpText>
    <LineBox>
      <Boxes>
        <h4>CAREERS</h4>
        <p>Our positions are for everyone. Explore our current open opportunities and join us!</p>
      </Boxes>
      <Boxes>
        <h4>BOOK</h4>
        <p>How to elevate, scale and amplify your business through the New 4Ps of platforms, purpose, people and planet.</p>
        <Image src={BookCover} alt="Book cover - 'Deep Tech and the amplified organization, by Simon Robinson, Igor Couto and Maria Moraes Robinson'"/>
      </Boxes>
      <Boxes>
        <h4>NEWSLETTER</h4>
        <p>Subscribe to our newsletter to be the first to hear the latest news about Deep Tech and receive updates, exclusive content, and more.</p>
        <NewsLetter type="email" placeholder="enter your email for updates                           →" /> 
      </Boxes>
    </LineBox>
    <BlueLine></BlueLine>
  </Container>
  </Layout>
  
);

export default Contact
