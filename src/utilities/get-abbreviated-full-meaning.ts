import { UtcOffsets } from "./timezone"

export const getAbbreviatedFullMeaning = (getter: string) =>  UtcOffsets.find(item => item.abbreviation === getter)?.name;