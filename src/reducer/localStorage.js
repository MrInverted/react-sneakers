export class LS {

  static syncSelected(sneakers) {
    if (sneakers.length === 0) return [];

    const isLocalStorage = window.localStorage.getItem("in-cart") ?? "[]";
    const localStorageIDs = JSON.parse(isLocalStorage);

    const selectedSneakersIDs = sneakers
      .filter(item => item.isSelected === true)
      .map(item => item.id);

    const deletedSneakersIDs = sneakers
      .filter(item => item.isSelected === false)
      .map(item => item.id);

    const filteredIDs = [...localStorageIDs, ...selectedSneakersIDs]
      .filter((item, index, array) => array.indexOf(item) === index)
      .filter(item => !deletedSneakersIDs.includes(item))
      .filter(item => item !== null || item !== undefined);

    window.localStorage.setItem("in-cart", JSON.stringify(filteredIDs));

    return filteredIDs ?? [];
  }



  static syncFavourite(sneakers) {
    if (sneakers.length === 0) return [];

    const isLocalStorage = window.localStorage.getItem("in-favourite") ?? "[]";
    const localStorageIDs = JSON.parse(isLocalStorage);

    const favouriteSneakersIDs = sneakers
      .filter(item => item.isFavourite === true)
      .map(item => item.id);

    const deletedSneakersIDs = sneakers
      .filter(item => item.isFavourite === false)
      .map(item => item.id);

    const filteredIDs = [...localStorageIDs, ...favouriteSneakersIDs]
      .filter((item, index, array) => array.indexOf(item) === index)
      .filter(item => !deletedSneakersIDs.includes(item))
      .filter(item => item !== null || item !== undefined);

    window.localStorage.setItem("in-favourite", JSON.stringify(filteredIDs));

    return filteredIDs ?? [];
  }



  static syncPurchased(sneakers) {
    if (sneakers.length === 0) return [];

    const isLocalStorage = window.localStorage.getItem("is-purchased") ?? "[]";
    const localStorageIDs = JSON.parse(isLocalStorage);

    const purchasedSneakersIDs = sneakers
      .filter(item => item.isPurchased === true)
      .map(item => item.id);

    const deletedSneakersIDs = sneakers
      .filter(item => item.isPurchased === false)
      .map(item => item.id);

    const filteredIDs = [...localStorageIDs, ...purchasedSneakersIDs]
      .filter((item, index, array) => array.indexOf(item) === index)
      .filter(item => !deletedSneakersIDs.includes(item))
      .filter(item => item !== null || item !== undefined);

    window.localStorage.setItem("is-purchased", JSON.stringify(filteredIDs));

    return filteredIDs ?? [];
  }

}
