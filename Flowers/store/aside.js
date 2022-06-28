export const state = () => ({
  isOpen: false,
})
export const mutations = {
  toggleAside(state) {
    state.isOpen = !state.isOpen;
  },
}

