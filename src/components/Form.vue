<template>
  <div class="container">
    <div class="col-sm-1">

    </div>
    <div class="col-sm-10">
      <form>
          Add a task
          <div class="form-group">
            <div>
              <input type="text" id="title" v-model="title" placeholder="title">
            </div>
          </div>

          <div class="form-group">
            <div>
              <input type="text" id="description" v-model="description" placeholder="description">
            </div>
          </div>

          <div class="form-group">
            <div>
              <input type="text" id="points" placeholder="points" v-model="points">
            </div>
          </div>
        <button type="submit" class="btn btn-primary" v-on:click="addTask()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Formulir',
  data () {
    return {
      title: null,
      description: null,
      points: null
    }
  },
  methods: {
    addTask () {
      this.$db.ref('kanban/backlog/').push({
        title: this.title,
        description: this.description,
        points: this.points
      })
      this.title = ''
      this.description = ''
      this.points = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>