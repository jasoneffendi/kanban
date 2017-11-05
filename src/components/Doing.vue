<template>
  <div class="col-md-3">
    <div>
      <h3>Doing</h3>
    </div>
    <div v-for="data in Doing">
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
            <td><button type="button" @click="moveToDone(data['.key'],data.title,data.description,data.points)">Done</button></td>
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Doing',
  data () {
    return {
    }
  },
  firebase: function () {
    return {
      Doing: this.$db.ref('kanban/doing/')
    }
  },
  created () {
    console.log(this.Doing)
  },
  methods: {
    del (id) {
      this.$db.ref(`kanban/doing/` + id).remove()
    },
    moveToDone (id, title, description, points) {
      this.$db.ref('kanban/done/').push({
        title: title,
        description: description,
        points: points
      })
      this.$db.ref(`kanban/doing/` + id).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
