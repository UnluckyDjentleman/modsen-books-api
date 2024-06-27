import {useCallback } from 'react'
import FilterElement from '../../../constants/filterElement'

export default function Filter({info, onSelection}:{info: FilterElement, onSelection: Function}){
    const Selector=useCallback((input:string)=>{
        onSelection(input);
    },[onSelection])

    return(
        <select className="selectpicker" onChange={(e)=>{Selector(e.target.value)}}>
            {
                info.items&&info.items.map((el)=>(
                    <option value={el!=='all'?el:""}>{el}</option>
                ))
            }
        </select>
    )
}