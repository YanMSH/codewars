function cakes(recipe, available) {
  const recipeIngridients = Object.keys(recipe);
  const availabaleIngridients = Object.keys(available);
  if (!recipeIngridients.every((ingridient) => availabaleIngridients.includes(ingridient))) {
    return 0;
  }
  let cakesCount = Infinity;
  recipeIngridients.forEach((key) => {
    const currentCount = Math.floor(available[key] / recipe[key]);
    if (currentCount < cakesCount) {
      cakesCount = currentCount;
    }
  });

  return cakesCount;
}
