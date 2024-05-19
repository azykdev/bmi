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
      name: 'authority-dashboard',
      icon: 'ri-dashboard-line',
    }"
  />

  <!-- 👉 Front Pages -->
  <!-- <VerticalNavGroup
    :item="{
      title: 'Front Pages',
      icon: 'ri-file-copy-line',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Landing',
        href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/front-pages/landing-page',
        target: '_blank',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Pricing',
        href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/front-pages/pricing',
        target: '_blank',
      }"
    />
    
  </VerticalNavGroup> -->

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
        name: 'authority-tenders',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Tender g\'olibi',
        name: 'authority-victory-tender',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Tenderni yopish',
        name: 'authority-close-tender',
      }"
    />
  </VerticalNavGroup>

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
</template>
