import { userSchema } from '@/workers/db/schema/user';

export type User = typeof userSchema.$inferSelect;

export type UserInfo = {
  id: number;
  full_name: string;
};

export type PublicUserInfo = {
  id: number;
  full_name: string;
};
