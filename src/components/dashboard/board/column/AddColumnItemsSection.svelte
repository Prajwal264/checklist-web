<script lang="ts">
  import AddCardForm from "./AddCardForm.svelte";
  import AddHeaderForm from "./AddHeaderForm.svelte";

  enum IAddColumnItemState {
    DEFAULT = "DEFAULT",
    ADD_CARD = "ADD_CARD",
    ADD_HEADING = "ADD_HEADING",
  }

  let addColumnItemState = IAddColumnItemState.DEFAULT;

  function resetItemStateToDefault() {
    addColumnItemState = IAddColumnItemState.DEFAULT;
  }
</script>

<section>
  {#if addColumnItemState === IAddColumnItemState.DEFAULT}
    <div class="add-column-buttons">
      <div
        class="add-card-cta"
        on:click={() => (addColumnItemState = IAddColumnItemState.ADD_CARD)}
      >
        <div class="icon-container">
          <img src="/assets/images/add-btn.svg" alt="add-card-btn" />
        </div>
        <span>Add card</span>
      </div>
      <div
        class="add-heading-cta"
        on:click={() => (addColumnItemState = IAddColumnItemState.ADD_HEADING)}
      >
        <img src="/assets/images/add-heading-btn.svg" alt="add-heading-btn" />
      </div>
    </div>
  {:else if addColumnItemState === IAddColumnItemState.ADD_CARD}
    <AddCardForm on:clickOutside={resetItemStateToDefault} />
  {:else if addColumnItemState === IAddColumnItemState.ADD_HEADING}
    <AddHeaderForm on:clickOutside={resetItemStateToDefault} />
  {/if}
</section>

<style lang="scss">
  section {
    .add-column-buttons {
      display: flex;
      .add-card-cta {
        border: none;
        appearance: none;
        outline: none;
        background: none;
        font-size: 1.6rem;
        line-height: 2rem;
        color: rgba(172, 173, 174, 0.8);
        padding: 8px 10px 8px 31px;
        text-align: left;
        min-height: 36px;
        width: 100%;
        position: relative;
        border-radius: 6px;
        transition: all 0.1s ease 0s;
        cursor: pointer;
        &:hover {
          color: rgb(0, 0, 0);
          background-color: rgb(247, 247, 247);
        }
        .icon-container {
          position: absolute;
          left: 10px;
          top: 12px;
          display: flex;
        }
      }
      .add-heading-cta {
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        box-shadow: transparent 0px 0px 0px 1px;
        border-radius: 4px;
        background-color: transparent;
        transition: background-color 0.1s ease 0s;
        flex-shrink: 0;
        width: 40px;
        height: 100%;
        min-height: 36px;
        &:hover {
          background-color: rgb(247, 247, 247);
        }
      }
    }
  }
</style>
