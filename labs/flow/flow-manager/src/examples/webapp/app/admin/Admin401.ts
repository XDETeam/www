import { THttpRouted, THttpStatusCode, HttpStatusCode, HttpRouted } from "@xde/aspects";

import { PrimitiveFunctor } from "../../../../functor/PrimitiveFunctor";
import { TAppAdminRouteAllowed, AppAdminRouteAllow } from "../../models/";

export class Admin401 extends PrimitiveFunctor<
	THttpRouted & TAppAdminRouteAllowed,
	THttpStatusCode
> {
	name = "Admin401";
	from = [
		{
			aspect: HttpRouted,
			lambda: (obj: THttpRouted) => !!obj[HttpRouted]?.path.startsWith("/security/"),
		},
		{
			aspect: AppAdminRouteAllow,
			lambda: (obj: TAppAdminRouteAllowed) => obj[AppAdminRouteAllow] === false,
		},
	];
	to = [HttpStatusCode];

	distinct(): THttpStatusCode {
		return {
			[HttpStatusCode]: 401,
		};
	}
}

const admin401Instance = new Admin401();
export default admin401Instance;
