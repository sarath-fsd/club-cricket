import { Request } from "express"
export interface IUserRequest extends Request {
  user: any // Need to map to User type
}