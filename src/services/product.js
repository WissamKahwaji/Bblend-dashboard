import privetInstance from "../API/privetInstance";
import { createFormData } from "../utils/index";
class Product {
  async CreateProduct(data) {
    const _data = createFormData(data);

    const res = await privetInstance.post(`products/add`, _data);
    return res;
  }
  async UpdateProduct({ data, productId }) {
    const _data = createFormData(data);
    const res = await privetInstance.put(
      `/products/bb-edit/${productId}`,
      _data
    );
    return res;
  }
}

export const product = new Product();
