const arrStyles = [
    {
        width: '300px',
        height: '250px',
        top: '100px',
        left: '100px',
        backgroundColor: '#c64e19',
        borderRadius: '200px'
    },
    {
        width: '250px',
        height: '80px',
        top: '240px',
        left: '125px',
        backgroundColor: '#1c0804',
        borderRadius: '0px 0px 250px 250px'
    },
    {
        top: '200px',
        left: '225px',
        backgroundColor: '#1c0804',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid #c64e19',
        borderLeft: '30px solid #c64e19',
        borderBottom: '30px solid transparent',
    },
    {
        top: '130px',
        left: '150px',
        backgroundColor: '#1c0804',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid #1c0804',
        borderLeft: '30px solid #1c0804',
        borderBottom: '60px solid transparent',
    },
    {
        top: '140px',
        left: '300px',
        backgroundColor: '#1c0804',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid #1c0804',
        borderLeft: '30px solid #1c0804',
        borderBottom: '60px solid transparent',
    },
    {
        width: '30px',
        height: '10px',
        top: '240px',
        left: '150px',
        backgroundColor: '#c64e19'
    },
    {
        width: '30px',
        height: '20px',
        top: '240px',
        left: '240px',
        backgroundColor: '#c64e19'
    },
    {
        width: '30px',
        height: '20px',
        top: '240px',
        left: '320px',
        backgroundColor: '#c64e19'
    },
    {
        width: '30px',
        height: '35px',
        top: '300px',
        left: '180px',
        backgroundColor: '#c64e19'
    },
    {
        width: '30px',
        height: '40px',
        top: '300px',
        left: '280px',
        backgroundColor: '#c64e19'
    },
    {
        top: '45px',
        left: '225px',
        backgroundColor: '#792c13',
        border: 'solid',
        borderTop: '0px solid',
        borderRight: '30px solid #792c13',
        borderLeft: '30px solid #792c13',
        borderBottom: '60px solid transparent',
    }
];

arrStyles.forEach(elemStyles => {
    createBlock(elemStyles);
});

function createBlock(styles) {
    const block = document.createElement('div');
    block.style.position = 'absolute';
    
    for (const key in styles) {
        block.style[key] = styles[key];
    }
    
    document.body.appendChild(block);
}