<script lang="ts">
  import router from "page";
  import toast from "svelte-french-toast";
  import { executePromise } from "../../helpers/toast.helpers";
  import authService from "../../services/api/auth.api.service";
  interface FormData {
    username: string;
    email: string;
    password: string;
  }

  let formData: FormData = {
    username: "",
    email: "",
    password: "",
  };

  async function register() {
    const registerPromise = authService.register(formData);
    executePromise(registerPromise, {
      loading: "Registering User",
      success: "Registeration successful",
    });
    const response = await registerPromise;
    if ("error" in response) {
      toast.error(response.error);
      return;
    }
    router.redirect("/signin");
  }
</script>

<div class="registration-form-container">
  <div class="wrapper">
    <div class="fade-in-container">
      <div class="form-container">
        <h1>Hi there!</h1>
        <p class="registration-form-label">Please create your account.</p>
        <div class="form-wrapper">
          <form on:submit|preventDefault={register}>
            <div class="input-container">
              <input
                name="name"
                type="text"
                placeholder="First and last name"
                autocomplete="off"
                bind:value={formData.username}
              />
            </div>
            <div class="input-container">
              <input
                name="email"
                type="email"
                placeholder="Enter your email..."
                bind:value={formData.email}
              />
            </div>
            <div class="input-container">
              <input
                name="password"
                type="password"
                placeholder="Password"
                bind:value={formData.password}
              />
              <p class="signup-note">
                Use 8 or more characters and don’t forget numbers & symbols.
              </p>
            </div>
            <button type="submit" class="primary-btn">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .registration-form-container {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    mix-blend-mode: normal;
    opacity: 0.98;
    min-height: 100%;
    .wrapper {
      width: 100%;
      padding: 70px 50px;
      margin: 25px;
      display: flex;
      flex-direction: column;
      .fade-in-container {
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        height: 100%;
        transition: opacity 0.15s ease-in 0s;
        opacity: 1;
        .form-container {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex: 1 1 0%;
          -webkit-box-pack: center;
          justify-content: center;
          h1 {
            font-family: Graphik, -apple-system, "Segoe UI", "Helvetica Neue",
              Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
            font-weight: 700;
            color: rgb(0, 0, 0);
            margin: 0px;
            word-break: break-word;
            letter-spacing: -0.04em;
            font-size: 6.2rem;
            line-height: 5.6rem;
            margin: 0px -20px 10px;
          }
          .registration-form-label {
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
                border: none;
              }
              .signup-note {
                font-size: 1.4rem;
                color: rgb(135, 135, 135);
                margin-top: 10px;
              }
            }
            .primary-btn {
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
              &:hover {
                opacity: 0.85;
              }
            }
            // hr {
            //   height: 1px;
            //   border: none;
            //   background-color: rgba(0, 0, 0, 0.06);
            //   margin: 30px 0px;
            // }
          }
        }
      }
    }
  }
</style>
