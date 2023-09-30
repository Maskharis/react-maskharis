import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../utils/states/redux/actions";

import Layout from "../components/layout";
import { Input, Select, TextArea } from "../components/input";
import { Button, ButtonLang } from "../components/button";
import Table from "../components/table";
import bootsrapLogo from "../assets/img/bootstrap-logo.png";
import "../styles/App.css";

const article = {
  titles: {
    idn: "Buat Akun",
    en: "Create Account",
  },
  description: {
    idn: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

function CreateProduct1() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");
  const [productImg, setProductImg] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [lang, setLang] = useState("en");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleDeleteClick = (index) => {
    console.log("Menghapus produk pada indeks:", index);
    setDeleteIndex(index);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Hapus data jika dikonfirmasi
    const updatedDatas = products.slice();
    updatedDatas.splice(deleteIndex, 1);
    dispatch(deleteProduct(deleteIndex));
    setShowDeleteConfirmation(false);
    setDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    // Batalkan penghapusan dan atur kembali state
    setShowDeleteConfirmation(false);
    setDeleteIndex(null);
  };

  function handleSubmit(event) {
    event.preventDefault();
    let errorMessages = []; // Menyimpan pesan kesalahan
    const productNameRegex = /^[^\@\$\!\%\*\?\&]+$/;

    if (!productNameRegex.test(productName) || productName.length > 25) {
      errorMessages.push("Nama Produk tidak boleh lebih dari 25 dan mengandung simbol");
    }
    if (productDesc.length === 0) {
      errorMessages.push("Deskripsi produk belum terisi.");
    }
    if (productPrice <= 0) {
      errorMessages.push("Harga produk belum terisi");
    }
    if (productImg.length === 0) {
      errorMessages.push("Gambar produk belum terisi.");
    }
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      setIsSubmitDisabled(true);
    } else {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        productDesc: productDesc,
        productImg: productImg,
      };
      dispatch(addProduct(product));
      setIsSubmitDisabled(false);
    }
  }

  function handleLangChange() {
    // Toggle between Indonesian and English
    setLang(lang === "en" ? "idn" : "en");
  }

  return (
    <Layout>
      <img className="hero-img block mx-auto mt-5 w-12 h-12" src={bootsrapLogo} />
      <h1 className="text-center text-3xl font-bold">{article.titles[lang]}</h1>
      <p className="text-center">{article.description[lang]}</p>
      <ButtonLang label="lang" onClick={handleLangChange} />
      <form onSubmit={handleSubmit}>
        <Input
          label="Product Name"
          aria-label="input-product-name"
          type="text"
          defaultValue={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <Select
          label="Product Category"
          aria-label="Product Category"
          placeholder="Choose..."
          options={["Fruits", "Vegetable", "Dairy"]}
          onChange={(event) => setProductCategory(event.target.value)}
        />
        <Input
          label="Product Price"
          type="number"
          defaultValue={productPrice}
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
        />
        <TextArea
          label="Product Desc"
          type="text"
          defaultValue={productDesc}
          onChange={(event) => setProductDesc(event.target.value)}
        />
        <Input
          label="Product Image"
          type="file"
          defaultValue={productImg}
          onChange={(event) => setProductImg(event.target.value)}
        />
        <Button label="Submit" type="submit" disabled={isSubmitDisabled} />
        <Button label="Reset" type="reset" />
      </form>
      <Table
        headers={["No", "Product Name", "Product Category", "Product Price", "Product Desc", "Product Img", "Action"]}
        datas={products}
        onDeleteClick={handleDeleteClick}
        showDeleteConfirmation={showDeleteConfirmation}
        onConfirmDelete={handleConfirmDelete}
        onCancelDelete={handleCancelDelete}
      />
    </Layout>
  );
}

export default CreateProduct1;
