interface FiltersState {
  id: number;
  marca: string;
  modelo: string;
}

const initialState: FiltersState = {
  id: 0,
  marca: '',
  modelo: '',
};

const filtersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
