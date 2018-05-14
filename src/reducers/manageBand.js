let id = 0;

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      const band = Object.assign({},action.band,{id: id})
      // return { bands: state.bands.concat(action.band) }
      return {bands: state.bands.concat(band)}
    case 'DELETE_BAND':
      const bands = state.bands.filter( band => band.id !== action.id)
      // const bands = state.bands.filter( band => console.log(band.id))
      console.log(bands);
      console.log(action.id);
      return {bands}
    default:
      return state;
  }
};


// You will also need to pass through the band object
//   (this should include the id and text of the band)
//    along with the store(for dispatching our DELETE_BAND action)
//    as the props to each rendered Band component.
