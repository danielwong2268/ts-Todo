export enum Status {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  CREATED = 'CREATED'
}

export interface Todo {
  status: Status;
  text: string;
  storyPoints: number;
}

interface TodoInformation {
  text: string;
  storyPoints: number;
  status?: Status;
}

export const todoFactory = ({ text, storyPoints, status = Status.CREATED }: TodoInformation): Todo => {
  return {
    status,
    text,
    storyPoints
  }
}