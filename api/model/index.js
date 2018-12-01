// ./model/index.js
import mongoose, { Schema as _Schema, model as _model } from 'mongoose'

const Schema = _Schema
const model = _model.bind(mongoose)
const ObjectId = _Schema.Types.ObjectId

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  // One to many relationship
  manufacturer: { type: ObjectId, ref: 'Manufacturer' },
})

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
})

const Product = model('Product', productSchema)
const Manufacturer = model('Manufacturer', manufacturerSchema)

export default { Product, Manufacturer }
