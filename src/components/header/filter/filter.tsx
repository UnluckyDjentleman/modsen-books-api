import {useCallback } from 'react'
import FilterElement from '../../../constants/types/filterElement'

export default function Filter({info, onSelection}:{info: FilterElement, onSelection: Function}){
    const onSelected=useCallback((e: React.ChangeEvent<HTMLSelectElement>)=>{
        onSelection(e.target.value);
    },[onSelection])

    return(
        <select className="selectpicker" onChange={onSelected}>
            {
                info.items&&info.items.map((el)=>(
                    <option value={el!=='all'?el:""}>{el}</option>
                ))
            }
        </select>
    )
}