import { css } from 'styled-components'
export const media = {
   handheld: (...args) => css`
      @media (max-width: 420px) {
         ${ css(...args) }
      }
   `,
   tablet: (...args) => css`
      @media (max-width: 768px) {
         ${ css(...args) }
      }
   `,
   desktop: (...args) => css`
      @media (min-width: 769px) {
         ${ css(...args) }
      }
   `,
   portrait: (...args) => css`
      @media (orientation:portrait) {
         ${ css(...args) }
      }
   `

}