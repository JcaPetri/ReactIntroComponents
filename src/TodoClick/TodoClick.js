import React from 'react';

function TodoClick({cantClick}) {
    // const cantClick = props.cantClick;
    // let [cantClick, setCantClick] = React.useState(0);
    // console.log('La cantidad de click es ' + cantClick);       // This show the searchValue
    return (
        <>
            <p>
                Diste click {cantClick} veces.
            </p>
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*                            setCantClick(cantClick++)*/}
            {/*                         }*/}
            {/*            }*/}
            {/*>Click*/}
            {/*</button>*/}
        </>
    );
}

// This is a named export
export { TodoClick };