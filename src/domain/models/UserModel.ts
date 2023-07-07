export type User = {
  userUuid: string;
  email: string;
  username: string;
  phone: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  status: number;
  emailVerifiedAt: string;
  phoneVerifiedAt: string;
  createdAt: string;
  updatedAt: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: UserAuthority[];
  credentialsNonExpired: boolean;
};

export type UserAuthority = {
  authority: string;
};
