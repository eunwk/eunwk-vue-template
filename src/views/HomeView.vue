<template>
  <div class="intro">
      <section class="main-section visual">
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
      </section><!-- .visual // -->

      <section class="main-section about">
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

      <section class="main-section eunwk">
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

/*******************************************
  공통 스타일 - PC first style
********************************************/
/* section 공통 */
.main-section {
  text-align: center;
  padding: 150px 0;
  overflow: hidden;
  .main-section-title {
    font-size: 32px;
    margin-bottom: 25px;
    letter-spacing: -0.1rem;
    position: relative;
    transition: 0.2s;
      &::first-letter {
        transition: 0.2s;
        font-size: 40px;
        font-weight: bold;
        color: var(--color);
        :hover {
          transform: scale(1.2);
        }
      }
  }
  .main-section-desc {
    font-size: 18px;
  }
}

/* Visual */
.visual {
  background: #184c9f url(@/assets/images/img_bg.jpg) no-repeat center top ;
  background-size: cover;
  color: #fff;
  padding: 100px 0;
  transition: padding 0.4s;

  .max-width-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-box {
    width: 60%;
    height: 400px;
    transition: height 0.4s;
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
    width: 40%;
    .visual-title {
      font-size: 52px;
      margin-bottom: 15px;
      line-height: 1.2;
      transition: font-size 0.4s;
    }
    .chips .v-chip {
      margin: 5px;
    }
  }

  .v-chip.v-size--default {
    transition: height 0.4s;
  }
}

/* About */
.about {
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
}

/* Dependencies */
.dependencies {
  background: #f7f7f7;
  .dependencies-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 80px;
    .card {
      width: 25%;
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
}

/* Eunwk */
.eunwk {
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
}

/********************************************
  breakpoint 반응형 처리
*********************************************/

/*** xs, sm 공통  ***/
.app-xs,
.app-sm {
  /* section 공통 */
  .main-section {
    padding: 70px 0px 100px 0px;
  }
  /* Visual */
  .visual {
    padding: 100px 0px;
    .img-box {
      height: 300px;
      [class^="img-"] {
        width: 200px;
        height: 200px;
      }
    }
    .txt-box {
      .visual-title {
        font-size: 2rem;
      }
    }
    .v-chip.v-size--default {
      height: 28px;
    }
  }

  /* About */
  .about {
    .list-desc {
      // text-align: center;
      font-size: 1rem;
    }
  }
  /* Dependencies */
  .dependencies .dependencies-box .card {
    margin-bottom: 70px;
  }

  /* Eunwk */
  .eunwk {
    .band-links {
      flex-direction: column;
      max-width: 400px;
      border: 0;
      border-radius: 0;
    }
    .band-links a {
      font-size: 1.1rem;
      width: 100%;
      border: 1px solid #a3a3a3 !important;
      border-radius: 29px;
      margin-bottom: 20px;
    }
  }
}

// breakpoint xs : ~ 599px
.app-xs {
  /* Visual */
  .visual {
    .max-width-box {
      flex-direction: column;
    }

    .img-box {
      transform: translate(20px, -30px);
    }
    .txt-box {
      text-align: center;
      width: 100%;
    }
  }

  /* Dependencies */
  .dependencies .dependencies-box .card {
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }

}

// breakpoint sm : 600px ~ 950px
.app-sm {
  /* Visual */
  .visual {
    .img-box {
      width: 65%;
    }
  }
  /* Dependencies */
  .dependencies .dependencies-box .card {
    width: 50%;
  }
}

// breakpoint md : 960px ~ 1263px
.app-md {
}

// breakpoint lg : 1264px ~
.app-lg {
}

</style>
