import React, { InputHTMLAttributes, forwardRef } from 'react'
import InputMask from 'react-input-mask'
import * as S from './text-input-styles'

interface Props extends InputHTMLAttributes<HTMLElement> {
  label?: string
  helper?: string
  error?: boolean

  /**
   * Mask string. Format characters are:
   * * `9`: `0-9`
   * * `a`: `A-Z, a-z`
   * * `\*`: `A-Z, a-z, 0-9`
   *
   * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
   * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
   */
  mask?: string | Array<string | RegExp>
}

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, helper, mask } = props

  return (
    <S.Wrapper>
      <S.Label> {label} </S.Label>
      {mask ? (
        <InputMask mask={mask} ref={ref} {...props}>
          {(inputProps: any) => <S.Input {...inputProps}></S.Input>}
        </InputMask>
      ) : (
        <S.Input {...props} ref={ref}></S.Input>
      )}
      <S.Helper> {helper} </S.Helper>
    </S.Wrapper>
  )
})

export default TextInput
