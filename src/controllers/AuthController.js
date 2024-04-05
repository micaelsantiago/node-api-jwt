class AuthController {
  async register(req, res) {
    res.send('registration route');
  }

  async login(req, res) {
    res.send('login route');
  }
}

export default new AuthController();