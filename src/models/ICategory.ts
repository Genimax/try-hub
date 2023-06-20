export enum Category {
  YESNO = "YES_NO",
  RUSSIANROULETTE = "RUSSIAN_ROULETTE",
}

export type ICategory = null | Category.YESNO | Category.RUSSIANROULETTE;
