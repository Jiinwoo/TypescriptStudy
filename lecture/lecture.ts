interface Player {
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Card[]
    heroData: Card | null
    fieldData: Card[];
    chosenCard: Card | null;
    chosenCardData: Card | null;
}

const opponent: Player = {
    hero: document.getElementById('rival-hero') as HTMLDivElement,
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-field') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
}

const me: Player = {
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('me-deck'),
    field: document.getElementById('me-field'),
    cost: document.getElementById('me-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
}