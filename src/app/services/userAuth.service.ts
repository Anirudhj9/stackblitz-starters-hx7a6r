export class UserAuth {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      });
    });
    return promise;
  }
  setAuthentication() {
    this.loggedIn = true;
  }
  unsetAuthentication() {
    this.loggedIn = false;
  }
}
