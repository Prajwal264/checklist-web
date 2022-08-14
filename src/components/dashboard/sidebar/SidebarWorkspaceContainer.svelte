<script lang="ts">
  import SidebarBoardList from "./SidebarBoardList.svelte";
</script>

<div class="sidebar-workspace-container">
  <div class="workspace-container-inner">
    <div class="workspace-profile-container">
      <a href="/app">
        <p>P</p>
      </a>
    </div>
    <SidebarBoardList />
  </div>
</div>

<style lang="scss">
  .sidebar-workspace-container {
    flex: 1 1 0%;
    overflow: auto;
    padding: 8px 20px 15px;
    .workspace-container-inner {
      padding: 17px 0px;
      border-bottom: 1px solid transparent;
      .workspace-profile-container {
        padding: 6px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        margin-bottom: 8px;
        a {
          color: rgb(0, 0, 0);
          text-decoration: none;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease 0s;
          border-radius: 50%;
          background-color: rgb(255, 255, 255);
          height: 44px;
          width: 44px;
          p {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.25);
            line-height: 1;
            text-transform: uppercase;
            width: 100%;
            height: 100%;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            flex-shrink: 0;
            border-radius: 50%;
            transition: font-size 0.2s ease 0s;
            box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px 1px;
          }
        }
      }
    }
  }
</style>
