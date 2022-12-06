<template>
  <div>
    <v-navigation-drawer v-model="drawer" app  disable-resize-watcher>
      <v-list>
          <v-list-item
              v-for="item in items"
              :key="item.value"
              :href="item.src"
          >{{item.title}}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app
      flat
      color="primary"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#ffffff"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <router-link to="/" class="app-logo">
          <v-icon color="#ffffff">mdi-cloud-braces</v-icon>
          Eunwk
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-row justify="end">
        <v-text-field
            v-model="searchValue"
            placeholder="Search"
            solo
            clearable
            hide-details
            style="max-width: 200px"
            append-icon="mdi-magnify"
            clear-icon="mdi-close-circle"
            dense
            rounded
            height="24px"
            @click:append="onSearch"
        ></v-text-field>
        <v-btn text color="#ffffff" to="/login">Login</v-btn>
      </v-row>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          dark
          slider-color="yellow"
          show-arrows
          @change="onChangeTabs"
        >
          <v-tab
            v-for="item in tabItems"
            :key="item.value"
          >
            {{ item.title }}
          </v-tab>
          <!-- <v-menu
            v-if="more.length"
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                more
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>

            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>
          </v-menu> -->
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in tabItems"
          :key="item.value"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
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
      searchValue: '',
      items: [
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
      tab: null,
      tabItems: [
          {
            title: '카테고리 A',
            value: 'menu-A',
          },
          {
            title: '카테고리 B',
            value: 'menu-B',
          },
          {
            title: '카테고리 C',
            value: 'menu-C',
          },
          {
            title: '카테고리 D',
            value: 'menu-D',
          },
          {
            title: '카테고리 E',
            value: 'menu-E',
          },
          {
            title: '카테고리 F',
            value: 'menu-F',
          },
          {
            title: '카테고리 G',
            value: 'menu-G',
          },
          {
            title: '카테고리 H',
            value: 'menu-H',
          },
          {
            title: '카테고리 I',
            value: 'menu-I',
          },
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    }),
    methods: {
      onSearch() {
        if (this.searchValue) {
          alert(`${this.searchValue}를 검색합니다.`);
        } else {
          alert('검색어를 입력해 주세요.');
        }
      },
      onChangeTabs(e) {
        console.log('탭', e);
      },
      onClickTabs() {
        console.log('탭버튼');
      },
    },
};
</script>

<style scoped>
.v-app-bar-title .app-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.v-app-bar-title a {
  color: #ffffff;
}
.v-app-bar-title .app-logo .v-icon {
  margin-right: 7px;
  font-size: 30px;
}

</style>
