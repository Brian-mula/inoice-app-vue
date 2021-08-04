<template>
  <div class="home container">
    <!-- header-->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter By status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      filterMenu: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
  },
};
</script>
<style scoped>
.home {
  color: #fff;
}
.header {
  margin-bottom: 65px;
}
.header > .right,
.left {
  flex: 1;
}
.header > .right {
  justify-content: flex-end;
  align-items: center;
}
.header > .right > .button,
.filter {
  align-items: center;
}
.header > .right > .button,
.filter > span {
  font-size: 12px;
}
.header > .right > .filter {
  position: relative;
  margin-right: 40px;
  cursor: pointer;
}
.header > .right > .filter > span,
img {
  pointer-events: none;
}
.header > .right > .filter > img {
  margin-left: 12px;
  width: 9px;
  height: 5px;
}
.header > .right > .filter > .filter-menu {
  width: 120px;
  position: absolute;
  top: 25px;
  list-style: none;
  background-color: #1e2139;
}
.header > .right > .filter > .filter-menu > li {
  cursor: pointer;
  font-size: 12px;
  padding: 10px 20px;
}
.header > .right > .filter > .filter-menu > li:hover {
  color: #1e2139;
  background-color: #fff;
}
.header > .right > .button {
  padding: 8px 10px;
  background-color: #7c5dfa;
  border-radius: 40px;
}
.header > .right > .button > .inner-button {
  margin-right: 8px;
  border-radius: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.header > .right > .button > .inner-button > img {
  width: 10px;
  height: 10px;
}
</style>
