<template>
  <div id="app">
    <div class="headerGrid">
      <div>
        <a href="https://vuejs.org" target="_blank"><img src="./assets/logo.png" class="logo"></a>
      </div>
      <div>
        <h1>Juego del tres en raya</h1>
      </div>
      <div>
        <a href="https://mantecorso.github.io/LuisJuradoQ/" target="_blank"><img src="./assets/L.png" class="logo" alt=""></a>
      </div>
    </div>

    <div class="row">
      <div class="col-12">

        <table align="center" border="1">
          <tr>
            <td class="casilla" id="c0" v-on:click="pcelda(0)"></td>
            <td class="casilla" id="c1" v-on:click="pcelda(1)"></td>
            <td class="casilla" id="c2" v-on:click="pcelda(2)"></td>
          </tr>
          <tr>
            <td class="casilla" id="c3" v-on:click="pcelda(3)"></td>
            <td class="casilla" id="c4" v-on:click="pcelda(4)"></td>
            <td class="casilla" id="c5" v-on:click="pcelda(5)"></td>
          </tr>
          <tr>
            <td class="casilla" id="c6" v-on:click="pcelda(6)"></td>
            <td class="casilla" id="c7" v-on:click="pcelda(7)"></td>
            <td class="casilla" id="c8" v-on:click="pcelda(8)"></td>
          </tr>
        </table>
      </div>
      <div class="col-12 espace">

         <b-button type="button" variant="warning" href="javascript:location.reload()" >Reiniciar</b-button>

      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      mapa: [0, 0, 0, 0, 0, 0, 0, 0, 0, ],
      jugador: 1,
    }),
    methods: {
      dibujar: function () {
        var i;
        for (i = 0; i < 9; i++) {
          if (this.mapa[i] == 0) {
            document.getElementById("c" + i).style = "background-color: palegreen";
          }
          if (this.mapa[i] == 1) {
            document.getElementById("c" + i).innerHTML = "X";
          }
          if (this.mapa[i] == 2) {
            document.getElementById("c" + i).innerHTML = "O";
          }
        }
      },
      pcelda: function (celda) {
        if (this.mapa[celda] == 0) {
          if (this.jugador == 1) {
            this.mapa[celda] = 1;
            this.jugador = 2;
          } else {
            this.mapa[celda] = 2;
            this.jugador = 1;
          }
        } else {
          swal("Oops!", "No puedes pulsar sobre una celda ya seleccionada por otro jugador", "error")
        }
        this.dibujar();
        var r = this.ganador();
        switch (r) {
          case 0:
            break;
          case 1:
            swal({
              title: "Has ganado X!!",
              text: "Pulsa el boton reiniciar para volver a jugar",
              icon: "success",
              button: "Winner",
            })
            break;
          case 2:
            swal({
              title: "Has ganado O!!",
              text: "Pulsa el boton reiniciar para volver a jugar",
              icon: "success",
              button: "Winner",
            })
            break;
          case 3:
            swal({
              title: "Empate!!",
              text: "Pulsa el boton reiniciar para volver a jugar",
              icon: "success",
              button: "Next",
            });
            break;
        }
      },
      ganador: function () {
        var numEspacios = 0;
        var i;
        for (i = 0; i < 9; i++) {
          if (this.mapa[i] == 0) numEspacios++;
        }
        // Las líneas horizontales
        if (this.mapa[0] == this.mapa[1] && this.mapa[1] == this.mapa[2] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[3] == this.mapa[4] && this.mapa[4] == this.mapa[5] && this.mapa[3] != 0) return this.mapa[3];
        if (this.mapa[6] == this.mapa[7] && this.mapa[7] == this.mapa[8] && this.mapa[6] != 0) return this.mapa[6];
        //Las líneas verticales
        if (this.mapa[0] == this.mapa[3] && this.mapa[3] == this.mapa[6] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[1] == this.mapa[4] && this.mapa[4] == this.mapa[7] && this.mapa[1] != 0) return this.mapa[1];
        if (this.mapa[2] == this.mapa[5] && this.mapa[5] == this.mapa[8] && this.mapa[2] != 0) return this.mapa[2];
        //Las diagonales
        if (this.mapa[0] == this.mapa[4] && this.mapa[4] == this.mapa[8] && this.mapa[0] != 0) return this.mapa[0];
        if (this.mapa[2] == this.mapa[4] && this.mapa[4] == this.mapa[6] && this.mapa[2] != 0) return this.mapa[2];
        if (numEspacios > 0) {
          return 0;
        } else {
          return 3;
        }
      }
    }
  }

</script>

<style>
  #app {

    font-family: 'Griffy', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  .red {
    background-color: palevioletred;
    border-radius: 8px;
  }

  .casilla {
    width: 150px;
    height: 150px;
    font-size: 45px;
  }

  .espace {
    padding-top: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #2f9c6b;
  }

  .headerGrid {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 2fr 5fr 2fr;
    text-align: center;
  }

  .logo {
    height: 80px;
    width: 80px;
  }

  table {
    background-color: palegreen;
    border-style: 2px double black;
  }

</style>
