import DateTimeFormat = Intl.DateTimeFormat;
import {Person} from "./utils";

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

export type CompanyPriority = {
	companyPriorityId?: number;
	company: string;
	priority: number;
	createdDatetime?: Date;
	createdBy?: string;
	modifiedDatetime?: Date;
	modifiedBy?: string;
	isActive?: boolean;

}

export type CompanyPriorityData = CompanyPriority & {
	subRows?: CompanyPriority[]
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
