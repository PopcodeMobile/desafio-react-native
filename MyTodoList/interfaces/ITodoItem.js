// @flow
export interface ITodoItem {
    +cod: number,
    checked: string,
    title: string, 
    description: string,
    deadline: string,
}