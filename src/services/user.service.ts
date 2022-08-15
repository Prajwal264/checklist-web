import { Writable, writable } from 'svelte/store';
import { IUser, userAPIService } from './api/user.api.service';

class UserService {

  user: Writable<IUser> = writable<IUser>();

  async setCurrentAuthenticatedUser() {
    const user = await userAPIService.me();
    if ('error' in user) {
      return;
    }
    this.user.set(user);
  }
};


export const userService = new UserService;