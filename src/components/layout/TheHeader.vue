<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style scoped src="../../css/header.css" />
<!-- ../../ để lui lên 2 parents folders -->
<!-- TheHeader.vue's path: src\components\layout\TheHeader.vue -->
<!-- header.css's path: src\css\header.css -->
