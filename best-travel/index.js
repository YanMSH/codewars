function chooseBestSum(maxDistance, numberOfTowns, distancesBetweenTowns) {
  const routes = distancesBetweenTowns.reduce(
    (allRoutes, currentDistance) => {
      const shortRoutes = allRoutes.filter((route) => route.length < numberOfTowns);
      const elongatedRoutes = shortRoutes.map((route) => route.concat([currentDistance]));
      return allRoutes.concat(elongatedRoutes);
    },
    [[]]
  );
  const maxTownRoutes = routes.filter((route) => route.length === numberOfTowns);
  const maxTownRoutesDistances = maxTownRoutes.map((route) => route.reduce((a, b) => a + b));
  const maxTownRoutesDistancesLimited = maxTownRoutesDistances.filter(
    (distance) => distance <= maxDistance
  );
  if (maxTownRoutesDistancesLimited.length > 0) {
    return Math.max(...maxTownRoutesDistancesLimited);
  } else {
    return null;
  }
}
