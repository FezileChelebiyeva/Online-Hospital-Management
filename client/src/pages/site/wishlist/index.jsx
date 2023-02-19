import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div>
      <Helmet>
        <title>Doctris - Wishlist</title>
      </Helmet>
      {console.log(wishlist.data)}
      WishListPage
    </div>
  );
};

export default WishListPage;
