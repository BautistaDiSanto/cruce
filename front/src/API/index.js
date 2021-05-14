import { useQuery } from "react-query";

const baseUrl = "http://localhost:3001";

const limits = 9;

export const GetProducts = (sort, pagination) => {
  let url = `${baseUrl}/products/?orderColumn=price&direction=${sort}&limits=${limits}&page=${pagination}`;
  return useQuery([sort, pagination], async () => {
    const res = await fetch(url);
    return res.json();
  });
};

export const GetProduct = (id) => {
  const url = `${baseUrl}/products/${id}`;
  return useQuery("product", async () => {
    const res = await fetch(url);
    return res.json();
  });
};

export const EditProduct = (id) => {
  const url = `${baseUrl}/products/${id}`;
  return useQuery("product", async () => {
    const res = await fetch(url, { method: "PUT" });
    return res.json();
  });
};

export const DeleteProduct = (id) => {
  const url = `${baseUrl}/products/${id}`;
  return useQuery("product", async () => {
    const res = fetch(url, { method: "DELETE" });
    return res.json();
  });
};
