<template>

  <Card>
    <template #title>Multiselect With Drag & Drop</template>
    <template #content>
      <multiselect-drag-and-drop
        v-model="MultiselectDragAndDropTestSelectedColumns"
        :options="MultiselectDragAndDropTestColumns"
        option-label="header"
        placeholder="Select a item"
        style="width: 250px">
      </multiselect-drag-and-drop>
    </template>
  </Card>

  <Card>
    <template #title>Default Submit Button</template>
    <template #content>
      <submit-button :action="submitButtonClickTest1" label="Test 1"></submit-button>
      <submit-button :action="submitButtonClickTest2" label="Test 2"></submit-button>
      <submit-button :action="submitButtonClickTest3" label="Test 3"></submit-button>
      <submit-button :action="submitButtonClickTest4" label="Test 4" :use-loading="true"></submit-button>
    </template>
  </Card>

  <Card>
    <template #title>Loading Submit Button</template>
    <template #content>
      <submit-button
        :action="submitButtonClickTest1"
        icon="pi pi-search"
        label="Test 1"
        :use-loading="true">
      </submit-button>
      <submit-button
        :action="submitButtonClickTest1"
        icon="pi pi-search"
        :use-loading="true"
        :without-text="true">
      </submit-button>
      <submit-button :action="submitButtonClickTest1" label="Test 3" :use-loading="true"></submit-button>
    </template>
  </Card>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

import submitButton from '@/components/submit-button/submit-button.vue';
import SubmitButtonTest from '@/components/submit-button/submit-button-test';

import multiselectDragAndDrop from '@/components/multiselect-drag-and-drop/multiselect-drag-and-drop.vue';
import MultiselectDragAndDropTest from '@/components/multiselect-drag-and-drop/multiselect-drag-and-drop-test';

export default defineComponent({
  name: 'APP',
  components: {submitButton, multiselectDragAndDrop},
  setup() {
    const {
      submitButtonClickTest1,
      submitButtonClickTest2,
      submitButtonClickTest3,
      submitButtonClickTest4,
    } = SubmitButtonTest();

    const {MultiselectDragAndDropTestColumns, MultiselectDragAndDropTestSelectedColumns} = MultiselectDragAndDropTest();

    return {
      submitButtonClickTest1,
      submitButtonClickTest2,
      submitButtonClickTest3,
      submitButtonClickTest4,

      MultiselectDragAndDropTestSelectedColumns,
      MultiselectDragAndDropTestColumns,
    }
  }
})
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  color: #2c3e50;
  background-color: rgba(30, 30, 30, 0.97);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}

#app > div {
  margin: 50px
}


.p-card .p-card-body .p-card-content {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
