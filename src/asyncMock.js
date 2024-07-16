const products = [
    {
      id: "1",
      name: "Remera Vans",
      price: 25000,
      category: "Remeras",
      img: "https://triaxgo.com.ar/cdn/shop/files/8782065-PhotoRoom.png-PhotoRoom.png?v=1698759739",
      stock: 25,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "Remera Vans",
      price: 28000,
      category: "Remeras",
      img: "https://triaxgo.com.ar/cdn/shop/files/8908440-PhotoRoom.png-PhotoRoom.png?v=1698760169",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Zapatilla Vans",
      price: 120000,
      category: "zapatillas",
      img: "https://triaxgo.com.ar/cdn/shop/files/9539449-Photoroom.png-Photoroom.png?v=1714138969",
      stock: 0,
      description: "Descripcion de Ipad",
    },
    {
      id: "4",
      name: "Gorrito Vans",
      price: 15000,
      category: "accesorios",
      img: "https://msdsport.es/19200-large_default/gorro-vans-shorty-VN0A4UMABLK-msdsport.jpg",
      stock: 3,
      description: "Descripcion de Ipad",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };