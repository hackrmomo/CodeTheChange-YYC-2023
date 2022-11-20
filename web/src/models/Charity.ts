import { ITag } from "./Tag"

export interface ICharity {
  id: string;
  name: string;
  handle: string;
  markdown: string;
  tags: ITag[];
}