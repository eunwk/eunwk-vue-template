<template>
  <div>
    <category-banner
      title="Responsive Table"
      description="breakpoint [sm] 이하에서 카드레이아웃으로 변경 됩니다."
    />
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmitForm"
    >
      <section-title box>
        <v-btn color="secondary" type="reset" @click="resetValidation"
          >초기화</v-btn
        >
        <v-btn color="secondary" type="submit">저장</v-btn>
      </section-title>
      <section-title title="유형 1 - 기본유형" />
      <table class="tbl-detail">
        <colgroup>
          <col style="width: 10%" />
          <col style="width: 15%" />
          <col style="width: 10%" />
          <col style="width: 15%" />
          <col style="width: 10%" />
          <col style="width: 15%" />
          <col style="width: 10%" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>이름</th>
            <td>홍길동</td>
            <th>사번</th>
            <td>A00001</td>
            <th>휴대전화번호</th>
            <td>010-0000-0000</td>
            <th>이메일</th>
            <td>eunwk@naver.com</td>
          </tr>
          <tr>
            <th>주소</th>
            <td colspan="7">
              <div class="c-flex">
                <input
                  title="우편번호"
                  type="text"
                  disabled
                  style="width: 70px"
                  v-model="zipCode"
                />
                <button class="btn-zipcode" depressed @click="onClickZipCode">
                  <v-icon>mdi-email-outline</v-icon>
                </button>
                <input
                  type="text"
                  title="기본주소"
                  class="width-auto mobile-mr-0"
                  disabled
                />
                <input
                  type="text"
                  title="상세주소"
                  class="width-auto mobile-block"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </v-form>

      <section-title title="유형2 - 상단 헤더형" />
      <table class="tbl-detail text-center">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
          <col style="width: 25%" />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>사번</th>
            <th>휴대전화번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홍길동</td>
            <td>A00001</td>
            <td>010-0000-0000</td>
            <td>eunwk@naver.com</td>
          </tr>
        </tbody>
      </table>
      <section-title title="유형3 - 혼합형" />
      <table class="tbl-detail text-center">
        <colgroup>
          <col style="width: 10%" />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>이름</th>
            <th>사번</th>
            <th>휴대전화번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>A</th>
            <td>홍길동</td>
            <td>A00001</td>
            <td>010-0000-0000</td>
            <td>eunwk@naver.com</td>
          </tr>
          <tr>
            <th>B</th>
            <td>김나나</td>
            <td>A00002</td>
            <td>010-0000-0001</td>
            <td>eunwk@naver.com</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import CategoryBanner from '@/components/CategoryBanner.vue';

export default {
  components: {
    SectionTitle,
    CategoryBanner,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    zipCode: '12345',
  }),
  methods: {
    onClickZipCode() {
      alert('주소찾기 팝업호출~!');
    },
    validate() {
      this.$refs.form.validate();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        console.log('폼전송', {
          title: this.title,
          category: this.selectCategory,
          subject: this.selectSubject,
          // 에디터 값은 어떻게 넘기나요?
        });
      }
    },
  },
};
</script>

<style lang="scss"></style>
