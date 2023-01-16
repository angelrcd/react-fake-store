export function sortBy(sortType, products){
  if(sortType === 1){
    return products.sort((a,b)=> a.category.localeCompare(b.category));
  } else if (sortType === 2){
    return products.sort((a,b) => a.price - b.price);
  } else {
    
  }
}