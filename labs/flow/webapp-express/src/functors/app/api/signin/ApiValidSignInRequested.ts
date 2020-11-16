import { PrimitiveFunctor, Some } from "@xde/flow-manager";
import {
	GeneratedApiBody,
	HttpStatusCode,
	TGeneratedApiBody,
	THttpStatusCode,
	NodejsExpressRequest,
	TNodejsExpressRequest,
	THttpRouted,
	HttpRouted,
} from "@xde/aspects";
import { EndpointErrorCode } from "@xde/endpoint-error-codes";

import { ApiValidSignInRequest, TApiValidSignInRequest } from "../../../../models/aspects";
import { SingInRequest } from "../../../../models/user/SignInRequest";

export class ApiValidSignInRequested extends PrimitiveFunctor<
	TNodejsExpressRequest & THttpRouted,
	TApiValidSignInRequest | (TGeneratedApiBody & THttpStatusCode<422>)
> {
	name = "ApiValidSignInRequested";
	from = [
		NodejsExpressRequest,
		{
			aspect: HttpRouted,
			lambda: (obj: THttpRouted) =>
				!!obj[HttpRouted]?.path.startsWith("/api/sign-in") &&
				obj[HttpRouted].method === "POST",
		},
	];
	to = [
		{
			aspect: [[ApiValidSignInRequest], [GeneratedApiBody, HttpStatusCode]],
			lambda: Some,
		},
	];

	async distinct(obj: TNodejsExpressRequest) {
		const request = new SingInRequest(obj[NodejsExpressRequest].body);

		const validation = await request.validate();

		if (!Array.isArray(validation)) {
			return {
				[ApiValidSignInRequest]: validation,
			};
		} else {
			return {
				[GeneratedApiBody]: {
					result: false,
					code: EndpointErrorCode.UnprocessableEntity,
					details: validation,
				},
				[HttpStatusCode]: 422 as const,
			};
		}
	}
}

const apiValidSignInRequestedInstance = new ApiValidSignInRequested();
export default apiValidSignInRequestedInstance;
