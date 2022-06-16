export const state = () => ({
  isOpen: false,
})
export const mutations = {
  openAside(state) {
    state.isOpen = !state.isOpen;
  },
  closeAside(state) {
    state.isOpen = !state.isOpen;
  },
}

