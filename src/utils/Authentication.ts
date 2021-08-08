import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
  public static hash = (password: string) : Promise<string> => {
    return bcrypt.hash(password, 10)
  }

  public static compare = async (password: string, hashedPassword: string): Promise<boolean> => {
    let result = await bcrypt.compare(password, hashedPassword)

    return result
  }

  public static generateToken = (id: number, username: string, password: string): string => {
    
    let key: string = process.env.JWT_TOKEN || 'secret'
    
    let token: string = jwt.sign({ id, username, password }, key)

    return token
  }
}

export default Authentication