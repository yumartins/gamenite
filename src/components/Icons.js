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

        case 'heart_fill':
            return (
                <path { ...props }
                d = 'M8.5 13.625a.792.792 0 0 1-.562-.23L1.787 7.236a4.164 4.164 0 0 1 0-5.858 4.148 4.148 0 0 1 5.858 0l.855.855.855-.855a4.148 4.148 0 0 1 5.858 0 4.164 4.164 0 0 1 0 5.858l-6.15 6.16a.792.792 0 0 1-.563.229z' />
            );  
            
        case 'bag':
            return (
                <path { ...props }
                d = 'M3,18a3,3,0,0,1-3-3V5.83A3,3,0,0,1,.88,3.71L3.71.88A3,3,0,0,1,5.83,0h6.34a3,3,0,0,1,2.12.88l2.83,2.83A3,3,0,0,1,18,5.83V15a3,3,0,0,1-3,3ZM2,15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V6H2ZM5.12,2.29,3.41,4H14.59L12.879,2.29A1.05,1.05,0,0,0,12.17,2H5.83A1.055,1.055,0,0,0,5.12,2.29ZM5.4,9A.9.9,0,0,1,7.2,9a1.8,1.8,0,0,0,3.6,0,.9.9,0,0,1,1.8,0A3.6,3.6,0,1,1,5.4,9Z' />
            ); 
            
        case 'stream':
                return (
                    <path { ...props }
                    d = 'M18 6h-3.59l2.3-2.29a1.004 1.004 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1.004 1.004 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10z' />
                );   
                
        case 'flag':
            return (
                <path { ...props }
                d = 'M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3v8.18z' />
            );  

        case 'flash':
            return (
                <path { ...props }
                d = 'M11.11 23a.997.997 0 0 1-.99-1.11l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .99 1.11l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15-4.58 6.86z' />
            ); 

        case 'globe':
            return (
                <path { ...props }
                d = 'M22 12A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6H9.08zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z' />
            ); 

        case 'gift':
            return (
                <path { ...props }
                d = 'M19.2 7h-.39A3 3 0 0 0 19 6a3.08 3.08 0 0 0-3.14-3A4.46 4.46 0 0 0 12 5.4 4.46 4.46 0 0 0 8.14 3 3.08 3.08 0 0 0 5 6a3 3 0 0 0 .19 1H4.8A2 2 0 0 0 3 9.2v3.6A2.08 2.08 0 0 0 4.5 15v4.37A1.75 1.75 0 0 0 6.31 21h11.38a1.75 1.75 0 0 0 1.81-1.67V15a2.08 2.08 0 0 0 1.5-2.2V9.2A2 2 0 0 0 19.2 7zM19 9.2v3.6a.56.56 0 0 1 0 .2h-6V9h6a.56.56 0 0 1 0 .2zM15.86 5A1.08 1.08 0 0 1 17 6a1.08 1.08 0 0 1-1.14 1H13.4a2.93 2.93 0 0 1 2.46-2zM7 6a1.08 1.08 0 0 1 1.14-1 2.93 2.93 0 0 1 2.45 2H8.14A1.08 1.08 0 0 1 7 6zM5 9.2A.56.56 0 0 1 5 9h6v4H5a.56.56 0 0 1 0-.2V9.2zM6.5 15H11v4H6.5v-4zm6.5 4v-4h4.5v4H13z' />
            ); 

        case 'headphone':
            return (
                <path { ...props }
                d = 'M12 2C6.378 2.11 1.905 6.748 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63C22.095 6.748 17.622 2.11 12 2zM6 15a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm12 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' />
            ); 

        case 'more':
            return (
                <path { ...props }
                d = 'M14,2a2,2,0,1,1,2,2A2,2,0,0,1,14,2ZM7,2A2,2,0,1,1,9,4,2,2,0,0,1,7,2ZM0,2A2,2,0,1,1,2,4,2,2,0,0,1,0,2Z' />
            ); 
            
        case 'arrow_left':
            return (
                <path { ...props }
                d = 'M15 6H3.14l3.63-4.36A1.001 1.001 0 1 0 5.23.36l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 0 7a1 1 0 0 0 .07.36c0 .05 0 .08.07.13.026.052.056.102.09.15l5 6a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41L3.14 8H15a1 1 0 0 0 0-2z' />
            );  

        case 'arrow_right':
            return (
                <path { ...props }
                d = 'M1 8h11.86l-3.63 4.36a1.001 1.001 0 1 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05 0-.08.07-.13A1 1 0 0 0 16 7a1 1 0 0 0-.07-.36c0-.05 0-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 9.36.23a1 1 0 0 0-.13 1.41L12.86 6H1a1 1 0 0 0 0 2z' />
            ); 

        case 'search':
            return (
                <path { ...props }
                d = 'M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0z' />
            ); 

        case 'coin':
            return (
                <path { ...props }
                d = 'M12.734 1L9.519 4.06 6.252 1 1 6.546 6.252 12 16.868 1 22 6.546 16.868 12l-3.317-3.19L10.522 12' />
            ); 

        case 'mail':
            return (
                <path { ...props }
                d = 'M17 0H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm-.67 2L10 6.75 3.67 2h12.66zM17 14H3a1 1 0 0 1-1-1V3.25L9.4 8.8a1 1 0 0 0 1.2 0L18 3.25V13a1 1 0 0 1-1 1z' />
            ); 

        case 'bell':
            return (
                <path { ...props }
                d = 'M20.52 18.21l-1.8-1.81v-4.46a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 21H8v.34A3.84 3.84 0 0 0 12 25a3.84 3.84 0 0 0 4-3.66V21h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 21.34A1.88 1.88 0 0 1 12 23a1.88 1.88 0 0 1-2-1.66V21h4v.34zM5.51 19l1.18-1.18a2 2 0 0 0 .59-1.42v-4.67A4.73 4.73 0 0 1 8.9 8.17 4.67 4.67 0 0 1 12.64 7a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 19H5.51z' />
            ); 

        case 'chevron_down':
            return (
                <path { ...props }
                d = 'M14 1a1 1 0 0 0-1.64-.77L7 4.71 1.63.39A1 1 0 0 0 .22.54 1 1 0 0 0 .37 2l6 4.83a1 1 0 0 0 1.27 0l6-5A1 1 0 0 0 14 1z' />
            ); 

        default:
            return <path />;    

    }

}

const Icon = ( {

    width = '24px',
    height = '24px',
    name = '',
    fill = '',
    className = '',
    stroke = '',
    strokeWidth = ''

} ) => (

    <svg
        width = { width }
        height = { height }
        className = { className }
        xmlns = 'http://www.w3.org/2000/svg'
        xmlnsXlink = 'http://www.w3.org/1999/xlink'
    >
        { getPath( name, { fill, stroke, strokeWidth } ) }
    </svg>

);

export default Icon;