import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getColorForText } from '../components/ModeleCouleurs';

interface ButtonData {
    text: string;
    image?: string;
}

const ResponsiveModele: React.FC = () => {
    const [modeleClassique] = useState<ButtonData[]>([
        { text: 'black' }, { text: 'white' }, { text: 'blue' }, { text: 'green' }, { text: 'red' }, { text: 'yellow' },
        { text: 'orange' }, { text: 'purple' }, { text: 'pink' }, { text: 'tan' }, { text: 'brown' }, { text: 'grey' }
    ]);

    const [modeleSpeciale] = useState<ButtonData[]>([
        { text: 'Osaka', image: "./Image/OsakaPlane.jpg" },
        { text: 'Osaka', image: "./Image/OsakaMexico.jpg" },
        { text: 'Osaka', image: "./Image/OsakaFishing.jpg" },
        { text: 'Osaka', image: "./Image/OsakaCartoon.jpg" },
        { text: 'Osaka', image: "./Image/OsakaSleep.jpg" },
        { text: 'Chiyo', image: "./Image/ChiyoCry.jpg" },
        { text: 'Kaorin', image: "./Image/KaorinBlush.jpg" }
    ]);

    return (
        <div className="right-side">

            <h3>Modèles classiques</h3>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {modeleClassique.map((button, index) => (
                    <Button key={index} sx={{
                        color: getColorForText(button.text), backgroundColor: getColorForText(button.text),
                        fontFamily: 'monospace', display: 'block', textTransform: 'none', width: 'calc(20% - 3% - 1px)',
                        border: 'solid black', borderRadius: '20px', height: '90px', marginBottom: '3%',
                        marginRight: index % 5 === 4 ? '0' : '3%'
                    }}>
                        <p>{button.text}</p>
                    </Button>
                ))}
            </Box>

            <h3>Modèles Spéciales</h3>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {modeleSpeciale.map((button, index) => (
                    <Button key={index} sx={{
                        color: 'black', backgroundColor: 'white', fontFamily: 'monospace', display: 'block', textTransform: 'none', width: 'calc(20% - 3% - 1px)',
                        border: 'solid black', borderRadius: '20px', height: '90px', marginBottom: '3%',
                        marginRight: index % 5 === 4 ? '0' : '3%', position: 'relative', overflow: 'hidden'
                    }}>
                        <p>{button.text}</p>

                        {button.image && (
                            <div className="image-container" style={{
                                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%'
                            }}>
                                <img src={button.image} alt={button.text} style={{
                                    maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', objectPosition: 'center'
                                }} className="image-hover" />
                            </div>
                        )}
                    </Button>
                ))}
            </Box>
        </div>
    );
};

export default ResponsiveModele;
