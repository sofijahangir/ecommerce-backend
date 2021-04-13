const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    content: { type: String },
    owner: { type: String },
  },
  { timestamps: { createdAt: "createdAt" } }
);
const CommentModel = mongoose.model("Comment", CommentSchema);

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product Description is required"],
      trim: true,
    },
    unitPrice: {
      type: Number,
      required: [true, "Unit Price is required"],
    },
    categoryID: {
      type: Number,
      required: [true, "Category ID is required"],
    },
    rateCount: {
      type: Number,
    },
    rateTotal: {
      type: Number,
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
    },
    warranty: {
      type: Number,
      required: [true, "Warranty is required"],
    },
    comments: {
      // type: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
      type: [CommentSchema],
    },
  },
  { versionKey: false }
);


const Product = mongoose.model("Product", ProductSchema);
module.exports = { Product, CommentModel };
