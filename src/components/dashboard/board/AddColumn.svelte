<script lang="ts">
  import { onClickOutside } from "../../../helpers/click.helpers";
  import { executePromise } from "../../../helpers/toast.helpers";
  import { columnService } from "../../../services/column.service";

  export let boardId: string | null = null;

  const defaultFormData = {
    title: "",
    description: "",
  };

  interface FormData {
    title: string;
    description: string;
  }
  let formData: FormData = { ...defaultFormData };
  let showColumnCreationForm = false;

  const toggleShowCreationForm = () => {
    showColumnCreationForm = !showColumnCreationForm;
  };

  const handleClickOutside = () => {
    showColumnCreationForm = false;
    if (!formData.title) {
      showColumnCreationForm = false;
      return;
    }
    createColumn();
  };

  const createColumn = async () => {
    const createColumnPromise = columnService.addColumn({
      ...formData,
      boardId,
    });
    executePromise(createColumnPromise, {
      loading: "Creating Board",
      success: "Board created successfully",
    });
    await createColumnPromise;
    formData = { ...defaultFormData };
  };
</script>

<div class="add-column-form-container">
  {#if !showColumnCreationForm}
    <div class="form-handler" on:click={toggleShowCreationForm}>
      <img src="/assets/images/add-btn.svg" alt="add-btn" />
    </div>
  {:else}
    <div
      class="new-column-form-container"
      use:onClickOutside
      on:clickOutside={handleClickOutside}
    >
      <form class="inner-container">
        <textarea
          name="title"
          class="form-input-title"
          placeholder="New list"
          id="form-title"
          cols="30"
          rows="1"
          bind:value={formData.title}
        />
        <textarea
          name="description"
          class="form-input-description"
          placeholder="description"
          id="form-description"
          cols="30"
          rows="1"
          bind:value={formData.description}
        />
      </form>
    </div>
  {/if}
</div>

<style lang="scss">
  .add-column-form-container {
    height: 100%;
    visibility: visible;
    padding: 23px 10px;
    display: flex;
    flex-direction: column;
    flex: 1 0 0%;
    -webkit-box-flex: 1;
    height: 100%;
    .form-handler {
      height: 100%;
      cursor: pointer;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      border-radius: 6px;
      background-color: transparent;
      transition: background-color 0.2s ease 0s;
      min-width: 280px;
      width: 280px;
      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }
    .new-column-form-container {
      height: 100%;
      min-width: 280px;
      width: 280px;
      .inner-container {
        background: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 25%) 0px 2px 6px, rgb(0 0 0 / 25%) 0px 1px 2px;
        border-radius: 6px;
        position: relative;
        z-index: 2;
        padding: 22px 10px 10px;
        height: 100%;
        .form-input-title {
          width: 100%;
          resize: none;
          border: none;
          padding: 0px;
          outline: none;
          color: rgb(0, 0, 0);
          caret-color: rgb(35, 135, 251);
          background-color: transparent;
          font-family: Graphik, -apple-system, "Segoe UI", "Helvetica Neue",
            Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
          font-weight: 700;
          font-size: 2.8rem;
          line-height: 2.8rem;
          letter-spacing: -0.1rem;
          margin-bottom: 2px;
          overflow: hidden;
          overflow-wrap: break-word;
          height: 30px;
          &::placeholder {
            opacity: 0.3;
          }
        }
        .form-input-description {
          width: 100%;
          resize: none;
          border: none;
          padding: 0px;
          outline: none;
          color: rgb(0, 0, 0);
          caret-color: rgb(35, 135, 251);
          background-color: transparent;
          font-size: 1.4rem;
          line-height: 1.7rem;
          margin-bottom: 7px;
          overflow: hidden;
          overflow-wrap: break-word;
          height: 17px;
          &::placeholder {
            opacity: 0.3;
          }
        }
      }
    }
  }
</style>
