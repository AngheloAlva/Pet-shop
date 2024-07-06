import prisma from "../../src/lib/prisma"

async function main() {
	console.log("Start seeding ...")

	await prisma.option.deleteMany()
	await prisma.product.deleteMany()
	await prisma.category.deleteMany()
	await prisma.brand.deleteMany()
	await prisma.payment.deleteMany()
	await prisma.orderItem.deleteMany()
	await prisma.order.deleteMany()
	await prisma.user.deleteMany()
	await prisma.address.deleteMany()

	const dogFoodCategory = await prisma.category.create({
		data: {
			name: "Dog Food",
			slug: "dog-food",
			description:
				"Explore our comprehensive range of dog food, crafted to meet the nutritional needs of your canine companions. From puppies to seniors, we offer a variety of flavors and formulas to suit every breed and dietary requirement.",
			image: "https://utfs.io/f/fc25768d-b371-4ffd-97bb-d9c043c1f28f-f1ipfz.png",
			petType: "DOG",
		},
	})

	const catFoodCategory = await prisma.category.create({
		data: {
			name: "Cat Food",
			slug: "cat-food",
			description:
				"Our selection of cat food includes high-quality, flavorful options for felines of all ages. Whether your cat prefers dry kibble or wet food, we have options to keep them healthy and happy.",
			image: "https://utfs.io/f/81afa6b4-a40f-4e43-a4df-d87b231f0b74-qhor.png",
			petType: "CAT",
		},
	})

	const dogToysCategory = await prisma.category.create({
		data: {
			name: "Dog Toys",
			slug: "dog-toys",
			description:
				"Discover a playful variety of dog toys designed for fun and enrichment. Our collection includes durable chew toys, interactive puzzles, and fetch toys to keep your dog entertained and active.",
			image: "https://utfs.io/f/94aaa510-a306-472e-8758-218353addddd-f1rnie.png",
			petType: "DOG",
		},
	})

	const catToysCategory = await prisma.category.create({
		data: {
			name: "Cat Toys",
			slug: "cat-toys",
			description:
				"Engage your cat's playful instincts with our range of cat toys. From tantalizing feather wands to stimulating laser pointers, we have everything to keep your feline friend amused and agile.",
			image: "https://utfs.io/f/ec4b1b84-4c33-4943-8d0c-f60aa51c1c9d-hjmc.png",
			petType: "CAT",
		},
	})
	const fishFoodCategory = await prisma.category.create({
		data: {
			name: "Fish Food",
			slug: "fish-food",
			description:
				"Nourish your aquatic pets with our high-quality fish food. Our range includes flakes, pellets, and specialized formulas for different types of fish, ensuring their health and vitality.",
			image: "https://utfs.io/f/ce3fa227-d95e-4743-b9b0-3e732baddb6c-aldsj7.png",
			petType: "FISH",
		},
	})
	const hedgehodFoodCategory = await prisma.category.create({
		data: {
			name: "Hedgehog Food",
			slug: "hedgehog-food",
			description:
				"Specially formulated for your spiky friends, our hedgehog food is designed to provide balanced nutrition, supporting their unique dietary needs for a healthy life.",
			image: "https://utfs.io/f/950bb1c6-7051-4df4-b05b-c76f783c8338-lyzppp.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const guineaPigFoodCategory = await prisma.category.create({
		data: {
			name: "Guinea Pig Food",
			slug: "guinea-pig-food",
			description:
				" Our guinea pig food selection offers a blend of essential nutrients to maintain your guinea pig's health. Choose from a variety of pellets and hay to meet their dietary needs.",
			image: "https://utfs.io/f/34a5a37b-c023-49bd-9757-35bee773229e-jng945.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const hamsterFoodCategory = await prisma.category.create({
		data: {
			name: "Hamster Food",
			slug: "hamster-food",
			description:
				"Our hamster food range is formulated to provide a balanced diet for your furry friends. With a mix of seeds, grains, and pellets, we cater to the nutritional needs of hamsters.",
			image: "https://utfs.io/f/bf9e36f1-876b-44c6-ab05-1b62a1d6e609-96mpef.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const chinchillaFoodCategory = await prisma.category.create({
		data: {
			name: "Chinchilla Food",
			slug: "chinchilla-food",
			description:
				"Find the right nourishment for your chinchilla with our specialized food options. Our selection offers the perfect blend of hay, pellets, and treats for your chinchilla's health and well-being.",
			image: "https://utfs.io/f/37348218-65c9-442d-893a-0694c1d5081c-56n8pw.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const rabbitFoodCategory = await prisma.category.create({
		data: {
			name: "Rabbit Food",
			slug: "rabbit-food",
			description:
				"Our rabbit food selection is tailored to meet the dietary needs of rabbits. From fiber-rich hay to nutrient-packed pellets, we provide everything to keep your rabbit healthy and happy.",
			image: "https://utfs.io/f/a1842711-c8a5-4d41-be46-b09cb3be1058-94jl5b.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const reptileFoodCategory = await prisma.category.create({
		data: {
			name: "Reptile Food",
			slug: "reptile-food",
			description:
				"Cater to the unique dietary requirements of your reptiles with our range of reptile food. Whether you have a turtle, lizard, or snake, we have the appropriate food for their specific needs.",
			image: "https://utfs.io/f/25ea1c30-42cd-40bb-8563-5d884b4eb591-bnrdgg.png",
			petType: "REPTILE",
		},
	})
	const fishAquariumsCategory = await prisma.category.create({
		data: {
			name: "Fish Aquariums",
			slug: "fish-aquariums",
			description:
				"Find the perfect aquatic home for your fish with our selection of aquariums. Available in various sizes and styles, our aquariums are ideal for enhancing the beauty of your aquatic pets.",
			image: "https://utfs.io/f/c8ca6e52-1c98-4d26-906b-f20b98665db4-tc4ca5.png",
			petType: "FISH",
		},
	})
	const smallPetCageAndPenCategory = await prisma.category.create({
		data: {
			name: "Small Pet Cage & Pen",
			slug: "small-pet-cage-&-pen",
			description:
				"Our Small Pet Cage & Pen is a versatile and comfortable habitat, designed to accommodate a variety of small pets including hamsters, guinea pigs, chinchillas, ferrets, and rabbits. This multi-functional enclosure offers ample space for play, rest, and exercise, ensuring the well-being and safety of your small companions. It features easy-to-clean materials and a thoughtful design for easy access and maintenance, making it an ideal choice for pet owners seeking a durable and convenient solution for their beloved small pets.",
			image: "https://utfs.io/f/30ef47d8-bcc4-455f-8e46-333d59835047-5h51c6.png",
			petType: "SMALL_ANIMAL",
		},
	})
	const birdFoodCategory = await prisma.category.create({
		data: {
			name: "Bird Food",
			slug: "bird-food",
			description:
				"Bird food, also known as birdseed, is a food designed for the consumption of birds, both wild and domestic. This food is mainly composed of varieties of seeds, nuts and dried fruits. Although primarily used to feed commercial poultry, such as chickens or turkeys, it is also used to feed pet birds or provide a feeding ground for wild birds.",
			image: "https://utfs.io/f/9d8c7b7d-6a08-4ca0-93ee-edcf16c23666-sgz026.png",
			petType: "BIRD",
		},
	})

	const nomoypetBrand = await prisma.brand.create({
		data: {
			name: "Nomoypet",
			image: "https://utfs.io/f/8984a059-6512-4545-9ded-277aca717956-n07iy1.avif",
			slug: "nomoypet",
		},
	})

	const asanBrand = await prisma.brand.create({
		data: {
			name: "Asan",
			image: "https://utfs.io/f/ff084e06-55d3-40e0-91bf-3a5a812e1784-1sden.avif",
			slug: "asan",
		},
	})

	const mazuriBrand = await prisma.brand.create({
		data: {
			name: "Mazuri",
			image: "https://utfs.io/f/28428939-df8e-4ed2-ac47-e72c0c83c640-hvmth6.avif",
			slug: "mazuri",
		},
	})
	const cedeBrand = await prisma.brand.create({
		data: {
			name: "CéDé",
			image: "https://utfs.io/f/8e6486e0-0aff-412b-9fbb-fffcedfbf6c3-1td2b.avif",
			slug: "cede",
		},
	})
	const vitapolBrand = await prisma.brand.create({
		data: {
			name: "Vitapol",
			image: "https://utfs.io/f/5ff61726-29d6-413b-b4d6-69c573ed650f-7qawod.avif",
			slug: "vitapol",
		},
	})
	const sunsunBrand = await prisma.brand.create({
		data: {
			name: "Sunsun",
			image: "https://utfs.io/f/b1f3c434-666e-4550-96aa-596da8698b19-eqkwhs.avif",
			slug: "sunsun",
		},
	})
	const allForPawsBrand = await prisma.brand.create({
		data: {
			name: "All for Paws",
			image: "https://utfs.io/f/272b9902-f0ea-4318-a1f3-1fbd7e65c6d5-22gb.avif",
			slug: "paws-all-for",
		},
	})
	const marbenPetsBrand = await prisma.brand.create({
		data: {
			name: "Marben Pets",
			image: "https://utfs.io/f/5b8eebef-a26b-4d1c-8c32-e9d650ebca1b-pty844.avif",
			slug: "marben-pets",
		},
	})
	const biofreshBrand = await prisma.brand.create({
		data: {
			name: "Biofresh",
			image: "https://utfs.io/f/19cdec41-c063-451e-ad60-388e6533e25e-g20vfq.avif",
			slug: "biofresh",
		},
	})
	const alaskaBrand = await prisma.brand.create({
		data: {
			name: "Alaska",
			image: "https://utfs.io/f/35f6d02d-81c0-4a57-817f-2963d8da821e-nekk0d.avif",
			slug: "alaska",
		},
	})
	const acanaBrand = await prisma.brand.create({
		data: {
			name: "Acana",
			image: "https://utfs.io/f/ca830673-3e17-4b65-b87c-958c404007df-1j5bw2.avif",
			slug: "acana",
		},
	})
	const diamondNaturalsBrand = await prisma.brand.create({
		data: {
			name: "Diamond Naturals",
			image: "https://utfs.io/f/b0acc23b-d549-4bd9-9652-87769ce79a9f-rauuv7.avif",
			slug: "diamond-naturals",
		},
	})
	const braveryBrand = await prisma.brand.create({
		data: {
			name: "Bravery",
			image: "https://utfs.io/f/53014f8a-1173-4772-8dfd-f07cbf62b64c-2a551j.png",
			slug: "bravery",
		},
	})
	const agilityBrand = await prisma.brand.create({
		data: {
			name: "Agility",
			image: "https://utfs.io/f/7848d3fa-097b-4771-8772-ff786c94229f-hhixmj.avif",
			slug: "agility  ",
		},
	})

	const product1 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: dogFoodCategory.id } },
			petType: ["DOG"],
			name: "Acana Classic Prarie Poultry",
			sku: "ACANA-CLASSIC-PRAIRIE-POULTRY",
			miniDesc:
				"ACANA Prarie Poultry contiene pollo y pavo criados en libertad además de huevos, todo entregado FRESCO o CRUDO diariamente en índices WholePrey, proveniente de granjas locales.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"ACANA Prairie Poultry contains 3 types of fresh meat in WholePrey indexes that include meat, organs and cartilage to provide nutrients in a complete and natural way. Free-range chicken - meat, liver, heart, kidney and cartilage, all fresh from our local farms. Free-range turkey - meat, liver, heart, kidney and cartilage, all fresh from our local farms Nest eggs - fresh and from our local farms.",
				},
				{
					title: "Ingredients",
					content:
						"Dehydrated chicken (25%), oatmeal (25%), fresh chicken (8%), fresh chicken giblets (liver, heart) (5%), raw turkey (4.5%), chicken fat (4 %), whole red lentils, whole oats (4%), whole green peas, green lentils, fresh turkey (4%), fresh whole egg (4%), chicken fat (4%), whole peas, fish oil (3%), alfalfa, lentil fiber, whole chickpeas, raw turkey liver (0.5%), salt, dried seaweed, whole fresh pumpkin, fresh whole butternut squash, fresh carrots, fresh apples, fresh pears, fresh whole zucchini, dried chicory root, fresh kale, fresh spinach, fresh turnip greens, fresh beet greens, whole cranberries, whole blueberries, whole Saskallon berries, turmeric, milk thistle, burdock root, lavender, marshmallow root, rose hips.",
				},
				{
					title: "ADDITIVES (per kg)",
					content:
						"Technological additives: extract rich in tocopherol of natural origin. Nutritional additives: vitamin E: 200 IU, choline chloride: 500 mg, zinc chelate of hydrated amino acids: 100 mg, vitamin B5: 12.5 mg, Copper chelate of hydrated amino acids: 10mg. Zootechnical additives: Enterococcus faecium NCIMB10415: 600×10^6 CFU.",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Crude protein (min.)29 % \\n Crude fat (min.)17 % \\n Crude ash (max.)7.5 % \\n Crude fiber (max.)5 % \\n Moisture (max.)12 % \\n Calcium (min.)1.3 % \\n Phosphorus (min.)1.0 % \\n Omega-6 fatty acids (min.)2.6 % \\n Omega-3 fatty acids (min.)0.5 % \\n DHA (min.)0.1 % \\n EPA (min.)0.1 % \\n Glucosamine (min.)1200 mg/kg \\n Chondroitin sulfate (min.)900 mg/kg \\n Linoleic acid (min.)2.4 % \\n Carbohydrate (NFE)29.5 %",
				},
				{
					title: "Characteristics",
					content:
						"Acana Prairie Poultry is a natural dog food that contains high-quality proteins, such as free-range chicken and turkey as well as eggs, totally fresh and raw ingredients to add to the preparation. \\nThis complete diet for dogs does not contain high glycemic index cereals, in fact this natural food is full of nutritious animal proteins and omega-3 fatty acids that help them stay in good shape and protect their skin and coat. \\nLikewise, low-glycemic index oats are present, which promotes stable blood sugar levels and helps reduce the potential accumulation of fat in the body, helping to maintain your pet's ideal weight.",
				},
				{
					title: "Benefits",
					content:
						"Contains natural proteins \\n Protects your pet's skin \\n Helps maintain your dog's weight",
				},
			]),
			images: [
				"https://utfs.io/f/e3a3848b-7764-4502-a697-0436ff3d9dc2-wjbqv1.jpg",
				"https://utfs.io/f/943db6fe-216e-4f02-be16-29674d5464d2-eazy8y.jpg",
				"https://utfs.io/f/b8031ba3-b018-4bae-8b49-34c07c7ff9fb-eazy8z.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "acana-classic-prarie-poultry",
			options: {
				create: [
					{
						name: "9.7 kg",
						price: 56990,
						stock: 3,
						discount: 0,
					},
					{
						name: "5.9 kg",
						price: 38990,
						stock: 2,
						discount: 0,
					},
					{
						name: "2 kg",
						price: 17990,
						stock: 1,
						discount: 0,
					},
				],
			},
		},
	})
	const product2 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: dogFoodCategory.id } },
			sku: "ACANA-CLASSIC-WILD-COAST",
			petType: ["DOG"],
			name: "Acana Dog Classic Wild Coast",
			miniDesc:
				"Acana Puppy & Junior is a food made with free-range chicken, turkey, wild fish and whole eggs from the nest in WholePrey™ proportions to fully nourish your puppy. Prepared in DogStar® kitchens in Kentucky with fresh, regional ingredients. Unique and Biologically Appropriate™, a delicious and natural way to keep your dog healthy, happy and strong.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Acana® CLASSICS WILD COAST is a special food for dogs, it is free of high glycemic index grains and is made with fish \\n Suitable for dogs of all ages and breeds. Made with fish, caught wild in Northern Vancouver Island and delivered to our kitchens FRESH and WHOLE, so it's bursting with quality and flavor. \\n Free of high-glycemic grains, ACANA is packed with nutritious fish proteins and omega-3 fatty acids to help keep you fit. To support stable blood sugar levels and help reduce potential fat accumulation, ACANA Classics contain low-glycemic oats.",
				},
				{
					title: "Benefits",
					content:
						"Ingrediente Animales Premium: Contiene un 50% de abundante proteína nutritiva, alimentando sus dosis diarias totales \\n Plus de Vitaminas y Minerales: Contiene verduras y frutas frescas, lo que le da a tu mascota a tener un plus de vitaminas y minerales esenciales en su dieta. \\n Carbohidratos Limitados: La dieta natural de tu perro contiene pocos carbohidratos, que están reconocidos como la principal causa de obesidad y diabetes. Por esta razón ACANA limita los carbohidratos a la mitad respecto a los tipos de comida convencionales y contiene avena como única fuente cereal de bajo índice glucémico. La avena entra gradualmente al flujo sanguíneo, evitando repuntes de azúcar en sangre y reduciendo la acumulación de grasa. \\n Biológicamente Apropiado: Contiene la cantidad apropiada de proteína animal, para que tu mascota reciba la dosis diaria apropiada. \\n PresaEntera: Las proporciones de PresaEntera (WholePrey), ricas en nutrientes, de carnes, órganos y cartílagos frescos además de pescado y huevos enteros y frescos, proveen una fuente natural de prácticamente cada uno de los nutrientes que tu mascota necesita. n Fresco y Local: Utiliza ingredientes frescos de origen local, para mantener su frescura y calidad.",
				},
			]),
			images: [
				"https://utfs.io/f/5f918d7e-4cab-4c1a-964d-3b14fe8ad663-l6mvve.jpg",
				"https://utfs.io/f/5094fcbc-a6b1-4f0b-824f-909307166053-rqeww1.jpg",
				"https://utfs.io/f/87a53f95-1f86-4429-9db6-132e53a93b86-rqewvz.jpg",
				"https://utfs.io/f/67c307d6-864e-41c5-9602-57c44e7e149a-rqeww0.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "acana-dog-classic-wild-coast",
			options: {
				create: [
					{
						name: "9.7 kg",
						price: 56990,
						stock: 4,
						discount: 0,
					},
					{
						name: "5.9 kg",
						price: 39990,
						stock: 0,
						discount: 0,
					},
					{
						id: 6,
						name: "2 kg",
						price: 17990,
						stock: 3,
						discount: 0,
					},
				],
			},
		},
	})
	const product3 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: dogFoodCategory.id } },
			sku: "ACANA-DOG-PUPPY",
			petType: ["DOG"],
			name: "Acana Dog Puppy",
			miniDesc:
				"ACANA Puppy & Junior es un alimento para perros de razas pequeñas y medianas, es un alimento biológicamente adecuado para cachorros.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Acana Dog Puppy is a food made with free-range chicken, turkey, wild fish and whole eggs from the nest in WholePrey proportions to fully nourish your puppy. Prepared in DogStar® kitchens in Kentucky with fresh, regional ingredients. Unique and Biologically Appropriate, a delicious and natural way to keep your dog healthy, happy and strong.",
				},
				{
					title: "Benefits",
					content:
						"Premium Animals Ingredient: Contains 60% abundant nutritious protein, fueling your total daily doses. \\n Plus Vitamins and Minerals: Contains fresh vegetables and fruits, which gives your pet extra essential vitamins and minerals in their diet. \\n Gluten Free: No grains, potatoes and gluten. \\n Biologically Appropriate: Contains the appropriate amount of animal protein, so that your pet receives the appropriate daily dose. \\n WholePrey: WholePrey's nutrient-rich proportions of fresh meats, organs and cartilage plus whole, fresh fish and eggs provide a natural source of virtually every nutrient your pet needs. \\n Fresh and Local: Uses fresh, locally sourced ingredients to maintain their freshness and quality.",
				},
				{
					title: "Ingredients",
					content:
						"Boneless turkey, boneless chicken, chicken meal, turkey flour, whole red lentils, whole green peas, whole yellow peas, chicken fat, Atlantic sole, haddock oil, chicken giblets, lentil fiber, whole eggs, broth chicken, whole green lentils, whole pinto beans, whole chickpeas, natural chicken flavor, chicken cartilage, sea salt, mixed tocopherols (preservative), whole squash, collard greens, whole carrots, seaweed, zinc protein, freeze-dried turkey liver , calcium pantothenate, thiamine mononitrate, copper proteinate, chicory root, turmeric, sarsaparilla root, althea root, rose hips, juniper berries, fermentation product of dried lactobacillus acidophilus, fermentation product of dried bifidobacterium animalis, product of dry lactobacillus casei fermentation.",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Crude protein (min.) 31% \\n Gross fat (min.) 19% \\n Gross fiber (max.) 5% \\n Humidity (max.) 12% \\n DHA (docosahexaenoic acid) (min.) 0.4% \\n EPA (eicosapentaenoic acid) (min.) 0.2% \\n Calcium (min.) 1.2% Phosphorus (min.) 1% \\n Omega-6 fatty acids * (min.) 2.3% \\n Omega-3 fatty acids * (min.) 1.3% \\n Glucosamine * (min.) 800 mg/kg \\n Total microorganisms * (min.) (Lactobacillus acidophilus, Bifidobacterium animalis, Lactobacillus casei) 100MM CFU/lb",
				},
			]),
			images: ["https://utfs.io/f/30db8960-f2b3-4392-b94b-d24803a0e4ce-3ta1k.jpg"],
			lifeStage: "PUPPY",
			slug: "acana-dog-puppy",
			options: {
				create: [
					{
						id: 7,
						name: "11.35 kg",
						price: 56990,
						stock: 0,
						discount: 0,
					},
					{
						id: 8,
						name: "5.9 kg",
						price: 43990,
						stock: 3,
						discount: 0,
					},
					{
						id: 9,
						name: "2 kg",
						price: 20490,
						stock: 1,
						discount: 0,
					},
				],
			},
		},
	})
	const product4 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: catFoodCategory.id } },
			sku: "ACANA-INDOOR-ENTREE-CAT",
			petType: ["CAT"],
			name: "Acana Indoor Entrée Cat",
			miniDesc:
				"Acana Indoor Entrée Cat is a complete and formulated food for cats that live indoors. Acana Indoor Entrée will help you receive all the nutrients you need to stay strong and healthy and will provide you with fewer calories.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Acana Indoor Entrée Cat is a complete and formulated food for cats that live indoors. Acana Indoor Entrée will help you receive all the nutrients you need to stay strong and healthy and will provide you with fewer calories to help you maintain a healthy weight. Formulated with 65% meat, such as chicken, turkey and rabbit, as well as fish, such as herring; 4 types of different proteins that will strengthen your muscles and bones, in addition to protecting your skin and keeping your hair shiny.",
				},
				{
					title: "Benefits",
					content:
						"Alimento natural de alta calidad pensado para gatos de interior.\\n Contiene 4 tipos de proteínas.\\n Incorpora un 65% de carne.\\n Mantiene sus músculos y huesos fuertes.\\n Bajo en calorías para mantener su peso equilibrado y sano.\\n Ayuda a reducir el PH de la orina.",
				},
				{
					title: "Ingredients",
					content:
						"Boneless chicken, chicken meal, herring meal, oats, whole peas, chicken fat, ground miscanthus grass, boneless turkey, whole green lentils, whole chickpeas, whole herring, natural chicken flavor, lentil fiber, boneless rabbit, cartilage chicken, chicken liver, chicken heart, whole cranberries, dried seaweed, choline chloride, zinc proteinate, mixed tocopherols (preservative), vitamin E supplement, taurine, vitamin D3 supplement, vitamin A acetate, L- carnitine, DL-methionine, copper proteinate, niacin, thiamine mononitrate, riboflavin, calcium pantothenate, pyridoxine hydrochloride, folic acid, vitamin B12 supplement, biotin, ascorbic acid (vitamin C), citric acid (preservative), extract of rosemary, fermentation product of dry Lactobacillus acidophilus, fermentation product of Bi ? dried dobacterium animalis, dried Lactobacillus casei fermentation product METABOLIZABLE ENERGY: 3630 kcal/kg (414 kcal per 8 fluid ounce cup), with 39% protein, 29% carbohydrates and 32% fat. The ACANA Indoor Entree recipe is formulated to meet the nutritional levels established by the AAFCO Cat Food Nutrient Profiles for Adult Maintenance.",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Proteína 37% \\n Contenido de grasa 14% \\n Materia inorgánica 9% \\n Fibra bruta 6% \\n Humedad 10% \\n Calcio 1,4% \\n Fósforo 1% \\n Magnesio 0,1% \\n Taurina 0,1% \\n Omega-6 2% \\n Omega-3 0,5% \\n DHA 0,2% \\n EPA 0,1%.",
				},
			]),
			images: ["https://utfs.io/f/6178ff75-b88a-4ee5-a31a-277c300c5afb-rlq4fj.jpg"],
			lifeStage: "ADULT",
			slug: "acana-indoor-entree-cat",
			options: {
				create: [
					{
						id: 10,
						name: "1.8 kg",
						price: 22990,
						stock: 2,
						discount: 0,
					},
					{
						id: 11,
						name: "4.5 kg",
						price: 47990,
						stock: 2,
						discount: 10,
					},
				],
			},
		},
	})
	const product5 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: catFoodCategory.id } },
			sku: "ACANA-CAT-FIRST-FEAST",
			petType: ["CAT"],
			name: "Acana Cat First Feast",
			miniDesc:
				"Complete and prepared food for your kitten's first months. Its formula made with 70% small prey animals provides them with all the nutrients they need to grow and develop correctly.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Your little bobcat needs the right kitten fuel and plenty of naps. When you pour ACANA First Feast dry kitten food into her bowl, you can be sure she'll have all the nutrition she needs for all her kitty antics. \\n First Feast includes 70%* quality animal ingredients, such as free-range chicken and whole herring, delivered fresh or raw and completely free of flavors, preservatives or colors.",
				},
				{
					title: "Benefits",
					content:
						"Packed with high-quality protein for muscle and bone development. \\n Taurine, DHA and EPA help maintain healthy cognitive and retinal function. \\n Omega fatty acids help keep your kitty's coat and skin looking shiny and healthy. \\n The ingredients and the liver of small game create an appetizing flavor. \\n Made in USA",
				},
				{
					title: "Ingredients",
					content:
						"Boneless chicken, chicken meal, herring meal, oats, whole peas, chicken fat, whole green lentils, turkey flour, whole chickpeas, whole herring, eggs, haddock oil, natural chicken flavor, lentil fiber, quail boneless, chicken cartilage, chicken liver, chicken heart, whole cranberries, dried seaweed, choline chloride, zinc proteinate, mixed tocopherols (preservative), vitamin E supplement, taurine, vitamin D3 supplement, vitamin A acetate , L-carnitine, Dl-methionine, copper proteinate, niacin, thiamine Mononitrate, Riboflavin, Calcium Pantothenate, Pyridoxine Hydrochloride, Folic Acid, Vitamin B12 Supplement, Biotin, Ascorbic Acid (Vitamin C), Citric Acid (Preservative) , Rosemary Extract, Dry Lactobacillus Acidophilus Fermentation Product, Dry Bifidobacterium Animalis Fermentation Product, Dry Lactobacillus casei Fermentation Product.",
				},
			]),
			images: ["https://utfs.io/f/1fdfaf9d-fd8f-4509-94ca-8edca983580a-fjz86s.jpg"],
			lifeStage: "ADULT",
			slug: "acana-cat-first-feast",
			options: {
				create: [
					{
						id: 12,
						name: "1.8 kg",
						price: 22990,
						stock: 2,
						discount: 0,
					},
				],
			},
		},
	})
	const product6 = await prisma.product.create({
		data: {
			brand: { connect: { id: acanaBrand.id } },
			category: { connect: { id: catFoodCategory.id } },
			sku: "ACANA-GATO-MEADOWLAND",
			petType: ["CAT"],
			name: "Acana Gato Meadowland",
			miniDesc:
				"Acana Meadowland Cat is a cat food made with 75% meat and 25% vegetables. This cat food is made with Cobb Chicken, Tom Turkey, Nest Eggs, Blue Catfish, and Rainbow Trout in WholePrey™ ratios. Prepared in DogStar® kitchens in Kentucky with the freshest ingredients guaranteed to keep your cat healthy and happy.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Biologically appropriate for all stages of growth. \\n *Free-range chicken, freshwater fish, whole nest eggs \\n Reflecting the fertile Kentucky prairies, Kentucky-inspired cat foods feature free-range poultry and turkey, whole nest eggs, freshwater fish , as well as, whole vegetables and fruits from local farms. \\nWith 75% meat, ACANA Meadowland contains free-range chicken, turkey, nest eggs, blue catfish and rainbow trout. Our meat is delivered fresh or raw daily in Whole Prey ratios to mirror your cat's evolving diet and promote optimal health without long lists of supplements or synthetic additives. \\nPrepared in our DogStar kitchens in Kentucky with the best and freshest ingredients in America, ACANA Meadowland is guaranteed to keep your cat healthy, happy and strong.",
				},
				{
					title: "ALL ABOUT MEAT",
					content:
						"Domestic cats are designed like their ancestors and we believe that they should eat as their ancestors did. How do you know if your cat's food is Biologically Appropriate? It's simple, just answer our three Biologically Appropriate questions about meat. \\n Boneless chicken, chicken meal, herring meal, oats, whole peas, chicken fat, whole green lentils, turkey flour, whole chickpeas, whole herring, eggs, haddock oil, natural chicken flavor, lentil fiber, quail boneless, chicken cartilage, chicken liver, chicken heart, whole cranberries, dried seaweed, choline chloride, zinc proteinate, mixed tocopherols (preservative), vitamin E supplement, taurine, vitamin D3 supplement, vitamin A acetate , L-carnitine, Dl-methionine, copper proteinate, niacin, thiamine Mononitrate, Riboflavin, Calcium Pantothenate, Pyridoxine Hydrochloride, Folic Acid, Vitamin B12 Supplement, Biotin, Ascorbic Acid (Vitamin C), Citric Acid (Preservative) , Rosemary Extract, Dry Lactobacillus Acidophilus Fermentation Product, Dry Bifidobacterium Animalis Fermentation Product, Dry Lactobacillus casei Fermentation Product. \\n ¿CUÁNTA CARNE? \\n Completamente libre de concentrados de proteínas vegetales, ACANA Meadowland contiene un 75% de aves de corral, pescado y huevos -más del doble que la mayoría de los alimentos especializados para gatos. Además, todas nuestras carnes están consideradas aptas para el consumo humano previo a su inclusión en nuestros alimentos. \\n ¿CUÁNTA CARNE FRESCA? \\n El 50% de los ingredientes de carne en ACANA Meadowland son FRESCOS o CRUDOS, aportando nutrientes esenciales en su forma más nutritiva. Fresco quiere decir nunca congelado, así que la refrigeración es la única manera en la que preservamos nuestras carnes frescas, mientras que las carnes crudas son ultra congeladas de inmediato para conservar toda su calidad. La otra mitad de los ingredientes de carne es seca o con aceites, ofreciendo una fuente natural de rica y nutritiva proteína y grasa animal. \\n ¿CUANTAS CARNES? \\n ACANA Meadowland ofrece 5 carnes frescas en proporciones de PresaEntera, incluyendo carne altamente nutritiva, órganos, cartílago, los cuales aportan nutrientes de una forma completamente natural. \\n Pollo y pavo de corral -carne, hígado, riñones y cartílago frescos de granjas locales. \\n Huevos del nido -enteros y frescos de granjas locales de Kentucky. \\n Bagre azul entero -entero y fresco de las aguas de Kentucky. \\n Trucha arcoíris -fresca o cruda de los ríos acuíferos Snake en Idaho.",
				},
				{
					title: "LIMITED SUPPLEMENTS ADDED",
					content:
						"There are no synthetic supplements in Mother Nature's kitchen, and wild cats obtain all of their dietary requirements by consuming whole prey animals. Muscle meat provides protein; the liver, kidneys and intestines offer vitamins and minerals; while bones and cartilage provide calcium and phosphorus. \\n ACANA WholePrey foods incorporate meats, organs and cartilage in proportions that resemble Mother Nature, offering nutrients naturally; So you won't find long lists of synthetic supplements - only choline, zinc and copper are added.",
				},
				{
					title: "Ingredients",
					content:
						"Boneless chicken, boneless turkey, chicken liver, dried chicken, dried catfish, whole green peas, red lentils, pinto beans, dried haddock, chicken fat, chickpeas, green lentils, whole yellow peas, catfish, whole eggs, rainbow trout, herring oil, lentil fiber, chicken heart, chicken kidneys, turkey heart, turkey kidneys, natural chicken flavor, chicken cartilage, turkey cartilage, dried seaweed, whole pumpkin, whole yellow zucchini, kale , spinach, mustard greens, collard greens, turnip greens, carrots, apples, pears, freeze-dried chicken liver, freeze-dried turkey liver, pumpkin seeds, sunflower seeds, choline chloride, zinc proteinate, copper proteinate, tocopherol mixed (preservative), chicory root, turmeric, sarsaparilla root, althea root, rosehip, juniper berries, fermentation product of dried lactobacillus acidophilus, fermentation product of dried bifidobacterium animalis, fermentation product of lactobacillus dried casei.",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Crude protein (min.) 35% \\n Fat content (min.) 20% \\n Humidity (max.) 10% \\n Crude fibers (max.) 4% \\n Calcium (min.) 1% \\n Phosphorus (min.) 0.8 % \\n Omega 6 fatty acids* (min.) 3.5% \\n Omega 3 fatty acids* (min.) 0.7% \\n DHA* (min.) 0.15% \\n EPA* (min.) 0.1%",
				},
			]),
			images: [
				"https://utfs.io/f/57401ba6-a7a9-47a6-b653-597757a55594-u4vac5.jpg",
				"https://utfs.io/f/67704b54-a4a8-4495-ad99-a77a55c231b5-kmrh00.jpg",
			],
			lifeStage: "ADULT",
			slug: "acana-gato-meadowland",
			options: {
				create: [
					{
						id: 13,
						name: "1.8 kg",
						price: 25490,
						stock: 1,
						discount: 0,
					},
					{
						id: 14,
						name: "4.5 kg",
						price: 52490,
						stock: 1,
						discount: 0,
					},
				],
			},
		},
	})
	const product7 = await prisma.product.create({
		data: {
			brand: { connect: { id: mazuriBrand.id } },
			category: { connect: { id: hedgehodFoodCategory.id } },
			sku: "MAZURI-HEGDEHOD-DIET",
			petType: ["SMALL_ANIMAL"],
			name: "Hedgehog Diet Mazuri",
			miniDesc:
				"The Hedgehog mazuri is a food designed specifically for hedgehogs that completely complies with the necessary diet for the little ones. In addition to that, it is an extruded food that helps preserve a good flavor, designed to be complete and balanced.",
			description: JSON.stringify([
				{
					title: "FEATURES AND BENEFITS",
					content:
						"Designed to be complete and balanced for land hedgehogs – No supplementation required. \\n Highly fortified – Can be added with fruits, vegetables, etc. \\n Contains fish oil - Rich source of long-chain omega-3 fatty acids. \\n Contains lecithin – Rich source of phospholipids. \\n Contains high fiber – Helps simulate the chitin component of the insectivore diet. \\n Contains natural pigments – For healthy feather pigmentation. \\n Contains taurine – At levels that meet recommendations for carnivores. \\n Contains natural vitamin E and stabilized vitamin C. \\n Very tasty.",
				},
				{
					title: "Ingredients",
					content:
						"Ground soybean meal, whole wheat, dried beet pulp, ground brown rice, dehulled soybean meal, dried egg product, tempered poplar, preserved pork fat with BHA and critical acid, preserved poultry fat with BHA, flavor natural poultry, dried apple grapefruit, powdered cellulose, wheat germ, fish meal (menhaden), dried whey, shrimp meal, soybean oil, lecithin, dried brewer's yeast, fish oil (menhaden) , phosphoric acid, dl-methionine, taurine, tagetes (brown color), choline chloride, salt, mixed tocopherols (preservative, form of vitamin E, citric acid, rosemary extract), l-ascorbyl-2-polyphosphate (vitamin C stabilized), inositol, d-alpha-tocopheryl acetate (source of Vitamin E), niacin, manganous oxide, zinc oxide, thiamine mononitrate, calcium carbonate, menadione sodium bisulfite (source of vitamin K), ferrous carbonate, sulfate ferrous, calcium iodate, calcium pantothenate, copper sulfate, riboflavin, pyridoxine hydrochloride, canthaxanthin (color), zinc sulfate, vitamin A acetate, folic acid, sodium selenite, cobalt, carbonate, biotin, vitamin B12 supplement , cholecalciferol (vitamin D3).",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Protein 28.0% \\n Fat 12.0% \\n Fiber 13.0% \\n Humidity no greater than 12.0% \\n Ash not greater than 8.0%",
				},
				{
					title: "Recommended Quantity",
					content:
						"This nutritional information displayed is referential since it varies according to each animal due to its weight and age. \\n \\n It is recommended to corroborate information with your veterinarian. \\n Estimated consumption (grams/day in adult animal) 15-30 \\n Estimated consumption (tablespoon / day) 1.5-2 \\n Extruded Product Form \\n Bag Weight (Kg.) 0.50 and 1.5 \\n Along with their food, it is recommended to keep fresh, clean water available at all times.",
				},
			]),
			images: ["https://utfs.io/f/b9b9a8e4-921d-47ff-9e61-a7d862e9eea4-eblkrx.jpg"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "hedgehog-diet-mazuri",
			options: {
				create: [
					{
						id: 15,
						name: "500 g",
						price: 5490,
						stock: 4,
						discount: 0,
					},
					{
						id: 16,
						name: "1.5 kg",
						price: 13990,
						stock: 2,
						discount: 0,
					},
				],
			},
		},
	})
	const product8 = await prisma.product.create({
		data: {
			brand: { connect: { id: mazuriBrand.id } },
			category: { connect: { id: guineaPigFoodCategory.id } },
			sku: "MAZURI-GUINEA-PIG-DIET",
			petType: ["SMALL_ANIMAL"],
			name: "Timothy-Based Guinea Pig Diet",
			miniDesc:
				"Mazuri Guinea Pig is a complete and balanced food, pelletized based on Timothy grass, which provides a better mineral balance than diets based on alfalfa. Does not require vitamin supplementation. It is supplemented with stabilized vitamin C.",
			description: JSON.stringify([
				{
					title: "FEATURES AND BENEFITS",
					content:
						"Nutritionally complete – No supplements needed, including vitamin C. Timothy hay-based tablet – Low protein and better mineral balance than alfalfa. \\n Greater fiber – Promotes more chewing activity. \\n Contains stabilized vitamin C – Remains active longer than vitamin C. \\n Contains probiotics – May promote gastrointestinal tract health. \\nContains flaxseed – source of Omega-3 fatty acids. \\n Contains vitamin of natural origin \\n Contains Yucca shidigera – A natural flavoring",
				},
				{
					title: "Ingredients",
					content:
						"Timothy hay, ground soybean hulls, wheat gizzards, hulled soybean meal, ground oats, flax seed, cane molasses, whole wheat, calcium carbonate, soybean oil, salt, dicalcium phosphate, dehydrated whey, lascoryl-2-polyphosphate (stabilized vitamin C), magnesium oxide, choline chloride, dl-methionine, fermentation product of dehydrated Lactobacillus acidophilus, fermentation product of dehydrated Lactobacillus casei, fermentation product of dehydrated Bifidobacterium thermophilum, supplement vitamin A, yucca shidigera extract, dehydrated Enterococcus faecium fermentation product, menadione sodium bisulfite complex (source of vitamin K), vitamin D3 supplement, folic acid, pyridoxine hydrochloride, rice hull, calcium pantothenate, calcium acetate d-alpha tocopherol, riboflavin, vegetable oil, thiamine mononitrate, vitamin B12 supplement, nicotinic acid, cobalt carbonate, manganese oxide, zinc oxide, ferrous carbonate, copper sulfate, zinc sulfate, calcium iodate, selenite of sodium.",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Protein 18.0% \\n Fat 4.0% \\n Fiber 18.0% \\n Humidity no greater than 12.0% \\n Ash not greater than 9.0%",
				},
				{
					title: "CONSUMPTION PER DAY AND PRODUCT CHARACTERISTICS",
					content:
						"Nutritional information presented is referential and varies according to each animal by weight and age, it is recommended to corroborate information with your veterinarian. \\n Adult Bag Duration (months) 1 \\n Estimated consumption (grams/day in adult animal) 40-50 \\n Estimated consumption (tablespoon / day) 2.5-3 \\n Pellet Product Form \\n Bag Weight (Kg.) 1.00 \\n Along with their food, it is recommended to keep fresh, clean water available at all times.",
				},
			]),
			images: ["https://utfs.io/f/b3df1db7-8eb1-4df3-8f0d-6623d2003c04-7al1qw.png"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "timothy-based-guinea-pig-diet",
			options: {
				create: [
					{
						id: 17,
						name: "1 kg",
						price: 8490,
						stock: 2,
						discount: 0,
					},
					{
						id: 18,
						name: "11.36 kg",
						price: 69990,
						stock: 5,
						discount: 0,
					},
				],
			},
		},
	})
	const product9 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: dogToysCategory.id } },
			sku: "AFP-RAINBOW-OLF-BALL",
			petType: ["DOG"],
			name: "Rainbow Olfactory Ball",
			miniDesc:
				"Multifunctional toy with a unique design. It can be filled with food, drips food during pets' play, and can help pets reduce anxiety.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Multifunctional toy with a unique design. It can be filled with food, drips food during pets' play, and can help pets reduce anxiety. \\n With the multifunctional design, this snuff ball not only promotes the dog's digestion, but also trains the dog's sniffing ability. \\n Made of high quality felt cloth material, this pet toy is soft and bite resistant. \\n Material: felt cloth \\n Features: wear-resistant, foldable, creative",
				},
			]),
			images: [
				"https://utfs.io/f/f4ad6c63-6d8f-4640-bf96-95d359a703a6-2nfody.jpg",
				"https://utfs.io/f/1ff537d5-ad49-4915-b62d-ff4a9b859b61-9ijxr9.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "rainbow-olfactory-ball",
			options: {
				create: [
					{
						id: 19,
						name: "Unit",
						price: 9990,
						stock: 10,
						discount: 0,
					},
				],
			},
		},
	})
	const product10 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: dogToysCategory.id } },
			sku: "JUTE-TOY-DOG-TRAINING",
			petType: ["DOG"],
			name: "Jute Toy for Dog Training",
			miniDesc:
				"A jute dog training toy is an essential tool used in dog training, especially in activities such as obedience, agility, and strength and endurance training.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"A jute dog training toy is an essential tool used in dog training, especially in activities such as obedience, agility, and strength and endurance training. This type of toy is specifically designed to resist wear and tear caused by dogs' harsh bites and claws, and is usually made from durable materials such as jute, which is a strong natural fiber.",
				},
				{
					title: "Key Features",
					content:
						"Sturdy Material: Jute is a sturdy material that can withstand the constant pulling and biting of a dog without breaking easily. \\n Specific shape and design: These toys usually have elongated or cylindrical shapes that allow the dog to grip them comfortably with their mouth. Some have handles or ropes so the trainer can hold and move them effectively. \\n Ease of Cleaning: Cleanliness is important as training toys can get dirty quickly. Most jute toys are easy to clean and keep hygienic. \\n Versatility: Jute toys come in different sizes and shapes to fit each dog's specific training needs. They can be used for retrieval exercises, tug of war, controlled bite exercises and more. \\n Resistance to Sharp Teeth: These toys are designed to resist bites from dogs with sharp teeth, helping to prevent the animal from damaging the toy while providing a suitable surface for chewing and exercise. \\n Safety: Jute toys are designed with the dog's safety in mind. They should not have small parts that the dog could accidentally swallow or sharp edges that could hurt the animal.",
				},
				{ title: "Measures", content: "30 x 7 x 5 cm" },
			]),
			images: [
				"https://utfs.io/f/83ff1544-a968-47e5-8f2c-61be8ac44020-stsoz5.webp",
				"https://utfs.io/f/d7362dd8-810d-4ab3-9d9b-8c6557c00762-1d1aj0.jpg",
				"https://utfs.io/f/5eb05b9a-88ec-4708-8bb9-0e3d89f311fc-1d1aiz.webp",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "jute-toy-for-dog-training",
			options: {
				create: [
					{
						id: 20,
						name: "Unit",
						price: 5790,
						stock: 1,
						discount: 0,
					},
				],
			},
		},
	})
	const product11 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: dogToysCategory.id } },
			sku: "RUBBER-BALL-SNIFF-SEARCH-FOOD",
			petType: ["DOG"],
			name: "Rubber ball for sniffing and searching for food",
			miniDesc:
				"Toy designed for dogs that enjoy activities that stimulate their sense of smell and their search instinct. It is made of durable rubber and has a texture that makes it easy to grip with the dog's teeth.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Toy designed for dogs that enjoy activities that stimulate their sense of smell and their search instinct. It is made of durable rubber and has a texture that makes it easy to grip with the dog's teeth. \\n The ball contains an opening in which food or treats can be placed for the dog to find by sniffing and manipulating the ball. This foraging activity is great for keeping dogs entertained and exercising their mind and body. \\n The rubber sniffing and foraging ball is a useful tool for training dogs and improving their ability to concentrate and pay attention. Additionally, it can also help reduce stress and anxiety in dogs by providing them with an activity that allows them to release their energy and stimulate their mind.",
				},
				{ title: "Measures", content: "20 x 20 x 20 cm" },
			]),
			images: [
				"https://utfs.io/f/b459a8be-2c38-4d08-b1b3-ac722f41d3ea-2ezbwx.jpg",
				"https://utfs.io/f/d5b92897-3b59-4732-af67-44273d5cdf59-m3kslw.jpg",
				"https://utfs.io/f/e0c44c7f-1a15-440e-a9cd-214e308a05e1-m3kslw.jpg",
				"https://utfs.io/f/611b156c-0b1f-4f53-9763-6df8007605bf-m3kslx.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "rubber-ball-for-sniffing-and-searching-for-food",
			options: {
				create: [
					{
						id: 21,
						name: "Unit",
						price: 12490,
						stock: 0,
						discount: 0,
					},
				],
			},
		},
	})
	const product12 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: dogToysCategory.id } },
			sku: "ELASTIC-ANIMAL-TOY",
			petType: ["DOG"],
			name: "Elastic Animal Toy",
			miniDesc:
				"Sturdy elastic pet toys, durable quality animated animal design, also good for pet's dental health, clean teeth and massage gums.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"A great gift option for friends who have dogs. \\n Best dog toy gift set for puppies and small dogs. \\n Cartoon animal pattern, ensures its popularity. \\n Made of premium material for durable and practical use. \\n Good for dental health, clean teeth and massage gums while playing and prevent dog from biting other things.",
				},
				{
					title: "Measures",
					content: "Cow 32*11cm \\n Orangutan 32.5*11.5cm \\n Donkey 30.5*10cm",
				},
			]),
			images: [
				"https://utfs.io/f/57b6e0a0-3edd-4a77-b59c-3e1fc4edc91f-dhst8b.jpg",
				"https://utfs.io/f/9ba7fb2a-506f-4c3f-ac09-d864d0fda56e-uhhrvu.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "elastic-animal-toy",
			options: {
				create: [
					{
						id: 22,
						name: "Cow",
						price: 3990,
						stock: 3,
						discount: 0,
					},
					{
						id: 23,
						name: "Orangutan",
						price: 3990,
						stock: 1,
						discount: 0,
					},
					{
						id: 24,
						name: "Donkey",
						price: 3990,
						stock: 0,
						discount: 0,
					},
				],
			},
		},
	})
	const product13 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: catToysCategory.id } },
			sku: "FISH-TOY-CATNIP",
			petType: ["CAT"],
			name: "Fish Toy with Catnip",
			miniDesc: "Toy for cats in the shape of a Fish with Catnip: Fun and Feline Stimulation!",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Toy for cats in the shape of a Fish with Catnip: Fun and Feline Stimulation! To choose from in 2 colors. \\n This little fish for cats is a toy that will keep them totally entertained for hours. It has Catnip inside, which will arouse your cat's interest even more.",
				},
			]),
			images: ["https://utfs.io/f/4d4f8d71-3caa-44f0-bbd2-e294537c4126-8jybjy.jpg"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "fish-toy-with-catnip",
			options: {
				create: [
					{
						id: 25,
						name: "Grey",
						price: 1490,
						stock: 1,
						discount: 0,
					},
					{
						id: 26,
						name: "Beige",
						price: 1490,
						stock: 2,
						discount: 0,
					},
				],
			},
		},
	})
	const product14 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: catToysCategory.id } },
			sku: "MOUSE-TOY-CAGE-CATS",
			petType: ["CAT"],
			name: "Mouse toy in cage for cats",
			miniDesc:
				"A cage mouse toy for cats is an ingenious and entertaining accessory designed to stimulate the hunting and playing instincts of domestic felines. This toy consists of two main parts: a small plush mouse and a cage.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						'A cage mouse toy for cats is an ingenious and entertaining accessory designed to stimulate the hunting and playing instincts of domestic felines. This toy consists of two main parts: a small plush mouse and a cage. \\n Plush Mouse: The mouse itself is usually made of soft, skin-friendly materials, such as plush or cloth, to make it safe for the cat to bite and catch. It is usually designed to look like a real mouse, with natural colors and details like ears and tail. Some models even have built-in rattles or squeakers to increase the cat\'s interest. \\nCage: The cage is a wire or plastic structure that surrounds the stuffed mouse. The cage has openings large enough to allow the cat to reach the mouse, but small enough that the toy is not too easy to catch. This challenges the cat and encourages active play as it attempts to \\"chase\\" the mouse across the cage bars. \\n The mouse in cage toy for cats is a great way to keep felines entertained and active. It stimulates their hunting skills, gives them exercise and prevents boredom. Additionally, it provides a safe and controlled way for cats to explore their natural instincts without harming other small animals.',
				},
			]),
			images: ["https://utfs.io/f/edf4f419-aaae-432f-84f2-e410f3109378-w6zz8f.webp"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "mouse-toy-in-cage-for-cats",
			options: {
				create: [
					{
						id: 27,
						name: "Unit",
						price: 1490,
						stock: 1,
						discount: 0,
					},
				],
			},
		},
	})
	const product15 = await prisma.product.create({
		data: {
			brand: { connect: { id: sunsunBrand.id } },
			category: { connect: { id: fishAquariumsCategory.id } },
			sku: "SUNSUN-72-LITER-AQUARIUM",
			petType: ["FISH"],
			name: "Sunsun 72 Liter Aquarium",
			miniDesc: "SUNSUN HE-600 72L New Aquarium Fish Tank Complete Set",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"If you are an aquarium lover and are looking for something different, this model will surprise you thanks to its LED lighting. Not only will it offer you greater energy efficiency that will significantly reduce consumption, but it will also give the room where you place it a different touch. \\nThe fish aquarium offers something very different from current lighting proposals. Beyond an alternative with a very contemporary design, with clean and simple lines. \\nThis line includes glass of excellent transparency and quality along with a filtration system that includes constant oxygenation of the water. LED lighting system of different colors. Filtered System SUNSUN HE-600 72L New Aquarium Fish Tank Complete Set",
				},
				{
					title: "Characteristics",
					content:
						"Brand: SUNSUN \\n - Top quality aquarium and beautiful views \\n - Made of super transparent glass, glass thickness 5mm. \\n - Tank capacity: 72L \\n - Aquarium Size: 57.5cm (L) x 33.5cm (W) x 48cm (H) \\n - Full filtration system on top \\n - 15W LED light \\n - 2 x LED light modes: single cyan and color changing with red, blue, green, etc. \\n - Water pump 8W, 500L/H \\n - Touch screen LED display, change LED light mode with one touch \\n - Comes with temporal sensor, which displays temporal on LED screen \\n - Easy maintenance",
				},
			]),
			images: [
				"https://utfs.io/f/0063d2bf-cd00-46e5-ab66-c50d6405a5dd-hpjrix.jpg",
				"https://utfs.io/f/6c54dce8-612f-4fbd-bcfe-08914bb61095-sefczm.jpg",
				"https://utfs.io/f/833aaf3e-84cc-4f9a-a8d5-9f61a9fe886b-sefczl.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "sunsun-72-liter-aquarium",
			options: {
				create: [
					{
						id: 28,
						name: "Black",
						price: 149900,
						stock: 2,
						discount: 0,
					},
					{
						id: 29,
						name: "White",
						price: 149900,
						stock: 0,
						discount: 5,
					},
				],
			},
		},
	})
	const product16 = await prisma.product.create({
		data: {
			brand: { connect: { id: sunsunBrand.id } },
			category: { connect: { id: fishAquariumsCategory.id } },
			sku: "SUNSUN-15-LITER-AQUARIUM",
			petType: ["FISH"],
			name: "Sunsun 15 Liter Aquarium",
			miniDesc:
				"Sunsun brings us its premium line of curved glass aquariums with superior filtering system and 3.5 watt LED light.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"If you are an aquarium lover and are looking for something different, this model will surprise you thanks to its LED lighting. Not only will it offer you greater energy efficiency that will significantly reduce consumption, but it will also give the room where you place it a different touch. \\n The fish aquarium offers something very different from current lighting proposals. Beyond an alternative with a very contemporary design, with clean and simple lines. \\n This line includes glass of excellent transparency and quality along with a filtration system that includes constant oxygenation of the water. LED lighting system of different colors. \\n Superior filtering system and 3.5 w LED light",
				},
			]),
			images: ["https://utfs.io/f/ea96fb32-1d45-499a-b052-fb96e7277078-5jkq8.jpg"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "sunsun-15-liter-aquarium",
			options: {
				create: [
					{
						id: 30,
						name: "Pink",
						price: 64990,
						stock: 0,
						discount: 0,
					},
					{
						id: 31,
						name: "White",
						price: 64988,
						stock: 0,
						discount: 0,
					},
					{
						id: 32,
						name: "Black",
						price: 64990,
						stock: 1,
						discount: 0,
					},
					{
						id: 33,
						name: "Blue",
						price: 64990,
						stock: 4,
						discount: 0,
					},
				],
			},
		},
	})
	const product17 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: smallPetCageAndPenCategory.id } },
			sku: "2-STORY-HAMSTER-CAGE",
			petType: ["SMALL_ANIMAL"],
			name: "2-Story Hamster cage",
			miniDesc:
				"The large-capacity hamster cage has enough space to move freely. A very convenient material to disinfect. It is very easy to clean.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"The large-capacity hamster cage has enough space to move freely. A very convenient material to disinfect. It is very easy to clean. \\n Ideal to offer a habitat with all the accessories available so that you can stay active and very happy. It has unmatched comfort that includes a nest to sleep comfortably or take refuge, a wheel where you can exercise and a water fountain. It is made with high quality materials to provide greater durability.",
				},
				{
					title: "Advantages",
					content:
						"Includes exercise wheel, nest for sleeping or hiding and a water fountain \\n Provides a lot of comfort. \\n Easy to transport and assemble. \\n Made with high quality resistant materials. \\n Large capacity cage, have enough space to move freely. \\n A very convenient material to disinfect. It is very easy to clean. \\n Hamster cage made of metal and plastic with a square shape \\n Hamster cage. Contains wheel drinker and special house. This cage is manufactured with high quality. \\n 2 stairs",
				},
				{ title: "Measures", content: "47 x 32 x 40.5 cm\n" },
			]),
			images: ["https://utfs.io/f/fdd31156-76ec-47d1-9e70-35ffbae12355-qz67om.webp"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "2-story-hamster-cage",
			options: {
				create: [
					{
						id: 34,
						name: "Unit",
						price: 24990,
						stock: 3,
						discount: 0,
					},
				],
			},
		},
	})
	const product18 = await prisma.product.create({
		data: {
			brand: { connect: { id: allForPawsBrand.id } },
			category: { connect: { id: smallPetCageAndPenCategory.id } },
			sku: "BARN-CAGE-RABBITS-3-FLOORS",
			petType: ["SMALL_ANIMAL"],
			name: "Barn cage for rabbits 3 floors",
			miniDesc:
				"rabbit cage with three-story structure, designed for optimal living comfort and connected by comfortable wooden stairs",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"Barn is a spacious bunny cage that has a large useful surface thanks to its three floors. The cage, designed from the smaller version of the Barn model, maintains the original shape reminiscent of an American barn with a raised roof and provides more space for your pet thanks to its three levels. It has two large floors connected by comfortable stairs and an attic with a high ceiling, which can be opened to comfortably access the cage and carry out daily maintenance operations. The cage is equipped with essential accessories, such as mangers, feeders, waterers and a house for moments of relaxation. \\n The Barn rabbit cage can be completely disassembled, so it takes up little space, and has been made with robust painted wire structures and thermoplastic resin trays that effectively contain dirt, bedding and food waste. On the front there are comfortable sliding doors, specially designed to guarantee the safety of the animal. For thorough cleaning, the buckets can be separated from the wire frames.",
				},
				{
					title: "Characteristics",
					content:
						"Three-story rabbit cage \\n Ample living space \\n American barn theme model \\n Patented design \\n Trays made of robust thermoplastic resin to contain dirt, litter or sawdust \\n Wire structure treated with anti-corrosion powder paint \\n Easy access to internal areas thanks to doors and walls that can be opened \\n Fully opening roof to access the interior \\n Plastic top frame with closing hooks \\n Sliding entrance doors \\n Wire frame and easy-to-separate buckets for cleaning \\n Accessories included: 2 drinkers, 2 feeders and 2 ladders \\n With dimensions of 118 x 58 x h 166 cm. Comes in space-saving, easy-to-assemble packaging",
				},
			]),
			images: [
				"https://utfs.io/f/d6d01490-51d2-4fab-9338-f4b27bca0256-tm91w8.jpg",
				"https://utfs.io/f/fa127cdb-ae21-402d-8ff7-8fd9a515e403-keidtu.jpg",
				"https://utfs.io/f/1a8cdb15-8dbc-4855-83ba-5309153fc340-keidtt.jpg",
			],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "barn-cage-for-rabbits-3-floors",
			options: {
				create: [
					{
						id: 35,
						name: "Unit",
						price: 240990,
						stock: 1,
						discount: 14,
					},
				],
			},
		},
	})
	const product19 = await prisma.product.create({
		data: {
			brand: { connect: { id: cedeBrand.id } },
			category: { connect: { id: birdFoodCategory.id } },
			sku: "PROVIDE-FOOD-CANARIES-EGGFOOD",
			petType: ["BIRD"],
			name: "Provide Food for Canaries Eggfood",
			miniDesc: "Food Supplement for song, color and posture canaries.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"CéDé® egg food is a nutritional supplement for song, color and posture canaries. The processing of whole eggs makes CéDé® unique! Egg protein is an easily ingestible and optimally usable source of animal protein for birds. CéDé® egg food contains high-grade proteins, both animal and vegetable, all the vitamins, amino acids, minerals and micronutrients necessary for successful reproduction. Adding essential amino acids increases shedding.",
				},
				{ title: "Use", content: "Relax with a few drops of water, sprouted seeds, etc." },
				{
					title: "Breeding Period",
					content:
						"Feed CéDé® egg food daily, if possible 2 to 3 times a day, as needed. From the moment the birds can eat independently, ¼ of the daily ration of CéDé® egg food daily.",
				},
				{
					title: "Characteristics",
					content:
						"Food for colorful canaries, singers and layers.\n \\n Made with natural ingredients. \\n High content of animal and vegetable protein.\n \\n Vitamins, amino acids, minerals and trace elements necessary for good reproduction. \\n Promotes molting and plumage development \\n Helps in normal development of metabolism",
				},
			]),
			images: ["https://utfs.io/f/1e949f90-4f34-44d0-9edd-c866d44a5918-7gjstv.jpg"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "provide-food-for-canaries-eggfood",
			options: {
				create: [
					{
						id: 36,
						name: "1 kg",
						price: 10490,
						stock: 1,
						discount: 0,
					},
					{
						id: 37,
						name: "5 kg",
						price: 41990,
						stock: 4,
						discount: 0,
					},
				],
			},
		},
	})
	const product20 = await prisma.product.create({
		data: {
			brand: { connect: { id: cedeBrand.id } },
			category: { connect: { id: birdFoodCategory.id } },
			sku: "CEDE-BIRD-FOOD-EGGFOOD-RED-EGG",
			petType: ["BIRD"],
			name: "Cede Bird Food Eggfood Red Egg",
			miniDesc: "Food supplement for colorful canaries and domestic birds that have a red factor.",
			description: JSON.stringify([
				{
					title: "General description",
					content:
						"CéDé® egg food red is a food supplement for colorful canaries and domestic birds that have a red factor. The processing of whole eggs makes CéDé® unique! Egg protein is an easily ingestible and optimally usable source of animal protein for birds. CéDé® egg food contains high-grade proteins, both animal and vegetable, all the vitamins, amino acids, minerals and micronutrients necessary for successful reproduction. Adding essential amino acids increases shedding. To obtain a deep red color, CéDé® Carored should be added to the egg or drinking water during the breeding and molting period. Attention: the egg food is not red!",
				},
				{
					title: "Characteristics",
					content:
						"Made with natural ingredients. \\n High content of animal and vegetable protein. \\n Contains vitamins, minerals, trace elements and natural coloring agents. \\n It has essential amino acids, such as lysine and \\n methionine for proper functioning of birds \\n Food supplement for colored or red factor canaries.",
				},
				{
					title: "Use",
					content:
						"Relax with a few drops of water, sprouted seeds, etc. \\n \\n\nRest period \\n\n2 to 3 times a week ¼ of the daily serving of CéDé® egg food.\n\\n \\n\nBreeding period \\n \nFeed CéDé® egg food daily, if possible 2 to 3 times a day, as needed. From the moment the birds can eat independently, ¼ of the daily ration of CéDé® egg food daily.\n\\n \\n\nMolting period \\n\n¼ of the daily serving of CéDé® egg food daily.\n\\n \\n\nBetter before \\n\n12 months after production date; See date (and lot number) on the packaging. Keep dry and cool",
				},
				{
					title: "Guaranteed Analysis",
					content:
						"Crude Protein 16% \\n \nCrude Fat 7.9% \\n \nCrude Fiber 3% \\n \nHumidity 10% \\n \nRaw Ash 4.6% \\n \nCalcium 0.9% \\n \nPhosphorus 0.4% \\n \nSodium 0.5% \\n \nmagnesium 0.01%",
				},
			]),
			images: ["https://utfs.io/f/6bc8b34b-903e-4687-a72a-437513778390-wibeai.jpg"],
			lifeStage: "ALL_LIFE_STAGES",
			slug: "cede-bird-food-eggfood-red-egg",
			options: {
				create: [
					{
						id: 38,
						name: "1 kg",
						price: 9990,
						stock: 2,
						discount: 0,
					},
					{
						id: 39,
						name: "5 kg",
						price: 46990,
						stock: 4,
						discount: 0,
					},
				],
			},
		},
	})

	console.log("Seeding complete.")
}

;(() => {
	if (process.env.NODE_ENV === "production") return

	main()
})()
