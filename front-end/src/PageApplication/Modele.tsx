import React, { useState, useEffect } from 'react';
import { getColorForText, modeleClassique, modeleDegrade, modeleSpeciale, colors, colorDegrades} from '../components/ModeleBG';

interface ModeleType {
    text: string;
}

const ResponsiveModele: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [showClassique, setShowClassique] = useState<boolean>(true);
    const [showDegrade, setShowDegrade] = useState<boolean>(true);
    const [showSpeciale, setShowSpeciale] = useState<boolean>(true);

    const buttonModeleType: ModeleType[] = [
        { text: 'Tout afficher' },
        { text: 'Modeles Classiques' },
        { text: 'Modeles Dégradés' },
        { text: 'Modeles Spéciaux' },
    ];

    useEffect(() => {
        const storedModel = localStorage.getItem('selectedModel');
        if (storedModel) {
            setSelectedModel(storedModel);
        }
    }, [])

    const handleModelChange = (model: string) => {
        setSelectedModel(model === selectedModel ? '' : model); // Réinitialiser si c'est déjà sélectionné
        localStorage.setItem('selectedModel', model === selectedModel ? '' : model);
    };

    const getBackground = (model: string) => {
        const selectedButton = modeleSpeciale.find(button => button.text === model);
        if (selectedButton && selectedButton.image) {
            return `url(${selectedButton.image})`;
        } else if (colorDegrades[model]) {
            return colorDegrades[model];
        } else {
            return colors[model] || colors.white;
        }
    };

    return (
        <div className="right-side" style={{ background: selectedModel ? getBackground(selectedModel) : '', overflow:'auto'}}>
            <div className='outlineModeleType outline'>
            {buttonModeleType.map((button, index) => (
                <button type='button' className='modeleType buttonForm' key={index}
                    onClick={() => {
                        switch (button.text) {
                            case 'Tout afficher':
                                setShowClassique(true);
                                setShowDegrade(true);
                                setShowSpeciale(true);
                                break;
                            case 'Modeles Classiques':
                                setShowClassique(true);
                                setShowDegrade(false);
                                setShowSpeciale(false);
                                break;
                            case 'Modeles Dégradés':
                                setShowClassique(false);
                                setShowDegrade(true);
                                setShowSpeciale(false);
                                break;
                            case 'Modeles Spéciaux':
                                setShowClassique(false);
                                setShowDegrade(false);
                                setShowSpeciale(true);
                                break;
                        }
                    }}
                >
                    <p>{button.text}</p>
                </button>
            ))}
            </div>

            {showClassique && (
                <>
                    <h3>Modèles Classiques</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {modeleClassique.map((button, index) => (
                            <button type="button" className='modeleSelect buttonForm' key={index} onClick={() => handleModelChange(button.text)}
                                style={{backgroundColor: getColorForText(button.text), marginRight: index % 5 === 4 ? '0' : '3%' }}
                            />
                        ))}
                    </div>
                </>
            )}

            {showDegrade && (
                <>
                    <h3>Modèles Dégradés</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {modeleDegrade.map((button, index) => (
                            <button type="button" className='modeleSelect buttonForm' key={index} onClick={() => handleModelChange(button.text)} 
                                style={{marginRight: index % 5 === 4 ? '0' : '3%', background: button.background}}
                            />
                        ))}                    
                    </div>
                </>
            )}

            {showSpeciale && (
                <>
                    <h3>Modèles Spéciaux</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {modeleSpeciale.map((button, index) => (
                            <button type="button" className='modeleSelect buttonForm' key={index} onClick={() => handleModelChange(button.text)}
                                style={{ marginRight: index % 5 === 4 ? '0' : '3%', position: 'relative', overflow: 'hidden' }}
                                >
                                {button.image && (
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%' }}>
                                        <img src={button.image} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', objectPosition: 'center' }} />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ResponsiveModele;