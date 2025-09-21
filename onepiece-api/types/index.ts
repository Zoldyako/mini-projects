export type Character = {
    id: number | string,
    name: string,
    job: string,
    age: string,
    bounty: string,
    crew: {
        id: string,
        name: string
        description: string,
        status: string,
    }
}

export type Fruit = {
    id: number | string,
    name: string,
    type: string,
    description: string,
}