export interface Student {
    id: number
    firstName: string
    lastname: string
    age?: number
    email: string
    course?: string
    classes: number[]|[]
    active: boolean
}
