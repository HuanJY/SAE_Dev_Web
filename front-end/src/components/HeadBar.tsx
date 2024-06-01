import {useHistory } from 'react-router-dom';

function ResponsiveHeadBar() {
    const history = useHistory();  

    const handleLogout = () => {
        history.push('/');  
    };

    return (
        <div className='headBarForm'>
            <div className='logoHeadBar'>
                <p> Azu <img src="./Image/OsakaPlane.jpg" height='20' width='30' alt="logo" /> Trello </p>
            </div>   

            <div className="buttonDeco">
                <button type='button' style={{border:'none', fontSize:'large', padding:'5%', color:'white', backgroundColor: 'rgb(26, 135, 213)'}} onClick={handleLogout}>
                    Déconnexion
                </button>
            </div>
        </div>
     );
}

export default ResponsiveHeadBar;