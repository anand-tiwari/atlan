<template>
  <div class="query__container">
    <div class="query__box">
      <textarea
        v-model="message"
        :rows="rows"
        @input="changeRows"
        placeholder="add multiple lines"
      ></textarea>
    </div>
    <div class="query__btn">
      <button class="button" @mousedown.prevent="submit">submit query</button>
    </div>
  </div>
</template>
<script src="./js/query.js"></script>
<style lang="scss" scoped>
.query__container {
  width: 100%;
}

.query__box > textarea {
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  border-width: 0.2rem;
  border-color: #0096d8;
  resize: vertical;
  transition: border-radius 0.3s;
  resize: none;

  &:focus {
    outline: none;
    background-color: aliceblue;
    border-radius: 1rem;
  }
}

.query__btn {
  display: flex;
  justify-content: right;
  padding: 1rem 0;

  .button {
    align-items: center;
    background-color: #ffffff;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 0.1rem) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }

  .button:hover,
  .button:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0.4rem 1.2rem;
    color: rgba(0, 0, 0, 0.65);
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 0.2rem 0.4rem;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
}
</style>
