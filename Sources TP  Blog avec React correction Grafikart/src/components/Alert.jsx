/**
 * @param {"danger" | "info" | "warning"} type
 */
export function Alert ({type = 'info', children}) {
    return <div className={`alert alert-${type}`} role="alert">
        {children}
    </div>
}
