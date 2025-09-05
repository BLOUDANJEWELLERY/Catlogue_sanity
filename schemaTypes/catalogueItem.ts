export default {
  name: "catalogueItem",
  title: "Catalogue Item",
  type: "document",
  fields: [
    {
      name: "modelNumber",
      title: "Model Number",
      type: "number",
      description: "Unique number for each model",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }
  ],
};