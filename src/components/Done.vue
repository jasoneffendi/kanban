<template>
  <div class="col-md-3">
    <div class="utama">
      <h3>Done</h3>
    </div>
    <div v-for="data in done">
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
          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Done',
  data () {
    return {
    }
  },
  firebase: function () {
    return {
      done: this.$db.ref('kanban/done/')
    }
  },
  created () {
    console.log(this.done)
  },
  methods: {
    del (id) {
      this.$db.ref(`kanban/done/` + id).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
