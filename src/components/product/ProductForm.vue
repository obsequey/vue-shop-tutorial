<!-- ./src/components/products/ProductForm.vue -->
<template>
  <form class="columns" @submit.prevent="saveProduct">
    <div class="container column">
      <div class="">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          name="name"
          v-validate="'required'"
          :class="{'input': true, 'is-danger': errors.has('name'),}" />
      </div>
      <div class="">
        <label>Price</label>
        <input
          type="number"
          class="input"
          placeholder="Price"
          v-model="model.price"
          name="price"
        />
      </div>
      <div class="">
        <label>Manufacturer</label>
        <select
          type="text"
          class="input"
          v-model="model.manufacturer"
          name="manufacturer"
        >
          <template v-for="manufacturer in manufacturers">
            <option
              :key="manufacturer.id"
              :value="manufacturer._id"
              :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
            >{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="column container">
      <div class="file">
        <label class="file-label">
          <input
            type="file"
            placeholder="Image"
            name="image"
            class="file-input" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
        </label>
      </div>
      <div class="">
        <label>Description</label>
        <textarea
          class="textarea"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
        ></textarea>
      </div>
      <div class="new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['manufacturers', 'model', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model)
    },
  },
}
</script>
