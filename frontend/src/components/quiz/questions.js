export const catQuestions = [
    {
        title: 'Size', description: `Choose the size of your cat.`,
        options: [{ image: "/cat-size-small.png", text: "SMALL", alt: "Small sized cat" }, { image: "/cat-size-medium.png", text: "MEDIUM", alt: "Medium sized cat" }, { image: "/cat-size-large.png", text: "LARGE", alt: "Large sized cat" }, { image: "/question-mark-cat.PNG", text: "ANY SIZE", alt: "Open to any size cat", style: true }],
        optionsType: "slider"
    },
    {
        title: 'Coat Length', description: `Choose the coat length for your cat.`,
        options: [{ image: "/short-haired.PNG", text: "SHORT HAIRED", alt: "Short haired cat", style: true }, { image: "/semi-long-haired.PNG", text: "SEMI LONG HAIRED", alt: "Semi Long Haired cat", style: true }, { image: "/long-haired.PNG", text: "LONG HAIRED", alt: "Long Haired cat", style: true }, { image: "/hairless.PNG", text: "HAIRLESS", alt: "Hairless cat", style: true }, { image: "/question-mark-cat.PNG", text: "ANY LENGTH", alt: "Open to any hair length for a cat", style: true }]
    },
    {
        title: 'Grooming', description: `How much time would you like to spend grooming your cat? Fluffy cats require more grooming`,
        options: [{ image: "/grooming-0.png", text: "Never", alt: "Never or barely groom the cat" }, { image: "/grooming-1.png", text: "Once per week", alt: "Groom the cat once per week" }, { image: "/grooming-2.png", text: "Two to three times per week", alt: "Groom the cat twice to three times per week" }, { image: "/grooming-everyday.png", text: "Everyday", alt: "Groom the cat every day" }],
        optionsType: "slider"
    },
    {
        title: 'Shedding',
        description: `How much can you tolerate shedding? You'll need to deal with some level of hair on your clothes and in your house. However, shedding varies depending on the breed. If you like to play with balls of fluff, then max out that meter!`,
        images: ["/Mocha.PNG", "/Mocha.PNG"]
    },
    {
        title: 'Playfulness',
        description: `Are you looking for a fun and playful cat to add to your family? Some cats are always ready to play with their mouse-toy, while others are more relaxed and laid-back. Think about how much time you have to play with your cat each day, and if you have other family members or other pets who can join in the fun.`,
        images: ["/Mocha.PNG", "/Mocha.PNG"]
    },
    {
        title: 'Vocalization',
        description: `How "talkative" would you like your cat to be? Do you prefer your cat to be vocal when it wants attention? Or do you prefer the silent type?`,
        images: ["/Mocha.PNG", "/Mocha.PNG"]
    },
    {
        title: 'Affection',
        description: `Some cats bond closely to one person and are indifferent towards everyone else, and some others shower the family with love affection. How affectionate would you like your cat to be?`,
        images: ["/Mocha.PNG", "/Mocha.PNG"]
    },
];

export const dogQuestions = [
    {
        title: 'Size',
        description: ``
    },
    {
        title: 'Shedding',
        description: `How much can you tolerate shedding? You'll need to deal with some level of hair on your clothes and in your house. However, shedding varies depending on the breed. If you like to play with balls of fluff, then max out that meter!`
    },
    {
        title: 'Playfulness',
        description: `Are you looking for a fun and playful pup to add to your family? Some dogs are always ready for a game of fetch or tag, while others are more relaxed and laid-back. Think about how much time you have to play with your pup each day, and if you have other family members or other pets who can join in the fun.`
    },
    {
        title: 'Vocalization',
        description: `How "talkative" would you like your dog to be? Do you prefer your dog to be vocal when it wants attention? Or do you prefer the silent type?`
    },
    {
        title: 'Affection',
        description: `Some dogs bond closely to one person and are indifferent towards everyone else, and some others shower the family with love affection. How affectionate would you like your dog to be?`
    },
];