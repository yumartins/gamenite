import React from 'react';

const getPath = (name, props) => {

    switch(name) {

        case 'activity': 
            return (
                <path { ...props }
                d = 'M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z' />
            );

        case 'heart':
            return (
                <path { ...props }
                d = 'M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z' />
            );    

        default:
            return <path />;    

    }

}

const Icon = ({

    name = '',
    fill = '',
    viewBox = '0 0 24 24',
    size = '24',
    className = ''

}) => (

    <svg
      width = { size }
      height = { size }
      className = { className }
      xmlns = 'http://www.w3.org/2000/svg'
      viewBox = { viewBox }
      xmlnsXlink = 'http://www.w3.org/1999/xlink'
    >
        { getPath( name, { fill } ) }
    </svg>

);

export default Icon;