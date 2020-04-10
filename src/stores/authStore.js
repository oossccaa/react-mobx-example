import { observable, action } from 'mobx';

class AuthStore{

  @observable state = {
    username: '',
    password: '',
    token: ''
  }

  @action login() {
    
  }
}

export default new AuthStore();