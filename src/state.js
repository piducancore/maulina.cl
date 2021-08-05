import create from "zustand"

const useStore = create(set => ({
  isMenuOpen: false,
  toggleMenu: () => set(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen })),
  isHeaderVisible: true,
  toggleHeader: toggle => set(() => ({ isHeaderVisible: toggle })),
  isModalOpen: false,
  toggleModal: toggle => set(() => ({ isModalOpen: toggle })),
  //   bears: 0,
  //   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}))

export default useStore
