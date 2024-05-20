export interface ButtonData {
    text: string;
    image?: string;
    background?: string;
}

export const modeleClassique: ButtonData[] = [
    { text: 'black' }, { text: 'bois' }, { text: 'brown' }, { text: 'chocolat' }, { text: 'citrouille' },
    { text: 'anthracite' }, { text: 'grey' }, { text: 'gris_clair' }, { text: 'bleu_clair' }, { text: 'lavande_clair' },
    { text: 'purple' }, { text: 'marron' }, { text: 'rouge_clair' }, { text: 'cramoisi' }, { text: 'red' }, 
    { text: 'bleu_marine' }, { text: 'blue' }, { text: 'cyan' }, { text: 'green' }, { text: 'vert_clair' },
    { text: 'lilas' }, { text: 'pink' }, {text: 'rose_clair' }, { text: 'rose_pâle' }, { text: 'abricot' },
    { text: 'sable' }, { text: 'tan' }, { text: 'kaki' }, { text: 'abricot_clair' }, { text: 'lavande' },
    { text: 'orange_foncé' }, { text: 'orange' }, { text: 'orange_clair' }, { text: 'dore' }, { text: 'jaune' },
    { text: 'or_clair' }, { text: 'jaune_clair' }, { text: 'beige' }, { text: 'ivoire' }, { text: 'white' }, 
];

export const modeleDegrade: ButtonData[] = [

    {text: 'bluePinks', background: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)'},
    {text: 'greenPinks', background: 'linear-gradient(to bottom, #66ffcc 0%, #ff9999 100%)'},
    {text: 'purpleYellows', background: 'linear-gradient(to bottom, #cc66ff 0%, #ffcc66 100%)'},
    {text: 'redOranges', background: 'linear-gradient(to bottom, #ff6666 0%, #ffcc99 100%)'},
    {text: 'orangeYellows', background: 'linear-gradient(to bottom, #ff9900 0%, #ffcc66 100%)'},
    {text: 'yellowGreens', background: 'linear-gradient(to bottom, #ffff66 0%, #99ff99 100%)'},
    {text: 'greenBlues', background: 'linear-gradient(to bottom, #66cc66 0%, #99ccff 100%)'},
    {text: 'bluePurples', background: 'linear-gradient(to bottom, #6699cc 0%, #cc99ff 100%)'},
    {text: 'purplePinks', background: 'linear-gradient(to bottom, #9966cc 0%, #ff99cc 100%)'},
    {text: 'pinkReds', background: 'linear-gradient(to bottom, #ff99cc 0%, #ff6666 100%)'},
    {text: 'cyanMagentas', background: 'linear-gradient(to bottom, #00ffff 0%, #ff00ff 100%)'},
    {text: 'magentaYellows', background: 'linear-gradient(to bottom, #ff00ff 0%, #ffff00 100%)'},
    {text: 'yellowCyans', background: 'linear-gradient(to bottom, #ffff00 0%, #00ffff 100%)'},
    {text: 'redGreens', background: 'linear-gradient(to bottom, #ff6666 0%, #99ff99 100%)'},
    {text: 'orangeBlues', background: 'linear-gradient(to bottom, #ff9900 0%, #99ccff 100%)'},
    {text: 'yellowPurples', background: 'linear-gradient(to bottom, #ffff66 0%, #cc99ff 100%)'},
    {text: 'blueReds', background: 'linear-gradient(to bottom, #6699cc 0%, #ff6666 100%)'},
    {text: 'pinkCyans', background: 'linear-gradient(to bottom, #ff99cc 0%, #00ffff 100%)'},
    {text: 'brownMagentas', background: 'linear-gradient(to bottom, #996633 0%, #ff00ff 100%)'},
    {text: 'grayYellows', background: 'linear-gradient(to bottom, #999999 0%, #ffff66 100%)'},
    {text: 'cyanOranges', background: 'linear-gradient(to bottom, #00ffff 0%, #ff9900 100%)'},
    {text: 'magentaBlues', background: 'linear-gradient(to bottom, #ff00ff 0%, #6699cc 100%)'},
    {text: 'yellowReds', background: 'linear-gradient(to bottom, #ffff00 0%, #ff6666 100%)'},

    {text: 'bluePink', background: 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)'},
    {text: 'greenPink', background: 'linear-gradient(to right, #66ffcc 0%, #ff9999 100%)'},
    {text: 'purpleYellow', background: 'linear-gradient(to right, #cc66ff 0%, #ffcc66 100%)'},
    {text: 'redOrange', background: 'linear-gradient(to right, #ff6666 0%, #ffcc99 100%)'},
    {text: 'orangeYellow', background: 'linear-gradient(to right, #ff9900 0%, #ffcc66 100%)'},
    {text: 'yellowGreen', background: 'linear-gradient(to right, #ffff66 0%, #99ff99 100%)'},
    {text: 'greenBlue', background: 'linear-gradient(to right, #66cc66 0%, #99ccff 100%)'},
    {text: 'bluePurple', background: 'linear-gradient(to right, #6699cc 0%, #cc99ff 100%)'},
    {text: 'purplePink', background: 'linear-gradient(to right, #9966cc 0%, #ff99cc 100%)'},
    {text: 'pinkRed', background: 'linear-gradient(to right, #ff99cc 0%, #ff6666 100%)'},
    {text: 'cyanMagenta', background: 'linear-gradient(to right, #00ffff 0%, #ff00ff 100%)'},
    {text: 'magentaYellow', background: 'linear-gradient(to right, #ff00ff 0%, #ffff00 100%)'},
    {text: 'yellowCyan', background: 'linear-gradient(to right, #ffff00 0%, #00ffff 100%)'},
    {text: 'redGreen', background: 'linear-gradient(to right, #ff6666 0%, #99ff99 100%)'},
    {text: 'orangeBlue', background: 'linear-gradient(to right, #ff9900 0%, #99ccff 100%)'},
    {text: 'yellowPurple', background: 'linear-gradient(to right, #ffff66 0%, #cc99ff 100%)'},
    {text: 'blueRed', background: 'linear-gradient(to right, #6699cc 0%, #ff6666 100%)'},
    {text: 'pinkCyan', background: 'linear-gradient(to right, #ff99cc 0%, #00ffff 100%)'},
    {text: 'brownMagenta', background: 'linear-gradient(to right, #996633 0%, #ff00ff 100%)'},
    {text: 'grayYellow', background: 'linear-gradient(to right, #999999 0%, #ffff66 100%)'},
    {text: 'cyanOrange', background: 'linear-gradient(to right, #00ffff 0%, #ff9900 100%)'},
    {text: 'magentaBlue', background: 'linear-gradient(to right, #ff00ff 0%, #6699cc 100%)'},
    {text: 'yellowRed', background: 'linear-gradient(to right, #ffff00 0%, #ff6666 100%)'}
];

export const modeleSpeciale: ButtonData[] = [
    { text: 'OsakaP', image: "./Image/OsakaPlane.jpg" },
    { text: 'OsakaM', image: "./Image/OsakaMexico.jpg" },
    { text: 'OsakaF', image: "./Image/OsakaFishing.jpg" },
    { text: 'OsakaC', image: "./Image/OsakaCartoon.jpg" },
    { text: 'OsakaS', image: "./Image/OsakaSleep.jpg" },
    { text: 'ChiyoC', image: "./Image/ChiyoCry.jpg" },
    { text: 'KaorinB', image: "./Image/KaorinBlush.jpg" },
];

export const colorDegrades: Record<string, string> = {

    bluePinks: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',
    greenPinks: 'linear-gradient(to bottom, #66ffcc 0%, #ff9999 100%)',
    purpleYellows: 'linear-gradient(to bottom, #cc66ff 0%, #ffcc66 100%)',
    redOranges: 'linear-gradient(to bottom, #ff6666 0%, #ffcc99 100%)',
    orangeYellows: 'linear-gradient(to bottom, #ff9900 0%, #ffcc66 100%)',
    yellowGreens: 'linear-gradient(to bottom, #ffff66 0%, #99ff99 100%)',
    greenBlues: 'linear-gradient(to bottom, #66cc66 0%, #99ccff 100%)',
    bluePurples: 'linear-gradient(to bottom, #6699cc 0%, #cc99ff 100%)',
    purplePinks: 'linear-gradient(to bottom, #9966cc 0%, #ff99cc 100%)',
    pinkReds: 'linear-gradient(to bottom, #ff99cc 0%, #ff6666 100%)',
    cyanMagentas: 'linear-gradient(to bottom, #00ffff 0%, #ff00ff 100%)',
    magentaYellows: 'linear-gradient(to bottom, #ff00ff 0%, #ffff00 100%)',
    yellowCyans: 'linear-gradient(to bottom, #ffff00 0%, #00ffff 100%)',
    redGreens: 'linear-gradient(to bottom, #ff6666 0%, #99ff99 100%)',
    orangeBlues: 'linear-gradient(to bottom, #ff9900 0%, #99ccff 100%)',
    yellowPurples: 'linear-gradient(to bottom, #ffff66 0%, #cc99ff 100%)',
    blueReds: 'linear-gradient(to bottom, #6699cc 0%, #ff6666 100%)',
    pinkCyans: 'linear-gradient(to bottom, #ff99cc 0%, #00ffff 100%)',
    brownMagentas: 'linear-gradient(to bottom, #996633 0%, #ff00ff 100%)',
    grayYellows: 'linear-gradient(to bottom, #999999 0%, #ffff66 100%)',
    cyanOranges: 'linear-gradient(to bottom, #00ffff 0%, #ff9900 100%)',
    magentaBlues: 'linear-gradient(to bottom, #ff00ff 0%, #6699cc 100%)',
    yellowReds: 'linear-gradient(to bottom, #ffff00 0%, #ff6666 100%)', 

    bluePink: 'linear-gradient(to right, #33ccff 0%, #ff99cc 100%)',
    greenPink: 'linear-gradient(to right, #66ffcc 0%, #ff9999 100%)',
    purpleYellow: 'linear-gradient(to right, #cc66ff 0%, #ffcc66 100%)',
    redOrange: 'linear-gradient(to right, #ff6666 0%, #ffcc99 100%)',
    orangeYellow: 'linear-gradient(to right, #ff9900 0%, #ffcc66 100%)',
    yellowGreen: 'linear-gradient(to right, #ffff66 0%, #99ff99 100%)',
    greenBlue: 'linear-gradient(to right, #66cc66 0%, #99ccff 100%)',
    bluePurple: 'linear-gradient(to right, #6699cc 0%, #cc99ff 100%)',
    purplePink: 'linear-gradient(to right, #9966cc 0%, #ff99cc 100%)',
    pinkRed: 'linear-gradient(to right, #ff99cc 0%, #ff6666 100%)',
    cyanMagenta: 'linear-gradient(to right, #00ffff 0%, #ff00ff 100%)',
    magentaYellow: 'linear-gradient(to right, #ff00ff 0%, #ffff00 100%)',
    yellowCyan: 'linear-gradient(to right, #ffff00 0%, #00ffff 100%)',
    redGreen: 'linear-gradient(to right, #ff6666 0%, #99ff99 100%)',
    orangeBlue: 'linear-gradient(to right, #ff9900 0%, #99ccff 100%)',
    yellowPurple: 'linear-gradient(to right, #ffff66 0%, #cc99ff 100%)',
    blueRed: 'linear-gradient(to right, #6699cc 0%, #ff6666 100%)',
    pinkCyan: 'linear-gradient(to right, #ff99cc 0%, #00ffff 100%)',
    brownMagenta: 'linear-gradient(to right, #996633 0%, #ff00ff 100%)',
    grayYellow: 'linear-gradient(to right, #999999 0%, #ffff66 100%)',
    cyanOrange: 'linear-gradient(to right, #00ffff 0%, #ff9900 100%)',
    magentaBlue: 'linear-gradient(to right, #ff00ff 0%, #6699cc 100%)',
    yellowRed: 'linear-gradient(to right, #ffff00 0%, #ff6666 100%)', 
};


export const colors: Record<string, string> = {
    black: '#000000', brown: '#964B00', chocolat: '#D2691E', marron: '#800000', bois: '#8B4513',
    grey: '#808080', anthracite: '#383838', gris_clair: '#D3D3D3', blue: '#0000FF', bleu_clair: '#ADD8E6',
    bleu_marine: '#000080', green: '#008000', kaki: '#C3B091', vert_clair: '#90EE90', cyan: '#00FFFF',
    purple: '#800080', lilas: '#C8A2C8', pink: '#FFC0CB', rose_clair: '#FFB6C1', rose_pâle: '#FFCCCC',
    lavande: '#E6E6FA', lavande_clair: '#FFF0F5', tan: '#D2B48C', beige: '#F5F5DC', abricot: '#FBCEB1',
    abricot_clair: '#FFDAB9', yellow: '#FFFF00', jaune: '#FFFF00', jaune_clair: '#FFFFE0', orange: '#FFA500',
    orange_clair: '#FFD700', orange_foncé: '#FF8C00',  ivoire: '#FFFFF0', red: '#FF0000', rouge_clair: '#FF4500', 
    cramoisi: '#DC143C', citrouille: '#FF7518', white: '#FFFFFF', sable: '#F4A460', dore: '#FFD700', or_clair: '#FFEC8B',
};

export const getColorForText = (text: string): string => {
    return colors[text] // Retourne la couleur associée au texte ou blanc par défaut
};

export const getColorDegrades = (text: string): string => {
    return colorDegrades[text] // Retourne la couleur associée au texte ou blanc par défaut
};