export interface Student {
    id: number
    firstName: string
    lastName: string
    age?: number
    email: string
    course?: string
    classes: number[]|[]
    active: boolean
}
