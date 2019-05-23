const INITIALSTATE = {
  status: false,
};

export default function modal(state = INITIALSTATE, action) {
  console.log(action);
  switch (action.type) {
    case 'SHOW_MODAL_ADD_TASK':
      return {
        status: true,
      };
    case 'HIDE_MODAL_ADD_TASK':
      return {
        status: false,
      };
    default:
      return state;
  }
}
