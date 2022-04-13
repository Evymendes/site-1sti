import React from "react";

import * as S from "./styled";
import Header from "../Header";
import Button from "../Button";

export default function DigitalBackbones() {
  return(
    <S.DBContainer>
      <S.DBWrapper>
        <Header title="Our Services" />

        <S.DBAbout>
          <S.DBTitle>Digital Backbones</S.DBTitle>
          <S.DBDescription>The Foundation of Scalable Digital Platforms</S.DBDescription>
          <S.DBParagraph>Before embarking on a digital transformation, businesses often contend with complexities that stem from:</S.DBParagraph>

          <S.DBList>
            <S.DBListItem>Data that lives in siloed systems that do not communicate</S.DBListItem>
            <S.DBListItem>Teams that function alongside one another without effective collaboration</S.DBListItem>
            <S.DBListItem>Structural complexities that appear to threaten the possibility of truly digitising</S.DBListItem>
          </S.DBList>

          <S.DBParagraph>To overcome these complexities and achieve a successful digital transformation, businesses need a strong digital backbone.</S.DBParagraph>
          <S.DBSubtitle>What is a digital backbone?</S.DBSubtitle>
          <S.DBParagraph>A digital backbone is the foundation for operational excellence. It enables the unification of organizational silos, driving enhanced collaboration and innovation. Digital backbones are founded on shared processes, applications and data, allowing business to maximize the extent to which their data can be leveraged, and quickly adapt to changing landscapes. Digital backbones have quality, scalability and integrity sewn into their DNA, paving the way for businesses to develop future-proof digital platforms.</S.DBParagraph>
          <S.DBSubtitle>Companies with digital backbones are:</S.DBSubtitle>

          <S.DBAdvantages>
            <S.DBStatistic>
              <S.DBValue>300%</S.DBValue>
              <S.DBParagraph>more efficient in its <span>operational improvement</span></S.DBParagraph>
            </S.DBStatistic>
            <S.DBStatistic>
              <S.DBValue>150%</S.DBValue>
              <S.DBParagraph>innovation capability, budget and <span>cost of ownership of innovation</span></S.DBParagraph>
            </S.DBStatistic>
            <S.DBStatistic>
              <S.DBValue>3x</S.DBValue>
              <S.DBParagraph>more adaptable compared to <span>companies that do not have backbones</span></S.DBParagraph>
            </S.DBStatistic>
          </S.DBAdvantages>

          <S.DBPartnering>
            Partnering with 1STI on the path to digital transformation drives results from day 1 as we begin by exploring what's standing between your organization today, and the formation of your digital backbone.
            <S.DBPartneringBox>
              <Button>Download One Page</Button>
              <Button>Read Case Study</Button>
            </S.DBPartneringBox>
          </S.DBPartnering>
        </S.DBAbout>
      </S.DBWrapper>
    </S.DBContainer>
  );
}