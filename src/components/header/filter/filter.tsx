import { useCallback } from 'react'

import FilterElement from '../../../constants/types/filterElement'

export default function Filter({
    info,
    onSelection,
}: {
    info: FilterElement
    onSelection: (value: string) => void
}) {
    const onSelected = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            if (onSelection) onSelection(e.target.value)
        },
        [onSelection],
    )

    return (
        <select className="selectpicker" onChange={onSelected}>
            {info.items &&
                info.items.map(el => (
                    <option value={el !== 'all' ? el : ''}>{el}</option>
                ))}
        </select>
    )
}
