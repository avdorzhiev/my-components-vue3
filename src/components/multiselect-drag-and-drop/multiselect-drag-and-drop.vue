<template>

  <Button type="button" icon="pi pi-cog" :label="'Select columns'" class="fuck-button"
          @click="toggle" aria:haspopup="true" aria-controls="overlay_panel"/>

  <OverlayPanel
    ref="overlayPanelRef"
    appendTo="body"
    id="overlay_panel"
    :style="{...$attrs.style ,minWidth: '250px'}"
    :breakpoints="{'250px': '5px'}">
    <div class="p-multiselect-panel" :style="{...$attrs.style ,minWidth: '250px'}">
      <div class="p-multiselect-items-wrapper" style="max-height: 265px">
        <draggable
          v-model="processedOptions"
          @start="drag=true"
          @end="drag=false"
          item-key="id"
          class="p-multiselect-items"
        >
          <template #header>
            <div class="p-multiselect-header">
              <Checkbox v-model="selectedAll" :binary="true"/>
            </div>
          </template>
          <template #item="{element}">
            <div
              class="p-multiselect-item"
              @click="onClickItem(element)">
              <Checkbox v-model="element.checked" @click.stop="onClickItem(element)" :binary="true"/>
              <div>{{ element.label }}</div>
              <div class="p-ink"></div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </OverlayPanel>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue';
import draggable from 'vuedraggable';
import OverlayPanel from 'primevue/overlaypanel';

interface IOption {
  label: string,
  index: number,
  checked: boolean,
  id: string | number,
}

export default defineComponent({
  components: {draggable},
  name: 'multiselect-drag-and-drop',
  props: {
    modelValue: {type: Array, required: true},
    options: {type: Array, required: true},
    optionLabel: {type: String, required: false, default: () => 'label'},
    optionId: {type: String, required: false, default: () => ''},
    placeholder: {type: String, required: false, default: () => 'selectItem'},
  },
  setup(props, context) {
    // Variables:
    const overlayPanelRef = ref<OverlayPanel>(),
      processedOptions = ref<IOption[]>(props.options.map((item: any, index: number) => {
        const optionId: string | number = props.optionId ? (item[props.optionId] as string | number) : index;
        return {
          label: item[props.optionLabel] as string,
          index: index,
          id: optionId,
          checked: isChecked(optionId)
        }
      })),
      selectedAll = computed<boolean>({
        get: () => processedOptions.value.filter(option => !option.checked).length === 0,
        set: (value: boolean) => processedOptions.value.forEach(option => option.checked = value)
      });

    // Methods:
    function isChecked(option: string | number): boolean {
      return props.modelValue.findIndex((item: any, index: number) =>
        (props.optionId ? (item[props.optionId] as string | number) : index) === option
      ) !== -1
    }

    function toggle(event: Event) {
      if (overlayPanelRef.value) {
        overlayPanelRef.value.toggle(event);
      }
    }

    function onClickItem(item: IOption) {
      item.checked = !item.checked;
    }

    // Watchers:
    watch(processedOptions, (value) => {
      context.emit('update:modelValue', value.filter(item => item.checked));
    }, {deep: true})

    return {
      overlayPanelRef,
      processedOptions,
      selectedAll,

      toggle,
      onClickItem,
    }
  }
})
</script>

<style scoped>

</style>
