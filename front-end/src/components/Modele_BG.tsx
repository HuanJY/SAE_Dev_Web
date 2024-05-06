// ModeleCouleurs.ts

export interface ButtonData {
    text: string;
    image?: string; // Chemin d'accès à l'image
}

export const modeleClassique: ButtonData[] = [
    { text: 'black' }, { text: 'white' }, { text: 'blue' }, { text: 'green' }, { text: 'red' }, { text: 'yellow' },
    { text: 'orange' }, { text: 'purple' }, { text: 'pink' }, { text: 'tan' }, { text: 'brown' }, { text: 'grey' }
];

export const modeleSpeciale: ButtonData[] = [
    { text: 'OsakaP', image: "./Modele_BG/OsakaPlane.jpg" },
    { text: 'OsakaM', image: "./Modele_BG/OsakaMexico.jpg" },
    { text: 'OsakaF', image: "./Modele_BG/OsakaFishing.jpg" },
    { text: 'OsakaC', image: "./Modele_BG/OsakaCartoon.jpg" },
    { text: 'OsakaS', image: "./Modele_BG/OsakaSleep.jpg" },
    { text: 'ChiyoC', image: "./Modele_BG/ChiyoCry.jpg" },
    { text: 'KaorinB', image: "./Modele_BG/KaorinBlush.jpg" }
];

export const colors: Record<string, string> = {
    black: '#000000',
    white: '#FFFFFF',
    blue: '#0000FF',
    green: '#008000',
    red: '#FF0000',
    yellow: '#FFFF00',
    orange: '#FFA500',
    purple: '#800080',
    pink: '#FFC0CB',
    tan: '#D2B48C',
    brown: '#A52A2A',
    grey: '#808080',
};

export const getColorForText = (text: string): string => {
    return colors[text] || colors.white; // Retourne la couleur associée au texte ou blanc par défaut
};
