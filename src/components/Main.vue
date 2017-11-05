<template>
  <div>
    <Form/>
    <div>
      <Backlog/>
      <Todo/>
      <Doing/>
      <Done/>
    </div>
  </div>
</template>

<script>
import Backlog from './Backlog'
import Form from './Form'
import Todo from './Todo'
import Doing from './Doing'
import Done from './Done'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components: {
    Form,
    Backlog,
    Todo,
    Doing,
    Done
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
