<script lang="ts">
  import toast from "svelte-french-toast";
  import { navigate } from "svelte-routing";
  import { executePromise } from "../../helpers/toast.helpers";
  import authAPIService from "../../services/api/auth.api.service";
  import Cookies from "js-cookie";
  interface FormData {
    email: string;
    password: string;
  }
  let formData: FormData = {
    email: "",
    password: "",
  };

  async function login() {
    const loginPromise = authAPIService.login(formData);
    executePromise(loginPromise, {
      loading: "Loggin In",
      success: "Login successful",
    });
    const response = await loginPromise;
    if ("error" in response) {
      toast.error(response.error);
      return;
    }
    Cookies.set("accessToken", response.accessToken);
    navigate("/app");
  }
</script>

<div class="login-view-container">
  <div class="login-form-wrapper">
    <div class="fadein-container">
      <div class="view-container">
        <h1>Sign In</h1>
        <p class="signin-note">Welcome back to Columns.</p>
        <div class="form-wrapper">
          <form on:submit|preventDefault={login}>
            <div class="input-container">
              <input
                name="email"
                type="email"
                bind:value={formData.email}
                placeholder="Enter your email..."
              />
            </div>
            <div class="input-container">
              <input
                name="password"
                type="password"
                placeholder="Password"
                bind:value={formData.password}
              />
            </div>
            <button class="signin-cta">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .login-view-container {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    mix-blend-mode: normal;
    opacity: 0.98;
    min-height: 100%;
    .login-form-wrapper {
      width: 100%;
      padding: 70px 50px;
      margin: 25px;
      display: flex;
      flex-direction: column;
      .fadein-container {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        .view-container {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex: 1 1 0%;
          -webkit-box-pack: center;
          justify-content: center;
          h1 {
            letter-spacing: -0.04em;
            margin: 0px 0px 10px;
            font-size: 6.2rem;
            line-height: 5.6rem;
          }
          .signin-note {
            font-size: 1.6rem;
            line-height: 1.9rem;
            color: rgb(135, 135, 135);
            margin-top: 5px;
          }
          .form-wrapper {
            padding-top: 32px;
            max-width: 280px;
            width: 100%;
            margin: 0px auto;
            display: flex;
            flex-direction: column;
            form {
              text-align: center;
              height: 100%;
              display: flex;
              flex-direction: column;
              flex: 1 1 0%;
              -webkit-box-pack: center;
              justify-content: center;
              .input-container {
                margin-bottom: 20px;
                input {
                  font-size: 1.6rem;
                  line-height: 1.9rem;
                  letter-spacing: -0.5px;
                  border: none;
                  width: 100%;
                  padding: 0px 10px;
                  height: 44px;
                  border-radius: 6px;
                  color: rgb(0, 0, 0);
                  background-color: rgb(255, 255, 255);
                  box-shadow: rgb(218 218 218) 0px 0px 0px 1px;
                  caret-color: rgb(35, 135, 251);
                  transition: box-shadow 0.2s ease 0s;
                  outline: none;
                }
              }
              .signin-cta {
                font-size: 1.6rem;
                line-height: 2rem;
                border: none;
                appearance: none;
                outline: none;
                padding: 0px 36px;
                margin: 0px;
                height: 42px;
                width: 100%;
                border-radius: 6px;
                transition: all 0.1s ease 0s;
                box-shadow: rgb(0 0 0 / 6%) 0px 0px 0px 1px;
                font-weight: 700;
                color: rgb(255, 255, 255);
                background-color: rgb(35, 135, 251);
                margin-bottom: 20px;
              }
            }
          }
        }
      }
    }
  }
</style>
