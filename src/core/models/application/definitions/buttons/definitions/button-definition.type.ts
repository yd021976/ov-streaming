import { Observable } from 'rxjs'

export type TButton = {
    name: string
    clickParams: [] | {}
    disabledCondition: Observable<any>
    fontSet: string
    fontIcon: string
}

export type TButtons = TButton[]
