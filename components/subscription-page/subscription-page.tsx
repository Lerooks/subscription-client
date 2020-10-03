import React, { ReactElement } from 'react'
import { Subscription } from 'types/subscription'
import * as S from './subscription-page-styles'

interface Props {
  subscriptions: Subscription[]
}

export default function SubscriptionPage({ subscriptions }: Props): ReactElement {
  return (
    <S.Wrapper>
      <S.Table>
        <S.TableHead>
          <S.Row>
            <S.Head> ID </S.Head>
            <S.Head> Name </S.Head>
            <S.Head> CPF </S.Head>
            <S.Head> Phone </S.Head>
            <S.Head> Favorite Pokemon </S.Head>
            <S.Head> Note </S.Head>
          </S.Row>
        </S.TableHead>
        <S.TableBody>
          {subscriptions.map(subscription => (
            <S.Row key={subscription.id}>
              <S.Data> {subscription.id} </S.Data>
              <S.Data> {subscription.name} </S.Data>
              <S.Data> {subscription.cpf} </S.Data>
              <S.Data> {subscription.phone} </S.Data>
              <S.Data> {subscription.favoritePokemon} </S.Data>
              <S.Data> {subscription.note} </S.Data>
            </S.Row>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Wrapper>
  )
}
