<template>
  <div>
    <category-banner title="나의정보" description="부가적인 설명글을 작성합니다." />
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmitForm"
    >
      <section-title box>
        <v-btn color="secondary" type="reset" @click="resetValidation">초기화</v-btn>
        <v-btn color="secondary" type="submit">저장</v-btn>
      </section-title>
      <section-title title="기본정보" />
      테이블
    </v-form>
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
    }),
    methods: {
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

<style lang="scss">

</style>
