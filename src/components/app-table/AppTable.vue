<template>
  <q-table
    :table-header-style="tableHeadStyles"
    :table-style="rows.length > 0 && tableStyles"
    :card-style="{ marginTop: '20px', borderRadius: 'unset' }"
    :rows="rows"
    :columns="columns"
    flat
    :loading="loading"
    v-bind="$attrs"
    v-model:pagination="pagination"
  >
    <template v-slot:body="props">
      <q-tr :props="props" @click="onClick">
        <q-td v-for="(col, index) in props.cols" :key="props.cols[index].name" :props="props">
          <span v-if="props.cols[index].type === 'text'">
            {{ props.cols[index].value ? props.cols[index].value : '--' }}
          </span>
          <app-badge
            v-if="props.cols[index].type === 'badge'"
            :label="props.cols[index].value"
            :bgColor="badgeColors[props.cols[index].field][props.cols[index].value]?.background"
            :color="badgeColors[props.cols[index].field][props.cols[index].value]?.text"
          />
          <app-button
            v-if="props.cols[index].type === 'action'"
            :label="props.cols[index].value"
            :onClick="buttonProps[props.cols[index].value]?.onClick"
            :icon="buttonProps[props.cols[index].value]?.icon"
            :iconSize="buttonProps[props.cols[index].value]?.icon"
            :unelevated="true"
            :outline="true"
          />
        </q-td>
      </q-tr>
    </template>
    <template v-slot:body-cell-status="props">
      <q-td :props="props">
        <div>
          <q-badge color="purple" :label="props.value" />
        </div>
        <div class="my-table-details">
          {{ props.row.details }}
        </div>
      </q-td>
    </template>

    <template v-slot:header-selection="props">
      <slot name="header-check-box" :props="props" />
    </template>

    <template v-slot:body-selection="props">
      <slot name="body-check-box" :props="props" />
    </template>

    <template v-slot:no-data>
      <div class="no-data-style">
        <span>
          {{ noDataMessage }}
        </span>
      </div>
      <!-- <NoData class="no-data-style" message="No Records yet" /> -->
    </template>
    <template v-slot:bottom="scope">
      <div class="pagination">
        Rows per page:
        <q-select
          class="per-row"
          borderless
          v-model="perRow"
          :options="perRowOptions"
          @update:model-value="updatePerRow"
        />
        {{
          scope.pagination.page * scope.pagination.rowsPerPage - (scope.pagination.rowsPerPage - 1)
        }}-{{ scope.pagination.page * scope.pagination.rowsPerPage }} of {{ rows.length }}

        <q-icon
          name="chevron_left"
          class="q-ml-xs page-arrow"
          :disable="scope.isFirstPage"
          @click="scope.prevPage"
        />
        <q-icon
          name="chevron_right"
          class="page-arrow"
          :disable="scope.isLastPage"
          @click="scope.nextPage"
        />
      </div>
    </template>
  </q-table>
</template>

<script>
import AppButton from '../app-button/AppButton.vue'
// import NoData from '../no-data/NoData.vue';

import AppBadge from '../app-badge/AppBadge.vue'

const numOfRows = 10
export default {
  name: 'Table',
  components: {
    AppBadge,
    AppButton,
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    onClick: {
      type: Function,
    },
    columns: {
      type: Array,
      default: () => [],
    },
    noDataMessage: {
      type: String,
      default: 'No data',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    customizeRows: {
      type: Boolean,
      default: false,
    },
    badgeColors: {
      type: Object,
      default: {},
    },
    buttonProps: {
      type: Object,
      default: {},
    }
  },
  data() {
    return {
      tableHeadStyles: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#63666F',
        borderBottom: '1px solid #DEDEDE',
        borderRadius: '8px',
      },
      tableStyles: {
        fontStyle: 'normal',
        fontWeight: '382',
        fontSize: '14px',
        lineHeight: '17px',
        width: '100%',
        border: '1px solid #DEDEDE',
        borderRadius: '8px',
        color: '#231F20',
        paddingTop: '10px',
        paddingLeft: '10px',
        paddingRight: '20px',
      },
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: numOfRows,
      },
      perRow: numOfRows,
      perRowOptions: [5, 7, 10, 15, 20, 25, 50],
    }
  },
  methods: {
    updatePerRow(value) {
      this.pagination.rowsPerPage = value
    },
  },
  computed: {
    getCellRender() {
      return `
      <template v-slot:body-cell-name="props">
        <q-td :props="props">
          <div>
            <q-badge color="purple" :label="props.value" />
          </div>
          <div class="my-table-details">
            {{ props.row.details }}
          </div>
        </q-td>
      </template>
      `
    },
  },
}
</script>

<style scoped lang="scss">
@import './AppTable.scss';
</style>
