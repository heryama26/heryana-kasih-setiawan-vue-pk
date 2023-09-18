<template>
<div class="content">
  <v-card v-for="news in listNews" :key="news.index"
    class="mx-auto"
    max-width="60%"
    outlined
  >
  <div>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ news.title }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ news.author }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ news.description }}</v-list-item-subtitle>
      </v-list-item-content>
        
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><img :src="news.urlToImage"></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        <a :href="news.url">Read More...</a>
      </v-btn>
    </v-card-actions>
    </div>
  </v-card>
  </div>
</template>
<script>
export default {
  name: "NewsView",
  computed: {
    listNews() {
      return this.$store.state.news.list;
    },
    infoNews() {
      return this.$store.state.news.info;
    },
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchList");
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>