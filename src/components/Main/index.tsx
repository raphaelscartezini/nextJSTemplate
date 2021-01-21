import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'typescript, ReactJS, NextJS'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" />
  </S.Wrapper>
)

export default Main
