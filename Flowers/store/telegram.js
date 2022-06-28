export const state = () => ({
  email: '',
})
export const mutations = {
  addEmail(state,value) {
    state.email = value;
    console.log(state.email);
  },
}
