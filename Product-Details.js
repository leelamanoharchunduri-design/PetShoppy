document.addEventListener("DOMContentLoaded", () => {

    const products = {
        p1: {
            name: "Premium Dog Food",
            category: "Dog Food",
            pet: "Dogs",
            price: 799,
            weight: "3 kg pack",
            rating: 4.8,
            reviews: 124,
            code: "PET-DOG-001",
            image: "Dog Food.jpeg",
            shortDescription:
                "A daily food option for adult dogs, designed to make everyday feeding convenient.",
            description:
                "Premium Dog Food is presented as an everyday meal option for adult dogs. Its convenient pack format makes it easy to store and serve. Check the product packaging for the complete ingredient list, nutritional analysis, feeding guide and age suitability before use. Introduce any new food gradually and provide fresh drinking water.",
            features: [
                "Convenient 3 kg pack",
                "Designed for adult dogs",
                "Suitable for routine feeding when matched to your dog's needs",
                "Easy-to-store packaging",
                "Refer to the label for ingredients and nutritional values"
            ],
            care:
                "Store in a cool, dry place and keep the pack sealed after opening. Follow the feeding instructions printed on the actual product packaging. Confirm suitability with a veterinarian if your dog has special dietary needs."
        },

        p2: {
            name: "Healthy Cat Food",
            category: "Cat Food",
            pet: "Cats",
            price: 599,
            weight: "2 kg pack",
            rating: 4.7,
            reviews: 98,
            code: "PET-CAT-002",
            image: "Cat Food.jpeg",
            shortDescription:
                "An everyday cat-food option in a convenient pack for regular feeding routines.",
            description:
                "Healthy Cat Food is listed as a convenient everyday food option for cats. The product pack makes storage and serving straightforward. Always check the actual label for ingredients, nutritional information, life-stage suitability and feeding instructions. Provide clean drinking water alongside meals.",
            features: [
                "Convenient 2 kg pack",
                "Designed for cats",
                "Suitable for everyday feeding when appropriate to the cat",
                "Easy-to-store pack",
                "Check the label for complete nutritional information"
            ],
            care:
                "Keep the food in a cool, dry place and close the pack after each use. Follow the manufacturer's feeding guide and check that the food is suitable for your cat's age and dietary needs."
        },

        p3: {
            name: "Rope Chew Toy",
            category: "Dog Toys",
            pet: "Dogs",
            price: 349,
            weight: "Approx. 0.15 kg",
            rating: 4.6,
            reviews: 76,
            code: "PET-DOG-003",
            image: "Dog Toy.jpeg",
            shortDescription:
                "A rope-style play accessory for interactive games and supervised playtime.",
            description:
                "The Rope Chew Toy is designed for interactive play between dogs and their owners. Its rope-style form makes it suitable for supervised games such as gentle tug and fetch. Toy durability depends on the dog's size, chewing habits and play style. This is a play accessory, not a food item.",
            features: [
                "Rope-style toy design",
                "For interactive play",
                "Suitable for supervised play sessions",
                "Easy to pick up and store",
                "Inspect regularly for wear and loose fibres"
            ],
            care:
                "Use under supervision. Remove the toy if it becomes damaged or starts coming apart. Choose a toy size appropriate for your dog."
        },

        p4: {
            name: "Interactive Cat Toy",
            category: "Cat Toys",
            pet: "Cats",
            price: 299,
            weight: "Approx. 0.10 kg",
            rating: 4.5,
            reviews: 63,
            code: "PET-CAT-004",
            image: "Cat Toy.jpeg",
            shortDescription:
                "A play accessory intended to encourage active and engaging play sessions for cats.",
            description:
                "Interactive Cat Toy is a play accessory for cats. It can be included in short play sessions to provide variety and encourage engagement. The exact play method depends on the toy design shown in the product image. Check the item for small detachable parts before each session.",
            features: [
                "Designed for cat playtime",
                "Encourages interactive activity",
                "Compact and easy to store",
                "Suitable for supervised play",
                "Check for loose or damaged parts regularly"
            ],
            care:
                "Use under supervision and store safely after play. Replace the toy if it becomes damaged or has loose parts."
        },

        p5: {
            name: "Comfort Dog Bed",
            category: "Dog Bedding",
            pet: "Dogs",
            price: 1299,
            weight: "Approx. 1.5 kg",
            rating: 4.8,
            reviews: 112,
            code: "PET-DOG-005",
            image: "Dog Bed.jpeg",
            shortDescription:
                "A dedicated resting space designed to give dogs a comfortable place to relax.",
            description:
                "Comfort Dog Bed provides a designated resting area for your dog. Consider your dog's sleeping position and measurements when choosing a bed. The displayed weight is an approximate catalogue value; actual weight, dimensions, fabric and washing instructions should be confirmed from the supplier.",
            features: [
                "Designed as a dog resting space",
                "Suitable for home use",
                "Choose a size that accommodates your dog",
                "Place on a clean, flat surface",
                "Check the product label for cleaning instructions"
            ],
            care:
                "Keep the bed clean and dry. Follow the manufacturer's washing instructions and inspect seams and fabric periodically."
        },

        p6: {
            name: "Soft Cat Cushion",
            category: "Cat Bedding",
            pet: "Cats",
            price: 999,
            weight: "Approx. 0.8 kg",
            rating: 4.7,
            reviews: 84,
            code: "PET-CAT-006",
            image: "Cat Bed.jpeg",
            shortDescription:
                "A soft resting cushion for cats to use in a quiet and comfortable spot.",
            description:
                "Soft Cat Cushion is intended to create a dedicated resting place for cats. Place it in a familiar, quiet area of your home. The approximate weight is for catalogue display only; verify the actual measurements, filling and fabric details with the supplier.",
            features: [
                "Designed for cats",
                "Convenient resting cushion",
                "Suitable for indoor placement",
                "Easy to move around the home",
                "Check the care label before washing"
            ],
            care:
                "Keep the cushion dry and clean. Follow the product's care label for washing and drying. Inspect the seams and outer fabric regularly."
        },

        p7: {
            name: "Pet Grooming Brush",
            category: "Dog Grooming",
            pet: "Dogs",
            price: 449,
            weight: "Approx. 0.20 kg",
            rating: 4.6,
            reviews: 71,
            code: "PET-DOG-007",
            image: "Grooming Brush.jpeg",
            shortDescription:
                "An everyday grooming accessory for routine coat care.",
            description:
                "Pet Grooming Brush is an accessory for regular coat-care routines. Select a brushing approach suitable for your dog's coat type and use gentle strokes. The brush design and suitability should be checked against the actual product before use.",
            features: [
                "Everyday grooming accessory",
                "Designed for dog coat care",
                "Lightweight catalogue item",
                "Suitable for routine grooming",
                "Clean the brush after use"
            ],
            care:
                "Use gently and avoid applying excessive pressure. Clean away collected hair after each session. Stop if your pet appears uncomfortable."
        },

        p8: {
            name: "Cat Grooming Kit",
            category: "Cat Grooming",
            pet: "Cats",
            price: 399,
            weight: "Approx. 0.25 kg",
            rating: 4.5,
            reviews: 59,
            code: "PET-CAT-008",
            image: "Cat Grooming.jpeg",
            shortDescription:
                "A grooming accessory set for routine cat coat-care sessions.",
            description:
                "Cat Grooming Kit is presented as a collection of basic grooming accessories for cats. The exact contents should be confirmed from the actual kit packaging. Introduce grooming gradually and choose tools that are appropriate for your cat's coat and comfort.",
            features: [
                "Grooming accessory kit",
                "Designed for cats",
                "For routine coat-care sessions",
                "Store accessories together",
                "Check the kit contents before purchase"
            ],
            care:
                "Use each included tool according to its instructions. Clean and dry accessories after use and store them safely."
        },

        p9: {
            name: "Small Pet Food",
            category: "Small Pet Food",
            pet: "Suitable small pets - check the label",
            price: 499,
            weight: "1 kg pack",
            rating: 4.6,
            reviews: 48,
            code: "PET-SMALL-009",
            image: "Small Pet Food.jpeg",
            shortDescription:
                "A food product listing for small pets. Confirm the intended animal species on the packaging.",
            description:
                "Small Pet Food is listed for small pets, but different animals have different dietary requirements. Before purchase or feeding, verify the intended species, ingredients, nutritional information and feeding instructions on the actual product label. Do not assume one food is suitable for every small pet.",
            features: [
                "Convenient 1 kg catalogue pack",
                "Small-pet food listing",
                "Check the species suitability on the pack",
                "Follow the manufacturer's feeding instructions",
                "Store according to label directions"
            ],
            care:
                "Only feed this product if its packaging confirms that it is suitable for your pet's species and age. Store as directed on the label and provide appropriate fresh water."
        },

        p10: {
            name: "Small Pet Play Toy",
            category: "Small Pet Toys",
            pet: "Suitable small pets - check the toy label",
            price: 249,
            weight: "Approx. 0.08 kg",
            rating: 4.4,
            reviews: 37,
            code: "PET-SMALL-010",
            image: "Small Pet Toy.jpeg",
            shortDescription:
                "An enrichment toy listing for small pets, with suitability depending on the animal and toy design.",
            description:
                "Small Pet Play Toy is listed as an enrichment accessory. Small pets vary in size and behaviour, so check the toy's dimensions, materials and intended animal before use. Choose an item without unsuitable detachable pieces or damaged components.",
            features: [
                "Small-pet toy listing",
                "For suitable supervised enrichment",
                "Compact catalogue item",
                "Check material and size suitability",
                "Inspect regularly for damage"
            ],
            care:
                "Use only if the toy is suitable for your pet's species and size. Supervise use and remove the toy if it becomes damaged."
        },

        p11: {
            name: "Small Pet Cozy Bedding",
            category: "Small Pets Bedding",
            pet: "Suitable small pets - check the label",
            price: 499,
            weight: "Approx. 0.30 kg",
            rating: 4.5,
            reviews: 42,
            code: "PET-SMALL-011",
            image: "Small Pet Bedding.jpeg",
            shortDescription:
                "A bedding accessory listing for suitable small pets.",
            description:
                "Small Pet Cozy Bedding is intended as a resting accessory for appropriate small pets. Check the material, dimensions and species suitability before use. The bedding should fit the animal's enclosure and be suitable for its normal habits.",
            features: [
                "Small-pet bedding accessory",
                "For suitable enclosure setups",
                "Check dimensions before purchase",
                "Choose materials appropriate to the animal",
                "Keep the resting area clean and dry"
            ],
            care:
                "Follow the supplier's cleaning instructions. Replace bedding when it becomes wet, soiled or damaged."
        },

        p12: {
            name: "Small Pet Grooming Brush",
            category: "Small Pets Grooming",
            pet: "Suitable small pets - check the label",
            price: 299,
            weight: "Approx. 0.12 kg",
            rating: 4.4,
            reviews: 31,
            code: "PET-SMALL-012",
            image: "Small Pet Grooming.jpeg",
            shortDescription:
                "A grooming brush listing for small pets where the brush design is suitable.",
            description:
                "Small Pet Grooming Brush is listed as a coat-care accessory. Small pets have different grooming needs, so confirm that the brush is designed for your animal and its coat type. Use gentle handling and follow suitable grooming guidance.",
            features: [
                "Small-pet grooming accessory",
                "For suitable coat-care routines",
                "Lightweight catalogue item",
                "Check brush design and size",
                "Clean after each use"
            ],
            care:
                "Use only if suitable for your pet's species and coat. Brush gently, clean the tool after use and stop if your pet appears uncomfortable."
        },

            // P13 - Adjustable Dog Harness
    p13: {
        name: "Adjustable Dog Harness",
        category: "Accessories",
        pet: "Dog",
        price: 699,
        weight: "1 piece",
        rating: 4.5,
        reviews: 28,
        code: "PS-P13",
        image: "https://images.openai.com/static-rsc-4/d7sYUTjoU4mqlitxc5sJl99mHy5yVjBfl25MJ2OvibPPwc613bMH_2J_KBHKNp1IecMI5aSOOOooydbnFSemEbC4L-TAqa9nx7BJdtdnj5khvvKgW6ajNl34iAxFUTSleCVxiKWiJFSzkb7vki4XUKuM2GEeShPKZo5aDbpsK7PXZJbY32diDfNDfx_zGKbM?purpose=fullsize",
        shortDescription: "A comfortable adjustable harness for everyday dog walks.",
        description: "The Adjustable Dog Harness is designed to provide a comfortable fit for your dog during walks and outdoor activities.",
        features: [
            "Adjustable straps",
            "Comfortable design",
            "Easy to wear",
            "Suitable for everyday walks"
        ],
        care: "Check the fit before use. Clean with a damp cloth when needed."
    },

    // P14 - Stainless Steel Dog Bowl
    p14: {
        name: "Stainless Steel Dog Bowl",
        category: "Food",
        pet: "Dog",
        price: 299,
        weight: "1 piece",
        rating: 4.6,
        reviews: 32,
        code: "PS-P14",
        image: "https://images.openai.com/static-rsc-4/nHOsssvsAg-pmBeVxH4hhr-IsHu0wNZhOpPGTWSj6P_LYiXyv0RjQlzXzdaHrhhW9vl-UFS8mSxyylSzOZsINEbo0uwGFgFZ41ibOWkgz4blfnbbKz7i59eKtLuYFNukZWbZacwlgYr8vLShp731-T4_zIoHqOsYA73VFz6Ud6eutM8EIC0pb9hw932-62rl?purpose=fullsize",
        shortDescription: "A durable stainless steel bowl for food and water.",
        description: "This stainless steel dog bowl is designed for everyday feeding and drinking. Its simple design makes cleaning convenient.",
        features: [
            "Stainless steel construction",
            "Easy to clean",
            "Suitable for food and water",
            "Reusable design"
        ],
        care: "Wash with pet-safe dish soap and dry after cleaning."
    },

    // P15 - Puppy Training Pads
    p15: {
        name: "Puppy Training Pads",
        category: "Grooming",
        pet: "Dog",
        price: 399,
        weight: "Pack",
        rating: 4.5,
        reviews: 25,
        code: "PS-P15",
        image: "https://images.openai.com/static-rsc-4/bfzZ06wVCg1v-OlGyurowNdGNv3qQuFqkZKVSjan6lX5izZ1c4LD24nLxjl5vp6E8BVPfuLaRcbhE8HIGAymp0dmue-WWoMJPNTaSayYrwUsNkXUnBDaXznz-ssjdGokml799QIDd8so_sJz2y8La6xcXO0FleUoqlTVlBRuAvYISw87V_dxpBzlNS0_CGB5?purpose=fullsize",
        shortDescription: "Convenient absorbent pads for puppy training.",
        description: "Puppy Training Pads help create a designated indoor potty area and make everyday puppy care more convenient.",
        features: [
            "Absorbent pad design",
            "Convenient for indoor use",
            "Disposable after use",
            "Useful for puppy training"
        ],
        care: "Replace used pads regularly and dispose of them responsibly."
    },

    // P16 - Gentle Dog Shampoo
    p16: {
        name: "Gentle Dog Shampoo",
        category: "Grooming",
        pet: "Dog",
        price: 349,
        weight: "Bottle",
        rating: 4.5,
        reviews: 30,
        code: "PS-P16",
        image: "https://images.openai.com/static-rsc-4/RvfkfwHIU48RDH9se2U3vcBs0JKkErdQQ7Oz4RCzZfvOQONfrbTkYFf890d2Ts_x8opBK3krmHP9ThxgUrWw9ZnmsdjI4ZsFr9xqxbdF9sfnAxTijxVpA0TLrnwMYvnfRE--VYE5_0EzcUlGfwQlE2x340LSM1C8_WWz3ZzpDO0PuA6ucAiQEG3hnARG-Ttx?purpose=fullsize",
        shortDescription: "A gentle shampoo for your dog's regular grooming routine.",
        description: "Gentle Dog Shampoo is intended for routine coat cleaning. Follow the product label for suitable use and precautions.",
        features: [
            "Designed for dog grooming",
            "Convenient bottle packaging",
            "Suitable for routine coat cleaning",
            "Easy-to-use format"
        ],
        care: "Use only as directed on the label. Avoid contact with your dog's eyes."
    },

    // P17 - Cat Scratching Post
    p17: {
        name: "Cat Scratching Post",
        category: "Toys",
        pet: "Cat",
        price: 899,
        weight: "1 piece",
        rating: 4.7,
        reviews: 36,
        code: "PS-P17",
        image: "https://images.openai.com/static-rsc-4/JbHn5jfVI9CnJqbsX99DUbIM6m-_m2HH7UGi7BvvH9LcbyoyQgYePDFcCM48exEIY33kKT4-rlz1_JNpSjUbh2XZitFN9o_nFxGXE9ryj6c2Q86r660s0_Pie5vAJxOBrBzPTOh3UDr7r4KmYJOBukLG34zLvO1Y4yA4RZffxEdkhEdY0EOsO0n03yefHXZE?purpose=fullsize",
        shortDescription: "A scratching post for your cat's everyday play and enrichment.",
        description: "The Cat Scratching Post provides a dedicated scratching and play area for indoor cats.",
        features: [
            "Scratching surface",
            "Designed for indoor cats",
            "Supports everyday enrichment",
            "Compact pet accessory"
        ],
        care: "Place on a stable surface and check regularly for wear."
    },

    // P18 - Cat Litter Box
    p18: {
        name: "Cat Litter Box",
        category: "Grooming",
        pet: "Cat",
        price: 599,
        weight: "1 piece",
        rating: 4.5,
        reviews: 29,
        code: "PS-P18",
        image: "https://images.openai.com/static-rsc-4/aDf-0TUx6LyEyXgkaQZ1gX06p7L-bNGh7ZZuNOv7ddn8FnYWDnudmtdbGEA8wdDgYl3fSi10cRtbBw1h4p6LAm0SK3Lf8IaAwhnjZ46hZddg-5hxruAswWGdOIvyEMVLaRoIQOyFSFOdzkmObKD5O4Uj6HSAzziScidX2ETYjzLR8398GHeRLCLPGbToBRB-?purpose=fullsize",
        shortDescription: "A convenient litter box for your cat's daily needs.",
        description: "This Cat Litter Box provides a designated area for your cat and is designed for convenient everyday cleaning.",
        features: [
            "Practical design",
            "Easy to maintain",
            "Suitable for indoor use",
            "Everyday cat-care accessory"
        ],
        care: "Remove waste regularly and clean the box as needed."
    },

    // P19 - Feather Wand Cat Toy
    p19: {
        name: "Feather Wand Cat Toy",
        category: "Toys",
        pet: "Cat",
        price: 199,
        weight: "1 piece",
        rating: 4.6,
        reviews: 34,
        code: "PS-P19",
        image: "https://images.openai.com/static-rsc-4/QxyuE08U9lWbh_hT9SLtG44eiIwUbGyyA5J2Jw9___kYJ-Xh7kiH6BgpRk_1DpcqvRX7J525RL1FC8QvG-aso72HnYwS-7u5PCpWutjr-qfteySiuuiDTZeJie9ix2_unfAmx5cUZKaekjLXwGZ5DLiqZBMjUR9BTfd4tlhTjVKOoCmg7l9owWJQf4SmjC29?purpose=fullsize",
        shortDescription: "An interactive feather wand for supervised cat play.",
        description: "The Feather Wand Cat Toy encourages interactive play and provides an engaging activity for your cat.",
        features: [
            "Feather attachment",
            "Interactive play design",
            "Lightweight wand",
            "Encourages activity"
        ],
        care: "Use under supervision and inspect regularly for loose or damaged parts."
    },

    // P20 - Cat Food Bowl
    p20: {
        name: "Cat Food Bowl",
        category: "Food",
        pet: "Cat",
        price: 249,
        weight: "1 piece",
        rating: 4.5,
        reviews: 27,
        code: "PS-P20",
        image: "https://images.openai.com/static-rsc-4/NqhxoixR06FxEtHtZWOjkTwQXheuLBylEQAbcNCLdvy-Lgy77EwoTGqNetk4ST9f7wRkDhjDbPRh8bQ1YkSTwf-Q-0eO9GaCUyrD47HguukSyrAxmf33oCgKoTVaSE_yIgGojFwbMJ9nx3oK_TYeiBWoG6VNMcwS9l4SQYfl-QJNWjcQH45oD9EWaY-HKbqO?purpose=fullsize",
        shortDescription: "A practical bowl for your cat's daily meals.",
        description: "The Cat Food Bowl is an everyday feeding accessory designed for serving your cat's food conveniently.",
        features: [
            "Practical feeding design",
            "Reusable",
            "Easy to clean",
            "Suitable for everyday meals"
        ],
        care: "Wash regularly and dry before storing."
    },

    // P21 - Rabbit Food Mix
    p21: {
        name: "Rabbit Food Mix",
        category: "Food",
        pet: "Small Pet",
        price: 349,
        weight: "Pack",
        rating: 4.6,
        reviews: 31,
        code: "PS-P21",
        image: "https://images.openai.com/static-rsc-4/m5JIdrKkyWl9wmntMPOxic6jt0LMFJRaIh4Azj-wfLF-Krr4WPPRThFNgem-Exoys2dNq0DEDcqZjgJWbWFRFdIaPeFSRjYffXN4BjaEyATPHUiIG6ugVHXEfi0oO8SEqOfz10mitIwRzV0RbchocHiTnUwAPVrR18rrm8oWcR9Y3Q-hWu4s3YS5LCKbIvlP?purpose=fullsize",
        shortDescription: "A packaged food mix for rabbits.",
        description: "Rabbit Food Mix is a convenient packaged feeding option. Check the product label to confirm suitability and feeding guidance for your rabbit.",
        features: [
            "Packaged food mix",
            "Convenient storage",
            "Designed for rabbits",
            "Easy-to-serve format"
        ],
        care: "Store in a cool, dry place and follow the package feeding instructions."
    },

    // P22 - Hamster Exercise Wheel
    p22: {
        name: "Hamster Exercise Wheel",
        category: "Toys",
        pet: "Small Pet",
        price: 299,
        weight: "1 piece",
        rating: 4.6,
        reviews: 33,
        code: "PS-P22",
        image: "https://images.openai.com/static-rsc-4/SIF__KPtp9Hqiijrw2W94w_3e8sXJ8t-7Vilb1JkDUDb-kJdjYT-r6Xz6mmAEWtorsv0zo84eIvPa1Jl0xcEeKTufr7fQ3RxFIFSRuQojYW25hNzWGz7ryzuVHczPxy9AC4pzzdrEMA-KXePNXkSUkU2wUFj3pPLoy9jjohVg70?purpose=inline",
        shortDescription: "An exercise wheel designed for suitable small pets.",
        description: "The Hamster Exercise Wheel provides an activity option for hamsters. Choose a wheel size and design appropriate for your pet.",
        features: [
            "Exercise wheel design",
            "Suitable for compatible small pets",
            "Designed for everyday enrichment",
            "Compact accessory"
        ],
        care: "Check stability and condition regularly. Ensure the wheel is appropriately sized for your pet."
    },

    // P23 - Small Pet Water Bottle
    p23: {
        name: "Small Pet Water Bottle",
        category: "Food",
        pet: "Small Pet",
        price: 199,
        weight: "1 piece",
        rating: 4.5,
        reviews: 26,
        code: "PS-P23",
        image: "https://images.openai.com/static-rsc-4/A8OtWYkXP86RvHvjB3qQYfn2Lyuk3pS_orlL0iAIPDMrDsM5B25AyXP86vrJhyccYyDcDnlVaHPTLUcaMede13f9lHkCu96YPGsjovOby7s_b8rg1pv8d4mnqMkSXOXHmAyp-hs0PlYOYugU8xC71s--HfaBgnd2O6s7OXSvBJ9OzVDp0IMamGPJSd-OuO-L?purpose=fullsize",
        shortDescription: "A water bottle for suitable small pets.",
        description: "The Small Pet Water Bottle provides a convenient way to make drinking water available to compatible small pets.",
        features: [
            "Water bottle design",
            "Convenient cage attachment",
            "Drinking nozzle",
            "Reusable accessory"
        ],
        care: "Refill with fresh water daily and clean regularly. Check that the nozzle works properly."
    },

    // P24 - Small Pet Carrier
    p24: {
        name: "Small Pet Carrier",
        category: "Bedding",
        pet: "Small Pet",
        price: 799,
        weight: "1 piece",
        rating: 4.7,
        reviews: 35,
        code: "PS-P24",
        image: "https://images.openai.com/static-rsc-4/eqKPNvMVKsv7YzMWVWYqx-FCpt915vRZwyTAjJb0uW7ZDxFoJ6KDrbRJznHCeXqaZ6jMqALFGYZuv8DkaqnixTyWv0IvVxlxDCngiQ3OtlQwjelHNFEOdqTZTvyqGh0CZKc3JROSwCa4415miDM3Q-fRQo2Kj1WndlWCf29I-JhBmIJcO_uvPcARZS8bXUL6?purpose=fullsize",
        shortDescription: "A carrier for convenient small pet transport.",
        description: "The Small Pet Carrier provides a designated space for transporting suitable small pets during short journeys.",
        features: [
            "Portable carrier design",
            "Ventilation openings",
            "Convenient carrying handle",
            "Designed for suitable small pets"
        ],
        care: "Clean regularly and check ventilation, closures and carrier size before use."
    }
    };

    
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = products[productId];

    const mainImage = document.getElementById("mainProductImage");
    const quantityInput = document.getElementById("productQuantity");
    const subtotalElement = document.getElementById("detailsSubtotal");
    const messageElement = document.getElementById("detailsMessage");

    const CART_KEY = "petshoppy-cart";

    // Fallback image if a product image cannot be loaded.
    const FALLBACK_IMAGE =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
                <rect width="100%" height="100%" fill="#f2f7f6"/>
                <text x="50%" y="48%" text-anchor="middle"
                    font-family="Arial" font-size="28" fill="#147D78">
                    PetShoppy
                </text>
                <text x="50%" y="58%" text-anchor="middle"
                    font-family="Arial" font-size="18" fill="#555">
                    Image Not Available
                </text>
            </svg>
        `);

    // Safely load cart data.
    function loadCart() {
        try {
            const savedCart = JSON.parse(localStorage.getItem(CART_KEY));
            return Array.isArray(savedCart) ? savedCart : [];
        } catch (error) {
            console.error("Unable to load cart:", error);
            return [];
        }
    }

    // Save cart data.
    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    // Update the cart count if a matching element exists on this page.
    function updateCartCount() {
        const cart = loadCart();

        const totalQuantity = cart.reduce((total, item) => {
            return total + Math.max(0, Number(item.quantity) || 0);
        }, 0);

        const countElements = document.querySelectorAll(
            "#cartCount, #cart-count, .cart-count, [data-cart-count]"
        );

        countElements.forEach(element => {
            element.textContent = totalQuantity;
        });
    }

    // Set an image with an automatic fallback.
    function setImageWithFallback(imageElement, imagePath) {
        imageElement.onerror = function () {
            this.onerror = null;
            this.src = FALLBACK_IMAGE;
        };

        imageElement.src = imagePath;
    }

    if (!product) {
        const detailsContainer = document.querySelector(
            ".product-details-container"
        );

        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <div class="product-not-found">
                    <h2>Product Not Found</h2>
                    <p>The requested product could not be found.</p>
                    <a href="Products.html" class="back-products-btn">
                        Back to Products
                    </a>
                </div>
            `;
        }

        return;
    }

    const money = amount =>
        "₹" + Number(amount).toLocaleString("en-IN");

    // Get a valid quantity between 1 and 10.
    function getQuantity() {
        let quantity = parseInt(quantityInput.value, 10);

        if (Number.isNaN(quantity)) {
            quantity = 1;
        }

        quantity = Math.max(1, Math.min(10, quantity));
        quantityInput.value = quantity;

        return quantity;
    }

    // Update product subtotal.
    function updateSubtotal() {
        const quantity = getQuantity();

        subtotalElement.textContent = money(
            product.price * quantity
        );
    }

    // Render product information.
    function renderProduct() {
        document.title = `${product.name} | PetShoppy`;

        document.getElementById("breadcrumbProduct").textContent =
            product.name;

        document.getElementById("detailsCategory").textContent =
            product.category;

        document.getElementById("detailsName").textContent =
            product.name;

        document.getElementById("detailsPrice").textContent =
            money(product.price);

        document.getElementById("detailsShortDescription").textContent =
            product.shortDescription;

        document.getElementById("detailsWeight").textContent =
            product.weight;

        document.getElementById("detailsPet").textContent =
            product.pet;

        document.getElementById("detailsCategoryName").textContent =
            product.category;

        document.getElementById("detailsCode").textContent =
            product.code;

        document.getElementById("detailsRating").textContent =
            `${product.rating.toFixed(1)} / 5`;

        document.getElementById("detailsReviews").textContent =
            `(${product.reviews} sample reviews)`;

        const roundedRating = Math.round(product.rating);

        document.getElementById("detailsStars").textContent =
            "★".repeat(roundedRating) +
            "☆".repeat(5 - roundedRating);

        // Main product image.
        mainImage.alt = product.name;
        setImageWithFallback(mainImage, product.image);

        // Product image gallery.
        const images = product.images || [product.image];

        const thumbnailGallery =
            document.getElementById("thumbnailGallery");

        thumbnailGallery.innerHTML = "";

        images.forEach((image, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className =
                "product-thumbnail" +
                (index === 0 ? " active" : "");

            button.setAttribute(
                "aria-label",
                `View product image ${index + 1}`
            );

            const thumbnail = document.createElement("img");

            thumbnail.alt =
                `${product.name} image ${index + 1}`;

            setImageWithFallback(thumbnail, image);

            button.appendChild(thumbnail);

            button.addEventListener("click", () => {
                setImageWithFallback(mainImage, image);

                document.querySelectorAll(".product-thumbnail")
                    .forEach(item => {
                        item.classList.remove("active");
                    });

                button.classList.add("active");
            });

            thumbnailGallery.appendChild(button);
        });

        // Product features.
        const features =
            document.getElementById("detailsFeatures");

        const descriptionFeatures =
            document.getElementById("descriptionFeatures");

        features.innerHTML = "";
        descriptionFeatures.innerHTML = "";

        product.features.forEach(feature => {
            const item1 = document.createElement("li");
            item1.textContent = feature;
            features.appendChild(item1);

            const item2 = document.createElement("li");
            item2.textContent = feature;
            descriptionFeatures.appendChild(item2);
        });

        // Product description and care instructions.
        document.getElementById("descriptionTitle").textContent =
            product.name;

        document.getElementById("detailsFullDescription").textContent =
            product.description;

        document.getElementById("detailsCare").textContent =
            product.care;

        // Product information table.
        document.getElementById("infoName").textContent =
            product.name;

        document.getElementById("infoCategory").textContent =
            product.category;

        document.getElementById("infoPet").textContent =
            product.pet;

        document.getElementById("infoWeight").textContent =
            product.weight;

        document.getElementById("infoRating").textContent =
            `${product.rating.toFixed(1)} / 5 (demo rating)`;

        document.getElementById("infoCode").textContent =
            product.code;

        updateSubtotal();
        updateCartCount();
    }

    // Decrease quantity.
    document.getElementById("decreaseQty").addEventListener(
        "click",
        () => {
            quantityInput.value = Math.max(
                1,
                getQuantity() - 1
            );

            updateSubtotal();
        }
    );

    // Increase quantity.
    document.getElementById("increaseQty").addEventListener(
        "click",
        () => {
            quantityInput.value = Math.min(
                10,
                getQuantity() + 1
            );

            updateSubtotal();
        }
    );

    // Handle manual quantity changes.
    quantityInput.addEventListener("input", updateSubtotal);
    quantityInput.addEventListener("change", updateSubtotal);

    // Add product to the shared cart.
    document.getElementById("detailsAddToCart").addEventListener(
        "click",
        () => {
            const quantity = getQuantity();

            const cart = loadCart();

            const existingItem = cart.find(
                item => item.id === productId
            );

            if (existingItem) {
                existingItem.quantity =
                    (Number(existingItem.quantity) || 0) + quantity;
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }

            try {
                saveCart(cart);
                updateCartCount();

                messageElement.textContent =
                    `${quantity} × ${product.name} added to your demo cart.`;

            } catch (error) {
                console.error("Unable to save cart:", error);

                messageElement.textContent =
                    "Unable to add this product. Please try again.";
            }
        }
    );

    // Initial rendering.
    renderProduct();


});
