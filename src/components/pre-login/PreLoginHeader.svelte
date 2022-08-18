<header>
  <div class="header-inner-container">
    <div class="header-logo">
      <a href=".">
        <img src="/assets/images/logo.svg" alt="logo" />
        Checklist
      </a>
    </div>
    <ul class="nav-items">
      <li class="single-nav-item">
        <a href="signin">Sign In</a>
      </li>
      <li class="single-nav-item">
        <a href="signup">
          <button>Sign Up</button>
        </a>
      </li>
    </ul>
  </div>
</header>

<style lang="scss">
  header {
    padding: 52px 0px 108px;
    .header-inner-container {
      padding: 0px 40px;
      max-width: 1031px;
      margin: 0px auto;
      transition: padding 0.1s ease 0s;
      display: flex;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      justify-content: space-between;
      align-items: flex-start;
      .header-logo {
        font-size: 3.4rem;
        line-height: 4.1rem;
        letter-spacing: -0.05em;
        height: 41px;
        white-space: nowrap;
        margin-right: 30px;
        a {
          color: rgb(0, 0, 0);
          text-decoration: none;
          display: flex;
          img {
            margin-right: 8px;
          }
        }
      }
      .nav-items {
        list-style-type: none;
        margin: 15px 0px 0px;
        padding: 0px;
        display: flex;
        flex-wrap: nowrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        align-items: flex-start;
        .single-nav-item {
          margin: 0px 0px 0px 29px;
          padding: 0px;
          font-size: 2.2rem;
          line-height: 2.6rem;
          white-space: nowrap;
          a {
            color: rgb(0, 0, 0);
            text-decoration: none;
          }
          button {
            color: rgb(0, 0, 0);
            border: none;
            appearance: none;
            outline: none;
            background-color: rgb(255, 255, 255);
            margin: 0px;
            width: 100%;
            border-radius: 6px;
            transition: all 0.1s ease 0s;
            box-shadow: rgb(0 0 0 / 6%) 0px 0px 0px 1px;
            padding: 9px 22px 9px 20px;
            font-size: 1.8rem;
            line-height: 2rem;
            height: auto;
            transform: translateY(-6px);
            cursor: pointer;
            &:hover {
              box-shadow: rgb(210 227 253) 0px 0px 0px 2px;
            }
          }
        }
      }
    }
  }
</style>
