import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/category-menu/category-menu.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1696659958441-fd72cc30db89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFuJTIwc3R5bGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1672006778196-d43338450c08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxtYW4lMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div>
      <Outlet />
      <CategoryMenu categories={categories} />
    </div>
  );
};

export default Home;
