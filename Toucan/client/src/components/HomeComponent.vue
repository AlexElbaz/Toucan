<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>Latest Posts</h1>
        <div class="create-post">
          <label for="create-post">Say Something</label>
          <input type="text" id="create-post" v-model="text" placeholder="Create a Post">
          <button v-on:click="createPost">Post!</button>
        </div>
        <!-- CREATE POST HERE-->
        <hr>
        <p class="error" v-if="error">{{ error }}</p>
        <div class="posts-container">
          <div class="post" v-for="(post, index) in posts" :item="post" :index="index" :key="post._id" v-on:dblclick="deletePost(post._id)">
            {{`${post.createdAt.getMonth()+1}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`}}
            <p class="text">{{ post.text }}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <h1>Classes</h1>
        <div class="add-class">
          <input type="text" id="add-class" v-model="text2" placeholder="Add Class">
          <button v-on:click="addClass">Add</button>
        </div>
        <hr>
        <div class="classes-container">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    async addClass() {
      console.log("test");
    }
  }
}
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
 
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}
 
div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
 
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
 
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
