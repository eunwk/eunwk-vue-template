<template>
  <div class="intro">
      <section class="main-section main-visual">
        <div class="max-width-box">
          <div class="img-box">
            <div class="img-view"><img src="@/assets/images/vuetify.png" alt="" /></div>
            <div class="img-faker" style="--i:1;"><img src="@/assets/images/faker.png" alt="" /></div>
            <div class="img-vuex" style="--i:2;"><img src="@/assets/images/vuex.png" alt="" /></div>
            <div class="img-quill" style="--i:3;"><img src="@/assets/images/quill.png" alt="" /></div>
          </div>
          <div class="txt-box">
            <h1 class="visual-title" style="--i:0;">Vue2 + Vuetify2 <br />Layout Template</h1>
            <div class="chips">
              <v-chip color="yellow">Vuex</v-chip>
              <v-chip color="red" dark>SCSS</v-chip>
              <v-chip>Vuetify</v-chip>
              <v-chip color="primary">faker.js, shortid</v-chip>
              <v-chip color="green">quill</v-chip>
            </div>
          </div>
        </div><!-- .max-width-box // -->
      </section><!-- .main-visual // -->

      <section class="main-section">
        <div class="max-width-box">
          <h2 class="main-section-title" style="--color:#1976d2">About</h2>
          <ol class="list-desc">
            <li>메인화면, 로그인 등 단일페이지 레이아웃</li>
            <li>본문 컨텐츠를 위한 서브페이지 레이아웃</li>
            <li>Sass를 이용한 Vuetify Customizing 설정</li>
            <li>
              Vuex를 사용한 상태관리<br/>
            </li>
          </ol>
        </div>
      </section>

      <section class="main-section dependencies">
        <div class="max-width-box">
          <h2 class="main-section-title" style="--color:#40b37f">Used Dependencies</h2>
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
          <h2 class="main-section-title" style="--color:#d96363">Who is Eunwk...?</h2>
          <p class="main-section-desc">'Eunwk' 는 웹퍼블리셔 입니다~. 이 프로젝트는 뷰 스터디를 위한 템플릿 입니다~</p>
          <div class="band-links">
            <a href="https://github.com/eunwk/eunwk-vue-template" target="_blank"><v-icon>mdi-github</v-icon>Code 보기</a>
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
    position: relative;
    transition: 0.2s;
    // text-decoration: underline;
      &::first-letter {
        transition: 0.2s;
        font-size: 40px;
        font-weight: bold;
        color: var(--color);
        :hover {
          transform: scale(1.2);
        }
      }
    // &::before {
    //   content: '';
    //   width: 100%;
    //   height: 3px;
    //   background: var(--color);
    //   position: absolute;
    //   bottom: 0;
    // }
  }
  .main-section-desc {
    font-size: 18px;
  }
}

.main-visual {
  background: #184c9f url(@/assets/images/img_bg.jpg) no-repeat center top ;
  background-size: cover;
  color: #fff;
  // border: 1px solid red;
  padding: 100px 0;

  .max-width-box {
    // border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-box {
    width: 50%;
    height: 400px;
    // border: 1px solid red;
    position: relative;
    [class^="img-"] {
      background-color: #ffffff;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%);
      animation: main-img-ani 5s linear infinite;
      animation-delay: calc(-1s * var(--i));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      max-width: 70%;
    }
    .img-view {
      animation: none;
      z-index: 1;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    .img-faker {
      transform: translate(-120%, -95%) scale(0.4);
    }
    .img-vuex {
      transform: translate(-120%, -15%) scale(0.7);
    }
    .img-quill {
      transform: translate(0%, -10%) scale(0.6);
    }
  }

  @keyframes main-img-ani {
    0%,
    100% {
        margin-top: -20px;
    }

    50% {
      margin-top: 20px;
    }
  }

  .txt-box {
    text-align: left;
    .visual-title {
      font-size: 52px;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    .chips .v-chip {
      margin-right: 10px;
    }
  }
}
.list-desc {
  display: inline-block;
  text-align: left;
  font-size: 18px;
  counter-reset:rankup-counter 0;
  padding: 0;
  & li {
    margin-bottom: 10px;
    counter-increment: rankup-counter;
    &::before {
      margin-right: 10px;
      content: counter(rankup-counter) '.';
      text-align: center;
      font-weight: 700;
      font-style: italic;
      font-size: 24px;
      color: $primary;
    }
  }
}

.band-links {
  display: flex;
  border: 1px solid #a3a3a3;
  background: #fff;
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
    border-right: 1px solid #a3a3a3;
    background: transparent;
    flex: 1 1 auto;
    padding: 12px 15px;
    font-size: 20px;
    text-decoration: none;
    color: $secondary;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover {
      width: 40%;
      background: $secondary;
      color: #fff;
      border-radius: 30px;
      z-index: 1;
      & + a {
        border-right: 1px solid #a3a3a3;
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
  display: flex;
  width: 100%;
  margin-top: 80px;
  .card {
    width: 25%;
    // background: #fff;
    // box-shadow: 0 0 30px rgba(0,0,0, 0.1);
    padding: 0px 20px;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .card-img {
    margin-bottom: 30px;
    width: 160px;
    height: 160px;
    mix-blend-mode: multiply;
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
    background: #e3e3e3;
    height: 40px;
    border-radius: 20px;
    display:flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    &:hover {
      background: #d6e7f7;
      border-radius: 0px 20px 0px 20px;
    }
  }
}

</style>
