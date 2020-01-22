<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="Object.keys(dbData).length">
      <div v-for="(item, i) of Object.keys(dbData)" :key="i" class="item">
        <strong>{{ item }}:</strong>
        {{ dbData[item] }}
      </div>
    </div>
    <div v-else>No data.</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  inject: ["firestoreDB"],
  data: () => ({
    loading: true,
    collection: "cities",
    document: "SF",
    dbData: {},
    unsubscribe: () => {}
  }),
  mounted() {
    const doc = this.firestoreDB.collection(this.collection).doc(this.document);
    this.unsubscribe = doc.onSnapshot(newData => {
      this.loading = true;
      if (!newData.exists) return;
      this.dbData = newData.data();
      this.loading = false;
    });
  },
  destroyed() {
    this.unsubscribe();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  margin-bottom: 1em;
}
</style>
