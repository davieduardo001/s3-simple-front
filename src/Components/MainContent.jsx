import React from 'react'

const MainContent = ({theme}) => {

    const container = { 
        background: 'rgba(255, 255, 255, 0.1)', /* Semi-transparent white background */
        bordeRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)', /* Apply blur to the area behind the element */
        textAlign: 'center',
        color: '#fff',
        width: '50vw',
        height: '50vh',
        padding: '10px',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    };

    const h2Header = {
        fontFamily: 'Lato',
        fontSize: '40px',
        color: theme.primary
    };

    return (
        <div style={container}>
            <h2 style={h2Header}>Descubra a natureza</h2>
        </div>
    )
}


export default MainContent;