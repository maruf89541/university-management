import config from '../../../config'
import { User } from './user.model'
import { generateUserId } from './user.utils'
import { IUser } from './users.inerface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.defult_student_pass as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
