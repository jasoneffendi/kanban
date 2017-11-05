<template>
  <div class="col-md-3">
    <div class="utama">
      <h3>Start</h3>
    </div>
    <div v-for="data in backlog">
      <div>

        <table>
          <tr>
            <td>title :</td>
            <td>{{data.title}}</td>
          </tr>
          <tr>
            <td>description :</td>
            <td>{{data.description}}</td>
          </tr>
          <tr>
            <td>points :</td>
            <td>{{data.points}}</td>
          </tr>
          <tr>
            <br>
          </tr>
          <tr>
            <td><button type="button" @click="del(data['.key'])">delete</button></td>
            <td><button type="button" @click="moveToDo(data['.key'],data.title,data.description,data.points)">Go Todo</button></td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Backlock',
  data () {
    return {
    }
  },
  firebase: function () {
    return {
      backlog: this.$db.ref('kanban/backlog/')
    }
  },
  created () {
    console.log(this.backlog)
  },
  methods: {
    del (id) {
      this.$db.ref(`kanban/backlog/` + id).remove()
    },
    moveToDo (id, title, description, points) {
      this.$db.ref('kanban/todo/').push({
        title: title,
        description: description,
        points: points
      })
      this.$db.ref(`kanban/backlog/` + id).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
