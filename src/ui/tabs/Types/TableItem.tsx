import { Nullable } from '../../../lib/Nullable';


export interface TableItem {
	builtin: boolean;
	count: Nullable<number>;
	name: string;
}
