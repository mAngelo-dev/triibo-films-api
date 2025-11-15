import bcrypt from 'bcryptjs';

const passwordUtils = {
  passwordHashing: async (passwordToHash: string): Promise<string> => {
    return bcrypt.hash(passwordToHash, 12);
  },

  passwordComparison: async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
  }
}

export default passwordUtils;