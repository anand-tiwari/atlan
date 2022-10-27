<template>
    <div class="header">
        <div class="header__title" @click="reload()">
            Query Executor
        </div>
    </div>
</template>
<script src="./js/header.js"></script>
<style lang="scss" scoped>
.header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
}

.header__title {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--primary);
    cursor: pointer;
}
</style>
