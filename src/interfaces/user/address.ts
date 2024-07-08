export interface CreateAddress {
	name: string
	number: string
	region: string
	street: string
	zipCode: string
	phone: string
	userId: string
	commune: string
	isApartment: boolean
	apartmentNumber?: string
}

export interface UpdateAddress {
	name: string
	number: string
	region: string
	street: string
	zipCode: string
	phone: string
	commune: string
	isApartment: boolean
	apartmentNumber?: string
}
