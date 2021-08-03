import create from "zustand"

const useStore = create(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen })),
  //   bears: 0,
  //   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}))

export default useStore
