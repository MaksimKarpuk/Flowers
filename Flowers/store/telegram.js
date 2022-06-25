export const state = () => ({
  email: '',
})
export const mutations = {
  addEmail(state,text) {
    state.email = text;
    console.log(state.email);
  },
}
