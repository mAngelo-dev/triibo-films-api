import bcrypt from 'bcryptjs';

const passwordUtils = {
  async passwordHashing(passwordToHash: string): Promise<string> {
    return bcrypt.hash(passwordToHash, 12);
  },

  async passwordComparison(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default passwordUtils;