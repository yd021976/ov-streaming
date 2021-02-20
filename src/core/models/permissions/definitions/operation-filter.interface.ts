export interface IOperationFilter {
    filterName: string /** filter ID */
    name: string /** short description of filter */
    description: string /** long description of filter */
    isActive: boolean /** is this filter is activated */
}