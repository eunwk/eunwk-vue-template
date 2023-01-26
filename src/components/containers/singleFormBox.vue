<template>
  <!-- singleFormBox : 로그인, 회원가입 등 디자인 bg가 있고, 가운데에 폼 박스가 있는 형태 -->
  <div class="bg-container" :style="`background-image: url('${bgImage}')`">
    <section class="center-box">
      <h1 class="box-title">{{ title }}</h1>
      <slot></slot>
    </section>
  </div>
</template>

<script>
import bgDefaultImage from '@/assets/images/img_bg.jpg';

export default {
  props: {
    bgImage: {
      type: String,
      default: bgDefaultImage,
    },
    title: {
      type: String,
      default: 'Title',
    },
  },
};
</script>

<style lang="scss">
/*******************************************
  공통 스타일 - PC first style
********************************************/
.bg-container {
  height: 100%;
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-box {
  margin: 0 auto;
  width: 460px;
  padding: 30px 30px 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25 );

  .box-title {
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.1rem;
    margin-bottom: 20px;
  }
  .single-form-btns {
    button,
    a {
      display: flex;
      width: 100%;
      height: 42px !important;
      border-radius: 21px;
      font-size: 1.125rem;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}

/********************************************
  breakpoint 반응형 처리
*********************************************/

// breakpoint xs : ~ 599px
.app-xs {
  .center-box {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .single-form-btns {
      button,
      a {
        height: 36px !important;
        border-radius: 18px;
        font-size: 1rem;
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }
  .box-title {
    font-size: 28px;
  }
}

</style>
