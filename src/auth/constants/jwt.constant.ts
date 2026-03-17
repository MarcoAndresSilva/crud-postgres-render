console.log(process.env.JWT_SECRET);
export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'default_secret_key',
};
