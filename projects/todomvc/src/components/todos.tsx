import { type FunctionComponent } from 'preact'

import { TodoItem } from './item'
import { type ListOfTodos, type TodoId, type TodoIdCompleted } from '../types'

interface TodosProps {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleTodo: ({ id, completed }: TodoIdCompleted) => void
}

export const Todos: FunctionComponent<TodosProps> = ({ todos, onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={() => { onRemoveTodo({ id: todo.id }) }}
          onToggleTodo={() => { onToggleTodo({ id: todo.id, completed: !todo.completed }) }}
        />
      ))}
    </ul>
  )
}
