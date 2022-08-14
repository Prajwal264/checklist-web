<button class="sidebar-addboard-button">
  <img src="assets/images/add-btn.svg" alt="add-btn" />
  <span>Add board</span>
</button>

<style lang="scss">
  .sidebar-addboard-button {
    border: none;
    appearance: none;
    outline: none;
    background: none;
    min-height: 36px;
    width: 100%;
    position: relative;
    border-radius: 6px;
    transition: all 0.1s ease 0s;
    font-size: 1.6rem;
    line-height: 2rem;
    color: rgba(172, 173, 174, 0.8);
    padding: 8px 10px 8px 31px;
    text-align: left;
    cursor: pointer;
    &:hover {
      span {
        color: rgb(0, 0, 0);
      }
    }
    img {
      position: absolute;
      left: 10px;
      top: 12px;
      display: flex;
    }
    span {
      font-size: 1.6rem;
      line-height: 2rem;
      color: rgba(172, 173, 174, 0.8);
      text-align: left;
    }
  }
</style>
