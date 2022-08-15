<script lang="ts">
  import SidebarFooter from "./SidebarFooter.svelte";
  import SidebarWorkspaceContainer from "./SidebarWorkspaceContainer.svelte";
</script>

<aside class="sidebar">
  <div class="veritical-panelcontainer">
    <div class="veritical-panel-background" />
    <div class="veritcal-panel-wrapper">
      <div class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- <div class="search-container" /> -->
          <SidebarWorkspaceContainer />
          <SidebarFooter />
        </div>
      </div>
    </div>
  </div>
</aside>

<style lang="scss">
  .sidebar {
    height: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 16;
    transform: translate3d(0px, 0px, 0px);
    .veritical-panelcontainer {
      height: 100%;
      position: relative;
      .veritical-panel-background {
        display: block;
        background: linear-gradient(
            0deg,
            rgb(249, 250, 250),
            rgb(249, 250, 250)
          ),
          linear-gradient(0deg, rgb(253, 233, 230), rgb(253, 233, 230));
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        opacity: 0.98;
      }
      .veritcal-panel-wrapper {
        height: 100%;
        display: flex;
        .sidebar-wrapper {
          box-shadow: rgb(0 0 0 / 6%) 0px 0px 0px 1px;
          position: relative;
          height: 100%;
          width: 260px;
          .sidebar-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            // .search-container {
            //   padding: 32px 20px 0px;
            //   transition: border-color 0.2s ease 0s;
            // }
          }
        }
      }
    }
  }
</style>
