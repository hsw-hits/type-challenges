type MyReadonly<T> = { readonly [name in keyof T]: T[name] }
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
