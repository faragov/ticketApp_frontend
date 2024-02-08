const getCartMap = (purchases) =>
  purchases.reduce((acc, curr) => {
    const { id: purchaseId, ticket } = curr;
    const { id: ticketId, name, price, type, duration } = ticket;

    if (!acc[ticketId]) {
      acc[ticketId] = [];
    }

    acc[ticketId].push({ purchaseId, name, price, type, duration });

    return acc;
  }, {});

const getCartItems = (cartMap) =>
  Object.entries(cartMap).map(([ticketId, purchases]) => {
    const totalPrice = purchases.reduce((total, { price }) => total + price, 0);
    const amount = purchases.length;

    const { name, type, duration } = purchases[0];

    return {
      ticketId,
      name,
      price: totalPrice / amount,
      totalPrice,
      amount,
      type,
      duration,
      purchases: purchases.map(({ purchaseId }) => purchaseId),
    };
  });

export { getCartItems, getCartMap };
