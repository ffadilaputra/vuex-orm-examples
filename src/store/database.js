import { Database } from '@vuex-orm/core'
import User from './models/User'
import users from './modules/users'
import Todo from './models/Todo'
import todos from './modules/todos'

const database = new Database()

database.register(User, users)
database.register(Todo, todos)

export default database
