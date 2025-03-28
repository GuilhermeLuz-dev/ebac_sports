import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosType = {
  itens: Produto[]
}

const initialState: favoritosType = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      if (state.itens.find((p) => p.id === action.payload.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== action.payload.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
