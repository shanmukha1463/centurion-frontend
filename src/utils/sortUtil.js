const customSort = (ratingOrder, priceOrder, inpArr) => {
  inpArr.sort((x, y) => {
    if (ratingOrder !== "None" && priceOrder !== "None") {
      if (x.rating === y.rating) {
        if (priceOrder === "Low to High") return x.price <= y.price ? -1 : 1;
        return x.price >= y.price ? -1 : 1;
      }
      if (ratingOrder === "Low to High") return x.rating < y.rating ? -1 : 1;
      return x.rating > y.rating ? -1 : 1;
    }

    if (ratingOrder !== "None") {
      if (ratingOrder === "Low to High") return x.rating <= y.rating ? -1 : 1;
      return x.rating >= y.rating ? -1 : 1;
    }

    if (priceOrder !== "None") {
      if (priceOrder === "Low to High") return x.price <= y.price ? -1 : 1;
      return x.price >= y.price ? -1 : 1;
    }

    return x.id <= y.id ? -1 : 1;
  });
  return inpArr;
};

export default customSort;
