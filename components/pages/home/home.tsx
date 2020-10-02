import React, { FormEvent, ReactElement } from 'react'
import TextInput from 'components/common/text-input'
import Button from 'components/common/button'
import * as S from './home-styles'

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function Home({ handleSubmit }: Props): ReactElement {
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
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.InputGroup>
                <TextInput label="Name" name="name"></TextInput>
              </S.InputGroup>
              <S.InputGroup>
                <TextInput label="CPF" name="cpf"></TextInput>
              </S.InputGroup>
              <S.InputGroup>
                <TextInput label="Phone" name="phone"></TextInput>
              </S.InputGroup>
              <S.InputGroup>
                <TextInput label="E-mail" name="email"></TextInput>
              </S.InputGroup>
              <S.InputGroup>
                <TextInput label="Which is your favorite pokemon?" name="favoritePokemon"></TextInput>
              </S.InputGroup>
              <S.InputGroup>
                <TextInput label="Additional info" name="note"></TextInput>
              </S.InputGroup>
            </S.FormGroup>
            <S.FormActions>
              <Button type="submit"> Submit </Button>
            </S.FormActions>
          </S.Form>
        </S.Content>
      </S.ContentWrapper>
      <S.BannerWrapper>
        <S.Banner src="/assets/images/pokemon/pikachu.png" alt="Pikachu" title="Pikachu"></S.Banner>
      </S.BannerWrapper>
    </S.Wrapper>
  )
}
