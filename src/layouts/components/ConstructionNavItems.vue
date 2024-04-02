<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      to: '/construction-dashboard',
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
        title: 'Yangi tender',
        to: '/tenders',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Tender g\'olibi',
        to: '/victory-tender',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Tenderni yopish',
        to: '/close-tender',
      }"
    />
  </VerticalNavGroup>
</template>
