import DateTimeFormat = Intl.DateTimeFormat;

export interface IAppState {
	authUser: any;
}

export interface Roles {
	isAdmin: boolean;
	isMember: boolean;
}

export interface QuestionValues {
	[name: string]: string;
}

export interface CompanyPriority {
	companyPriorityId: number;
	company: string;
	priority: number;
}

/***
 * Begin specific ERROR component grouping example
 ***/
export interface BaseboardsValidationError {
	type: string;
	e_length?: string;
	e_width?: string;
	e_quantity?: string;
}
