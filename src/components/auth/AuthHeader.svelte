<header>
  <img src="./assets/images/logo-full.svg" alt="logo-full" />
  <div>
    <button class="signin-btn">Sign In</button>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100px;
    padding: 0px 30px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 1;
    .signin-btn {
      color: rgb(0, 0, 0);
      border: none;
      appearance: none;
      outline: none;
      background-color: rgb(255, 255, 255);
      margin: 0px;
      height: 42px;
      width: 100%;
      border-radius: 6px;
      transition: all 0.1s ease 0s;
      box-shadow: rgb(0 0 0 / 6%) 0px 0px 0px 1px;
      font-size: 1.6rem;
      line-height: 1.9rem;
      padding: 9px 12px 9px 13px;
      text-align: center;
      transform: translateY(-3px);
    }
  }
</style>
