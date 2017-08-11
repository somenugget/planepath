const paths = require('../helpers/paths');

module.exports = (sequelize, DataTypes) => {
  const Trip = {
    name: 'trip'
  };

  Trip.findPaths = (flights, from_id, to_id) => {
    const pathsGraph = [];

    flights.map((flight) => {
      pathsGraph.push([flight.from_id, flight.to_id])
    });

    return paths({
      graph: pathsGraph,
      from: parseInt(from_id),
      to: parseInt(to_id)
    });
  }

  Trip.findTrips = (flights, from_id, to_id) => {
    const tripsFound = [];
    const pathsFound = Trip.findPaths(flights, from_id, to_id);
    
    if (pathsFound.length) {
      pathsFound.forEach((path) => {
        let trip = [];
        path.forEach((city_id, i) => {
          if (i > 0) {
            let trip_part = {
              from: path[i-1],
              to: city_id,
              flights: flights.filter(flight => flight.from_id == path[i-1] && flight.to_id == city_id)
            }

            trip.push(trip_part);
          }
        });

        tripsFound.push(trip);
      })
    }

    return tripsFound;
  }

  return Trip;
};
