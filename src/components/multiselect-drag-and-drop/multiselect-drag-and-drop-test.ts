import {ref} from 'vue';

export default function MultiselectDragAndDropTest() {
  const MultiselectDragAndDropTestSelectedColumns = ref([]);

  const MultiselectDragAndDropTestColumns = ref([
    {
      field: 'instanceResearchCode',
      header: 'ID',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'instanceResearchName',
      header: 'Raziskovanje',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'instanceCode',
      header: 'ID instance',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'instanceResearchResearchYear',
      header: 'Leto zbiranja',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'instanceResearchReferenceYear',
      header: 'Ref. leto',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'instanceResearchReferencePeriod',
      header: 'Ref. obdobje',
      sortable: false,
      backendField: 'instance',
    },
    {
      field: 'percentResponseRate',
      header: '% odgovora anketarja',
      sortable: true,
      backendField: 'percent_response_rate',
      filterField: 'percent_response_rate',
      sortField: 'percent_response_rate',
    },
    {
      field: 'percentResponseRateAll',
      header: '% odgovora vseh',
      sortable: true,
      backendField: 'percent_response_rate_all',
      filterField: 'percent_response_rate_all',
      sortField: 'percent_response_rate_all',
    },
  ]);

  return {
    MultiselectDragAndDropTestSelectedColumns,
    MultiselectDragAndDropTestColumns,
  }
}
