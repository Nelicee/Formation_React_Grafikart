export function activeClassIf (condition, className) {
    if (!condition) {
        return className
    }
    if (!className) {
        return 'active';
    }
    return `active ${className}`
}
