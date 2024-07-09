import { create } from "zustand"

import type { GetProductsWithFilters } from "@/interfaces"

interface FilterStore {
	filters: GetProductsWithFilters
	page: number
	setFilters: (filters: GetProductsWithFilters) => void
	setPage: (page: number) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
	filters: {
		isAvailable: true,
		limit: 12,
		page: 1,
	},
	page: 1,
	setFilters: (filters) => set((state) => ({ ...state, filters })),
	setPage: (page) => set((state) => ({ ...state, page })),
}))
