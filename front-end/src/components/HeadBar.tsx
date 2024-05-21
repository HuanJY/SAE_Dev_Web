function ResponsiveHeadBar() {

    return (
        <div className='headBarForm'>
            <div className='logoHeadBar'>
                <p> Azu <img src="./Image/OsakaPlane.jpg" height='20' width='30' alt="logo" /> Trello </p>
            </div>   

            <div className="buttonDeco">
                <button type='button' style={{background:'none', fontSize:'large', padding:'5%'}}>
                    Deconnexion
                </button>
            </div>
        </div>
     );
}

export default ResponsiveHeadBar;