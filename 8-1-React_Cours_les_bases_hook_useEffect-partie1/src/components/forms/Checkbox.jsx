/**
 *Checkbox avec un libellé sur la droite
 * @param {Boolean} checked
 * @param {v: boolean => void} onChange
 * @param {string} label
 * @param {string} id 
 */

export function Checkbox({checked, onChange, label, id}){
    return <div className="form-check">
        <input type="checkbox"
        id={id}
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}