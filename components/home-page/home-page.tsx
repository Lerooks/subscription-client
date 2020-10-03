import React, { FormEvent, ReactElement } from 'react'
import SubscriptionForm from 'components/home-subscription-form'
import * as S from './home-page-styles'

interface Props {
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function Home({ handleFormSubmit }: Props): ReactElement {
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
          <SubscriptionForm handleSubmit={handleFormSubmit}></SubscriptionForm>
        </S.Content>
      </S.ContentWrapper>
      <S.BannerWrapper>
        <S.Banner src="/assets/images/pokemon/pikachu.png" alt="Pikachu" title="Pikachu"></S.Banner>
      </S.BannerWrapper>
    </S.Wrapper>
  )
}
