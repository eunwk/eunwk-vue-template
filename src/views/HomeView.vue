<template>
  <div class="intro">
      <section class="main-section main-visual">
        <div class="max-width-box">
          <div class="img-box">
            <v-img
              :src="require('../assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            />
          </div>
          <div class="txt-box">
            <h1 class="display-2 font-weight-bold mb-3">Vue2 + Vuetify2 <br />Layout Template</h1>
            <h2 class="headline font-weight-bold mb-3">Used Dependencies</h2>
            <div class="mb-10">
              <v-chip class="ma-2" color="secondary">Vuex</v-chip>
              <v-chip class="ma-2" color="red">SCSS</v-chip>
              <v-chip class="ma-2">Vuetify</v-chip>
              <v-chip class="ma-2" color="primary">faker.js, shortid</v-chip>
              <v-chip class="ma-2" color="green">quill</v-chip>
            </div>

            <h2 class="headline font-weight-bold mb-3">About</h2>
            <p class="subheading font-weight-regular">
              1. 메인화면, 로그인 등 단일페이지 레이아웃
              <br />2. 본문 컨텐츠를 위한 서브페이지 레이아웃
              <br />3. Sass를 이용한 Vuetify Customizing 설정
              <br />4. 다른 버전 <a
                href="https://community.vuetifyjs.com"
                target="_blank"
              >[Vue3 + Nuxt를 사용한 퍼블리싱 템플릿]</a>
            </p>
          </div>
        </div><!-- .max-width-box // -->
      </section><!-- .main-visual // -->

      <section class="main-section">
        <div class="max-width-box">
          <h2 class="main-section-title">About</h2>
          <ul class="list-desc">
            <li>메인화면, 로그인 등 단일페이지 레이아웃</li>
            <li>본문 컨텐츠를 위한 서브페이지 레이아웃</li>
            <li>Sass를 이용한 Vuetify Customizing 설정</li>
            <li>
              Vuex를 사용한 상태관리<br/>
            </li>
          </ul>
        </div>
      </section>

      <section class="main-section dependencies">
        <div class="max-width-box">
          <h2 class="main-section-title">Used Dependencies</h2>
          <div class="dependencies-box">
            <div class="card">
              <div class="card-img"><img src="@/assets/images/vuex.png" alt="Vuex" /></div>
              <p class="card-title">Vuex</p>
              <p class="card-desc">Vuex를 사용한 상태관리. 모듈형 Store와 State, mutations, getters 사용</p>
              <a class="card-link" href="" title="Vuex 새창">자세히보기</a>
            </div>
            <div class="card">
              <div class="card-img"><img src="@/assets/images/vuetify.png" alt="Vuetify" /></div>
              <p class="card-title">Vuetify &amp; SCSS</p>
              <p class="card-desc">서브페이지에 Vutify 컴포넌트 사용. SCSS를 사용해 커스터마이징 및 스타일 작성</p>
              <a class="card-link" href="" title="Vuetify 새창">자세히보기</a>
            </div>
            <div class="card">
              <div class="card-img"><img src="@/assets/images/faker.png" alt="faker.js" /></div>
              <p class="card-title">faker.js, shortid</p>
              <p class="card-desc">더미데이터를 위해 데이터 자동생성 Dependency 사용</p>
              <a class="card-link" href="" title="faker.js 새창">자세히보기</a>
            </div>
            <div class="card">
              <div class="card-img"><img src="@/assets/images/quill.png" alt="quill.js" /></div>
              <p class="card-title">Quill</p>
              <p class="card-desc">포스트 작성 샘플에 Quill Editor 사용</p>
              <a class="card-link" href="" title="quill.js 새창">자세히보기</a>
            </div>
          </div>
        </div>
      </section>

      <section class="main-section">
        <div class="max-width-box">
          <h2 class="main-section-title">Who is Eunwk...?</h2>
          <p class="main-section-desc">'Eunwk' 는 웹퍼블리셔 입니다~. 이 프로젝트는 뷰 스터디를 위한 템플릿 입니다~</p>
          <div class="band-links">
            <a href="https://github.com/eunwk/eunwk-vue-template" target="_blank"><v-icon>mdi-github</v-icon>깃허브</a>
            <a href="https://eunwk.github.io/eunwk-technote/" target="_blank"><v-icon>mdi-application-brackets-outline</v-icon>기술노트</a>
            <a href="https://eunwk.github.io/react_ui_template/" target="_blank"><v-icon>mdi-react</v-icon>React Template</a>
          </div>
        </div>
      </section>
  </div><!-- .intro // -->
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
  }),
};
</script>

<style scoped lang="scss">
@import '@/scss/customVariables.scss';

.intro {
  // background: #ffd7b4;
  height: 100%;
  position: relative;
}

.main-section {
  text-align: center;
  padding: 150px 0;
  .main-section-title {
    font-size: 32px;
    margin-bottom: 25px;
    letter-spacing: -0.1rem;
  }
  .main-section-desc {
    font-size: 18px;
  }
}

.main-visual {
  background: #fbdec5 ;
  // border: 1px solid red;

  .max-width-box {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-box {
    // width: 300px;
    // height: 300px;
    // border-radius: 50%;
    // background: #ffcda2;
    margin-right: 150px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
  }
  .txt-box {
    text-align: left;
  }
}
.list-desc {
  font-size: 18px;
  & li {
    margin-bottom: 10px;
  }
}

.band-links {
  display: flex;
  border: 1px solid $secondary;
  background: $secondary;
  border-radius: 30px;
  overflow: hidden;
  margin: 30px auto 0px;
  max-width: 1200px;
  &:hover a {
    border-right: 1px solid transparent;
  }
  a {
    width: 33.3333%;
    transition: 0.3s;
    border-right: 1px solid $borderColor;;
    background: transparent;
    flex: 1 1 auto;
    padding: 12px 15px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover {
      width: 40%;
      background: #fff;
      color: $secondary;
      border-radius: 30px;
      z-index: 1;
      & + a {
        border-right: 1px solid $borderColor;
      }
    }
    .v-icon {
      margin-right: 8px;
      font-size: 32px;
      color: inherit;
    }
    &:nth-child(2) .v-icon{
      font-size: 30px;
    }
    &:last-child {
      border-right: 1px solid transparent !important;
    }
  }

}

.dependencies {background: #f7f7f7}
.dependencies-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  margin-top: 80px;
  .card {
    min-width: 250px;
    background: #fff;
    padding: 20px 30px 30px;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0,0,0, 0.1);
  }
  .card-img {
    margin-bottom: 30px;
    width: 160px;
    height: 160px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .card-desc {
    color: #999;
    margin-bottom: 40px;
    font-weight: 400;
  }
  .card-link {
    margin-top: auto;
    background: #f1f1f1;
    height: 40px;
    border-radius: 10px 30px 10px 30px;
    display:flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    &:hover {
      background: #e5e5e5;
    }
  }
}

</style>
