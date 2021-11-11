<template>
  <div>
    <h1>Quer casar comigo?</h1>
    <div class="buttons-line">
      <div id="box" class="div-button">
        <button id="float-button">Não</button>
      </div>
      <router-link to="/confirm" tag="button">Sim</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    var divButton = document.getElementById("box");
    divButton.onmouseover = function (e) {
      e.preventDefault();
      var positionTop = Math.floor(Math.random() * 70 + 5);
      var positionLeft = Math.floor(Math.random() * 70 + 5);
      divButton.style.position = "absolute";
      divButton.style.top = positionTop + "%";
      divButton.style.left = positionLeft + "%";
    };
  },
};
</script>


<style scoped>
h1 {
  font-size: 3.5rem;
}

button {
  background-color: #16db65;
  color: black;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  height: 2rem;
  width: 5rem;
  margin: 100px;
  cursor: pointer;
}

.buttons-line {
  display: flex;
  flex-direction: row;
}
</style>
