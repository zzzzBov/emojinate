import * as fonts from './fonts'

const font = fonts.emojinate

export const emojinate = (emoji: string, space: string, text: string): string => {
  const letters =
    text
      .split('')
      .map(c => font.characters[c])
      .filter(c => c)

  const lines = []

  for (let i = 0; i < font.height; i++) {
    lines[i] =
      letters
        .map(c => 
          c[i]
            .split('')
            .map(
              x => x === 'x'
                ? emoji
                : space
            )
            .join('')
        )
        .join('')
  }

  return lines.join('\n')
}
