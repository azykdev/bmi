<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import { useStore } from 'vuex';

const store = useStore()

const constructionCompany = computed(() => {
  return store.state.construction.constructionCompany
})
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      name: 'construction-dashboard',
      params: {name: constructionCompany?.name},
      icon: 'ri-dashboard-line',
    }"
  />

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Tender',
    }"
  />

  <VerticalNavGroup
    :item="{
      title: 'Tender',
      icon: 'ri-auction-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Tenderlar',
        name: 'construction-tenders',
        params: {name: constructionCompany?.name},
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Mening tenderlarim',
        name: 'construction-my-tenders',
        params: {name: constructionCompany?.name},
      }"
    />
  </VerticalNavGroup>
</template>
