<template>
  <Button type="button" @click="onClick" :label="withoutText ? '' : label" :disabled="submitted || disable" :loading="useLoading && submitted" v-bind="$attrs" />
</template>

<script lang="ts">
import {defineComponent, Ref, ref} from 'vue';

export default defineComponent({
  name: "submit-button",
  props: {
    action: { type: Function, required: true },
    label: { type: String, required: false, default: "Save" },
    disable: { type: Boolean, required: false, default: false },
    useLoading: {type: Boolean, required: false, default: false },
    withoutText: {type: Boolean, required: false, default: false },
  },
  setup(props) {
    const submitted: Ref<boolean> = ref<boolean>(false);

    function onClick(): void {
      if (submitted.value) {
        return;
      }
      submitted.value = true;
      Promise.resolve(props.action())
          .finally(() => submitted.value = false)
    }

    return {
      submitted,
      onClick,
    }
  }
})
</script>

<style scoped>

</style>
