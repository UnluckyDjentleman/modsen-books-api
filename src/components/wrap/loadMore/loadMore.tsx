import React, { MouseEventHandler } from 'react'

export default function LoadMore({clicker}:{clicker: MouseEventHandler<HTMLButtonElement>|undefined}){

    return(
        <button className="btn btn-link" onClick={clicker}>Load More</button>
    )
}