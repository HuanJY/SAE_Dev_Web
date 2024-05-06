import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getColorForText, modeleClassique, modeleSpeciale, colors } from '../components/Modele_BG';

const ResponsiveModele: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState<string>('');

    useEffect(() => {
        const storedModel = localStorage.getItem('selectedModel');
        if (storedModel) {
            setSelectedModel(storedModel);
        }
    }, []); // Seulement exécuté lors du montage initial

    const handleModelChange = (model: string) => {
        setSelectedModel(model === selectedModel ? '' : model); // Réinitialiser si c'est déjà sélectionné
        localStorage.setItem('selectedModel', model === selectedModel ? '' : model);
    };

    const getBackground = (model: string) => {
        const selectedButton = modeleSpeciale.find(button => button.text === model);
        return selectedButton ? `url(${selectedButton.image})` : colors[model] || colors.white;
    };

    return (
        <div className="right-side" style={{ background: selectedModel ? getBackground(selectedModel) : '' }}>
            <h3>Modèles classiques</h3>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {modeleClassique.map((button, index) => (
                    <Button key={index} onClick={() => handleModelChange(button.text)} sx={{
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
                    <Button key={index} onClick={() => handleModelChange(button.text)} sx={{
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
