<template>
  <vsm-menu :menu="menu" class="links">
    <template #default="{ item }">
      <div style="width: 300px; padding: 30px">
        <ul v-for="link in item.links" :key="link.name" class="nav-list">
          <li>
            <router-link :to="link.href" class="nav-list-item"
              ><i
                :class="link.icon"
                class="nav-icon"
                :style="{ 'font-size': link.font }"
              ></i
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </template>
  </vsm-menu>
</template>

<script>
export default {
  name: "NavLinks",
  data() {
    return {
      menu: [
        {
          title: "Product",
          dropdown: "product",
          links: [
            {
              name: "For Organizations",
              href: "/product/organization",
              icon: "bi bi-building",
              font: "var(--fs-h-m)",
            },
            {
              name: "For Employees",
              href: "/product/employee",
              icon: "bi bi-person",
              font: "var(--fs-h-m)",
            },
          ],
        },
        { title: "Contact", attributes: { href: "/contact" } },
      ],
    };
  },
};
</script>

<style scoped>
.nav-list {
  list-style: none;
  text-align: left;
}
.nav-list-item {
  text-decoration: none;
  font-size: var(--fs-t-m-l);
  font-weight: 500;
  color: var(--link-color);
}
.nav-list-item:hover {
  color: var(--gray-secondary);
}
.nav-icon {
  padding-right: 5%;
}
.vsm-menu {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
.vsm-nav {
  margin: 0 7px;
}
.vsm-link-container {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}
.links {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  align-self: center;
  justify-content: flex-end;
  width: 100%;
}
</style>
