export interface ICharacterMap {
  [character: string]: string[]
}

export interface IFont {
  height: number
  characters: ICharacterMap
}
