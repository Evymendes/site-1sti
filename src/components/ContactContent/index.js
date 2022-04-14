import React from "react";

import BookCover from "../../images/DT-Livro-Capa-2.png";

import * as S from "./styled.js";

const Content = () => (
    <S.Container>
    <S.Title>Contact</S.Title>
    <S.UpText>
      <p>We train business, from the frontline to the executive, in the new business discipline of Deep Tech. We advise and guide business to make strong and powerful decisions on the principles of deep tech.</p>
      <p>Contact us to work with Deep Tech and amplify your organization : <a href="#">ola@1sti.com.br</a></p>
    </S.UpText>
    <S.LineBox>
      <S.Boxes>
        <h4>CAREERS</h4>
        <p>Our positions are for everyone. Explore our current open opportunities and join us!</p>
      </S.Boxes>
      <S.Boxes>
        <h4>BOOK</h4>
        <p>How to elevate, scale and amplify your business through the New 4Ps of platforms, purpose, people and planet.</p>
        <S.Image src={BookCover} alt="Book cover - 'Deep Tech and the amplified organization, by Simon Robinson, Igor Couto and Maria Moraes Robinson'"/>
      </S.Boxes>
      <S.Boxes>
        <h4>NEWSLETTER</h4>
        <p>Subscribe to our newsletter to be the first to hear the latest news about Deep Tech and receive updates, exclusive content, and more.</p>
        <S.NewsLetter type="email" placeholder="enter your email for updates        →" /> 
      </S.Boxes>
    </S.LineBox>
    <S.BlueLine></S.BlueLine>
  </S.Container>
);

export default Content;

