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
        title: 'Grooming', description: `How much time would you like to spend grooming your cat? Fluffy cats require more grooming. You'll need to deal with some level of hair on your clothes and in your house. However, shedding varies depending on the breed.`,
        options: [{ image: "/grooming-0.png", text: "NEVER", alt: "Never or barely groom the cat" }, { image: "/grooming-1.png", text: "ONCE PER WEEK", alt: "Groom the cat once per week" }, { image: "/grooming-2.png", text: "TWO TO THREE TIMES PER WEEK", alt: "Groom the cat twice to three times per week" }, { image: "/grooming-everyday.png", text: "EVERYDAY", alt: "Groom the cat every day" }],
        optionsType: "slider"
    },
    {
        title: 'Playfulness',
        description: `How active are you looking for your cat to be? Some cats are always ready to play, while others are more relaxed and laid-back. Think about how much time you have to play with your cat each day, and if you have other family members or other pets who can join in on the fun.`,
        options: [{ image: "/active-low.png", text: "LOW", alt: "Low level of playfullness in a cat preferred" }, { image: "/active-medium.png", text: "MEDIUM", alt: "Medium level of playfullness in a cat preferred" }, { image: "/active-high.png", text: "HIGH", alt: "High level of playfullness in a cat preferred" }, { image: "/question-mark-cat.PNG", text: "ANY AMOUNT", alt: "Any amount of playfullness in a cat preferred" }],
        optionsType: "slider"
    },
    {
        title: 'Vocalization',
        description: `How "talkative" would you like your cat to be? Do you prefer your cat to be vocal when it wants attention? Or do you prefer the silent type?`,
        options: [{ image: "/talkative-no.png", text: "NON-VOCAL", alt: "A non-talkative cat preferred", style: true }, { image: "/talkative-yes.png", text: "VOCAL", alt: "A talkatative cat preferred", style: true }],
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