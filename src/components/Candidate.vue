<template>
  <div class="container">
    <div class="query" v-if="isQueryAvailable">
      <div class="query__title">Query :</div>
      <div class="query__value">{{ queryString }}</div>
    </div>
    <Spinner v-if="isLoading" />
    <div class="table__container" v-if="isQueryResult">
      <div class="table">
        <table class="table__container">
          <tr class="table__header table__grid">
            <template
              :key="tableField.field"
              v-for="tableField in candidateHeaderFilter"
            >
              <td
                v-if="tableField.isFilter"
                class="header__column clickable"
                :class="getHeaderStyle(tableField)"
                @click="sortCandidateByField(tableField)"
              >
                <div class="table-td-text">
                  <span>{{ tableField.label }}</span>
                  <span><font-awesome-icon icon="sort"/></span>
                </div>
                <div class="table__td__separator"></div>
              </td>
              <td v-else class="header__column" :key="tableField.field">
                <div>{{ tableField.label }}</div>
              </td>
            </template>
          </tr>
          <template
            :key="candidate.id"
            v-for="(candidate, index) in candidates"
          >
            <tr
              class="table__grid"
              :class="{ even: index % 2 === 0, odd: index % 2 === 1 }"
            >
              <td class="table-tr">{{ candidate.name }}</td>
              <td class="table-tr">{{ candidate.email }}</td>
              <td class="table-tr">{{ getAgeValue(candidate.birth_date) }}</td>
              <td class="table-tr">{{ candidate.year_of_experience }}</td>
              <td class="table-tr">{{ candidate.position_applied }}</td>
              <td class="table-tr">{{ candidate.application_date }}</td>
              <td class="table-tr">{{ candidate.status }}</td>
            </tr>
          </template>
        </table>
      </div>
      <Pagination />
    </div>
    <div class="query__result" v-if="noResult">
      No Result Found !!!
    </div>
  </div>
</template>
<script src="./js/candidate.js"></script>
<style lang="scss" scoped>
.query {
  display: flex;
  border: 0.1rem solid #e5e5e5;
  margin-bottom: 1rem;

  &__title {
    padding: 1rem 0.1rem;
    background-color: rgba(0, 0, 0, 0.03);
    font-size: 2rem;
    border-right: 0.1rem solid #e5e5e5;
    margin-right: 1rem;
    text-align: center;
    width: 100px;
    font-weight: 800;
    user-select: none;
    cursor: not-allowed;
  }
  &__value {
    padding: 1rem 0.1rem;
    cursor: pointer;
  }
}

.table__container {
  padding-bottom: 2rem;
  width: 100%;
}

.table {
  overflow-x: auto;
}

.table__header {
  box-shadow: 0 0.2rem 1.5rem 0 rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 400;
}

.table__grid {
  display: grid;
  grid-template-columns: 1fr, 2fr, repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(160px, 1fr);
  overflow-x: auto;
}

.top {
  box-shadow: inset 0 0.3rem 0 0 rgba(0, 0, 0, 0.6);
}

.buttom {
  box-shadow: inset 0 -0.3rem 0 0 rgba(0, 0, 0, 0.6);
}

.header__column {
  padding: 1.4rem 0.5rem;
  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.table__body {
  font-weight: 300;
  min-height: 35rem;
}

.odd {
  background: rgba(0, 0, 0, 0.03);
}

.table__row__group {
  border-bottom: solid 0.1rem rgba(0, 0, 0, 0.05);
}

.table-tr {
  padding: 0.7rem 0.5rem;
}

.table-tr,
.header__column {
  border-right: 0.1rem solid rgba(0, 0, 0, 0.05);
  word-break: break-all;
}

.table-td-text {
  display: flex;
  justify-content: space-between;
}

.clickable {
  cursor: pointer;
}
</style>
