import React from "react";
import ProductDetail from "@/components/product/productId";

function product({ slug }) {
  return (
    <>
      <ProductDetail slug={slug} />
    </>
  );
}

export default product;

export async function getServerSideProps(context) {
  const { slug } = context.params; // Access the slug from the params object

  return {
    props: {
      slug,
    },
  };
}
