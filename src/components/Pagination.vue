<template>
     <div class="pagination__container" >
            <div class="pagination">
                <div class="previous">
                    <button type="button"
                            @click="handlePaginationClick(-1)"
                            :disabled="currentPage <= 1"
                            class="btn">Previous</button>
                </div>
                <div class="center">
                    <span class="pageInfo">
                        <span class='current'>{{currentPage}}</span>
                        <span>/</span>
                        <span class="totalPages">{{pagination.total}}</span>
                    </span>
                </div>
                <div class="next">
                    <button type="button"
                            @click="handlePaginationClick(1)"
                            :disabled="pagination && currentPage >= pagination.total"
                            class="btn">Next</button>
                </div>
            </div>
        </div>
</template>
<script src= "./js/pagination.js"></script>
<style lang="scss" scoped>
.pagination__container {
    margin-top: 1rem;
}

.pagination {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.3rem;
    box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.10);
    border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.previous,
.next {
    flex: 1;
    text-align: center;
}

.previous .btn,
.next .btn {
    appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.3rem;
    padding: 0.6rem;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.1);
    transition: all .1s ease;
    cursor: pointer;
    outline: none;
}

.center {
    flex: 1.5;
    text-align: center;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.pageInfo {
    display: inline-block;
    margin: 0.3rem 1rem;
    white-space: nowrap;
}

.btn[disabled] {
    opacity: .5;
    cursor: default;
}
</style>
