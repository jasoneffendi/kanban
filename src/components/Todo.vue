<template>
  <div class="col-md-3">
    <div>
      <h3>Todo</h3>
    </div>
    <div v-for="data in toDos">
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
            <td><button type="button" @click="moveToDoing(data['.key'],data.title,data.description,data.points)">Do this task</button></td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  data () {
    return {
    }
  },
  firebase: function () {
    return {
      toDos: this.$db.ref('kanban/todo/')
    }
  },
  methods: {
    del (id) {
      this.$db.ref(`kanban/todo/` + id).remove()
    },
    moveToDoing (id, title, description, points) {
      this.$db.ref('kanban/doing/').push({
        title: title,
        description: description,
        points: points
      })
      this.$db.ref(`kanban/todo/` + id).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
