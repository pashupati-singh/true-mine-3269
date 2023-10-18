import React, { useEffect, useState } from "react";
import Navbar from "./otherComponent/navbar";
import { styled } from "styled-components";
import axios from "axios";
import "../admin/Prroduct.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function Product() {
  const [newProduct, setNewProduct] = useState({});
  const [action, setAction] = useState("add");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState({});
  const [products, setProductsData] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    try {
      const response = await axios.get(
        "https://gardenguru-server.onrender.com/product/getproducts"
      );
      setProductsData(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function addProduct() {
    try {
      const response = await axios.post(
        "https://gardenguru-server.onrender.com/product/addproduct",
        newProduct
      );
      console.log("Product added:", response.data);
      onClose();
      getAllProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  async function updateProduct(id) {
    try {
      const response = await axios.patch(
        `https://gardenguru-server.onrender.com/product/update/${id}`,
        selected
      );
      console.log("Product updated:", response.data);
      onClose();
      getAllProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      const response = await axios.delete(
        `https://gardenguru-server.onrender.com/product/delete/${id}`
      );
      console.log("Product deleted:", response.data);
      getAllProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div>
      <Navbar Path={"Pages / Product"} RouteName={"Product Preview"} />
      <Div>
        {/* Product Management */}
        <button
          className="AddProductsBtn"
          onClick={() => {
            onOpen();
            setAction("add");
          }}
        >
          +
        </button>
        <div className="productShow">
          {products.map((product) => (
            <div className="productCard" key={product._id}>
              {/* Display product information here */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "normal",
                  alignItems: "center",
                }}
              >
                <img src={product.primary_image} alt="error" width={"200px"} />
                <h3 style={{ fontWeight: "bold", width: "10%" }}>
                  {product.title}
                </h3>
                <p class="limited-paragraph" style={{ width: "50%" }}>
                  {product.description}
                </p>
                <p style={{ fontWeight: "bold", width: "8%" }}>
                  {" "}
                  Price: ${product.price}
                </p>
              </div>

              {/* Additional product details */}
              <div>
                <Button
                  colorScheme="linkedin"
                  size="2xl"
                  w={"20%"}
                  h={"30px"}
                  onClick={() => {
                    setSelected(product);
                    setAction("edit");
                    onOpen();
                  }}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="red"
                  size="2xl"
                  w={"20%"}
                  h={"30px"}
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modals for Product Management */}
        <Modal isOpen={isOpen && action === "add"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Add product form */}
              <div
                className="addProductModel"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p style={{ fontWeight: "600" }}>Title</p>
                <input
                  type="text"
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, title: e.target.value })
                  }
                />
                <p style={{ fontWeight: "600" }}>Description</p>
                <input
                  type="text"
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
                <p style={{ fontWeight: "600" }}>Price</p>
                <input
                  type="number"
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                <Button
                  colorScheme="whatsapp"
                  onClick={() => addProduct()}
                  mt={"10px"}
                >
                  Add
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal isOpen={isOpen && action === "edit"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Edit product form */}
              <div
                className="editProductModel"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p style={{ fontWeight: "600" }}>Title</p>
                <input
                  type="text"
                  value={selected.title}
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setSelected({ ...selected, title: e.target.value })
                  }
                />
                <p style={{ fontWeight: "600" }}>Description</p>
                <input
                  type="text"
                  value={selected.description}
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setSelected({ ...selected, description: e.target.value })
                  }
                />
                <p style={{ fontWeight: "600" }}>Price</p>
                <input
                  type="number"
                  value={selected.price}
                  style={{ border: "1px solid black" }}
                  onChange={(e) =>
                    setSelected({ ...selected, price: e.target.value })
                  }
                />
                <Button
                  onClick={() => updateProduct(selected._id)}
                  colorScheme="whatsapp"
                  mt={"10px"}
                >
                  Save
                </Button>
                <Button colorScheme="red" mt={"10px"} onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Div>
    </div>
  );
}

const Div = styled.div`
  /* Styles for the component */
  .AddProductsBtn {
    /* Styles for the add product button */
  }

  .productShow {
    /* Styles for the product display container */
  }

  .productCard {
    /* Styles for each product card */
  }
`;
