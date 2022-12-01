<template>
  <div>
    <v-navigation-drawer v-model="drawer" app  >
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.value"
                    :href="item.src"
                >{{item.title}}</v-list-item>
            </v-list>
        </v-navigation-drawer>
    <v-app-bar app
        color="green"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Eunwk</v-app-bar-title>

      </v-app-bar>
      <v-main>

        <v-container>
            <router-view></router-view>
        </v-container>
      </v-main>
  </div>
</template>

<script>
export default {
    name: 'SubPageLayout',
    data: () => ({
      drawer: false,
      items: [
        {
          title: 'home',
          value: 'home',
          src: '/',
        },
        {
          title: 'login',
          value: 'login',
          src: '/login',
        },
        {
          title: '서브페이지1',
          value: 'sub1',
          src: '/sub1',
        },
        {
          title: '서브페이지2',
          value: 'sub2',
          src: '/sub2',
        },
      ],
    }),
};
</script>
