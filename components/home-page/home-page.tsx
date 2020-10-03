import React, { FormEvent, ReactElement } from 'react'
import HomeSubscriptionForm from 'components/home-subscription-form'
import * as S from './home-page-styles'

export default function Home(): ReactElement {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Content>
          <S.Title> Aenean Mi Nibh, Autor Laoreet </S.Title>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae libero deserunt, aspernatur tenetur
            quibusdam a consequatur, minus adipisci non vel fuga officiis pariatur, id nesciunt. Odit distinctio eum
            ullam?
          </S.Text>
          <HomeSubscriptionForm></HomeSubscriptionForm>
        </S.Content>
      </S.ContentWrapper>
      <S.BannerWrapper>
        <S.Banner src="/assets/images/pokemon/pikachu.png" alt="Pikachu" title="Pikachu"></S.Banner>
      </S.BannerWrapper>
    </S.Wrapper>
  )
}
