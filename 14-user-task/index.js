
import { Task } from './task.js';
import { User } from './user.js';

const createTask = new Task('Писать код');
const createUser = new User(createTask);
createUser.do();