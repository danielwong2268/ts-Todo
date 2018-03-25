import TodoStatus from './TodoStatus'
import Todo from './Todo'

interface TodoInformation {
  text: string;
  storyPoints: number;
  status?: TodoStatus;
}

const todoFactory = ({ text, storyPoints, status = TodoStatus.CREATED }: TodoInformation): Todo => {
  return {
    status,
    text,
    storyPoints
  }
}

export default todoFactory;