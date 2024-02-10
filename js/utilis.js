const fetchProducts = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("An error occurred during the fetch:", error);
  }
};

function get(item) {
  if (document.querySelector(item)) {
    return document.querySelector(item);
  } else {
    console.log(`${item} is not found!`);
  }
}

function getStorageItems(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
}

function addItemToStorage(id, key) {
  const liked = { id };
  const likes = getStorageItems(key);
  const existingItem = likes.find((product) => product.id === id);

  if (!existingItem) {
    likes.push(liked);
    localStorage.setItem(key, JSON.stringify(likes));
  }
}

function removeItemFromStorage(id, key) {
  const likes = getStorageItems(key);
  const updatedLikes = likes.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedLikes));
}

export {
  fetchProducts,
  get,
  getStorageItems,
  addItemToStorage,
  removeItemFromStorage,
};
