import { MouseEventHandler } from 'react'

export default function LoadMore({clicker}:{clicker: MouseEventHandler<HTMLButtonElement>}){

    return(
        <button className="btn btn-warning" onClick={clicker}>Load More</button>
    )
}