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
