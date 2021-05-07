import { useQuery } from "react-query";

const baseUrl = "http://localhost:3001";

const page = 1;

const limits = 9;

export const GetProducts = (sort) => {
  let url = `${baseUrl}/products/?limits=${limits}&page=${page}`;
  return useQuery("products", async () => {
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
    const res = fetch(url);
    return res.json();
  });
};
