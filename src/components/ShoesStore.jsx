import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";

const ShoesStore = () => {
  const products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "https://bizweb.dktcdn.net/100/413/756/products/image-1671960431546.png?v=1675313682270",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/331/646/products/b37462.jpg?v=1551111531110",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8nE1DW947wNpxSzYMBADay6zu0O0LydZ-5Q&s",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_7f21DtTPGh7sYjYCYaNwVhrDTkogv6UGg&s",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image:
        "https://bizweb.dktcdn.net/100/448/660/products/1709a48434e84501ae3fa107454c84-c8846db0-e6b4-41c3-b2e4-a14fc2376893.jpg?v=1675315529880",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/7c365af056f34e6bacf4aae700d2b7fe_9366/Giay_Superstar_DJen_EG4959.jpg",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "https://bizweb.dktcdn.net/thumb/large/100/378/584/products/2-giay-adidas-ultraboost-4-0-dna-fy9123.jpg",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwkDgPqQhMXdgqgkaBtWjt8RIK1lw9dBwZw&s",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-DaRLIiNbSXSeyOXPMNLfuETEtLbiLVOxw&s",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6a3671b8-f115-44f6-9ab6-3798d55210eb/custom-nike-air-max-97-shoes-by-you.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/6dd373e3-ccca-456f-81e5-e3ed55199693/NIKE+AIR+MAX+97.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/duyetfashion-nike-air-max-270-react-bauhaus-ao4971-002-duyet-fashion-3-jpeg.jpg?v=1624459672790",
    },
  ];
  const [stateModal, setStateModal] = useState({});
  const [productDetail, setProductDetail] = useState(stateModal);
  useEffect(() => {
    setProductDetail(stateModal);
  }, [stateModal]);
  return (
    <>
      <h1 className="text-center text-3xl font-bold my-10">Shoes Shop</h1>
      <ProductList productsData={products} setStateModal={setStateModal} />
      <Modal content={productDetail} />
    </>
  );
};

export default ShoesStore;
