declare module 'vtex.product-context/useProduct' {
  const useProduct: () => ProductContext
  export default useProduct
}

declare module 'vtex.product-context' {
  export interface ProductContext {
    selectedQuantity: number
    selectedItem?: SelectedItem
  }

  interface SelectedItem {
    unitMultiplier: number
    measurementUnit: string
    sellers: Array<{
      commertialOffer: {
        AvailableQuantity: number
      }
    }>
  }
}