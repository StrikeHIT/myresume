<template>
    <nav class="header">
        <div id="nav">
            <router-link variant="success" to="/">Home</router-link>
            |
            <router-link to="/about">Ajuda</router-link>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
</style>