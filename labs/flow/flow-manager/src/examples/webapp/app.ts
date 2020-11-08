import Debug from "debug";
import {
	THttpStatusCode,
	HttpStatusCode,
	THttpHeaders,
	HttpRouted,
	THttpRouted,
	HttpHeaders,
	GeneratedHtml,
	TGeneratedHtml,
	SentHtml,
	TSentHtml,
	HttpRedirected,
	THttpRedirected,
} from "@xde/aspects";

import { Some } from "../../helpers/lambdas";
import code404HtmlInstance from "./errors/Code404Html";
import httpRoutedInstance from "./http/HttpRouted";
import app404Instance from "./app/App404";
import code401HtmlInstance from "./errors/Code401Html";
import code301RedirectedInstance from "./http/Code301Redirected";
import htmlSenderInstance from "./http/HtmlSender";
import admin401Instance from "./app/admin/Admin401";
import adminPanelHtmlInstance from "./app/admin/AdminPanelHtml";
import appAdminRouteAllowedInstance from "./app/AppAdminRouteAllowed";
import appSecuredRouteRedirectedInstance from "./app/AppSecuredRouteRedirected";
import httpHasAuthInstance from "./security/HttpHasAuth";
import httpSecuredInstance from "./http/HttpSecured";
import { CompositeFunctor } from "../../functor/CompositeFunctor";
import { TestHttpRequest, TTestHttpRequest } from "./models/TestHttpRequest";

export class AppRenderer extends CompositeFunctor<
	THttpStatusCode | (THttpHeaders & THttpStatusCode) | TGeneratedHtml,
	TSentHtml | THttpRedirected
> {
	name = "AppRenderer";
	from = [
		{
			aspect: [[HttpStatusCode], [HttpStatusCode, HttpHeaders], [GeneratedHtml]],
			lambda: Some,
		},
	];
	to = [
		{
			aspect: [SentHtml, HttpRedirected],
			lambda: Some,
		},
	];
}

const renderer = new AppRenderer();

renderer.addChildren([
	code404HtmlInstance,
	code401HtmlInstance,
	code301RedirectedInstance,
	htmlSenderInstance,
]);

export class AppMain extends CompositeFunctor<
	TTestHttpRequest,
	THttpRouted | (THttpStatusCode & THttpHeaders) | THttpStatusCode | TGeneratedHtml
> {
	name = "AppMain";
	from = [TestHttpRequest];
	to = [
		{
			aspect: [
				[HttpRouted],
				[HttpHeaders, HttpStatusCode],
				[HttpStatusCode],
				[GeneratedHtml],
			],
			lambda: Some,
		},
	];
}

const appMain = new AppMain();

appMain.addChildren([
	admin401Instance,
	adminPanelHtmlInstance,
	appAdminRouteAllowedInstance,
	appSecuredRouteRedirectedInstance,
	httpHasAuthInstance,
	httpRoutedInstance,
	httpSecuredInstance,
]);

export class Root extends CompositeFunctor<TTestHttpRequest, TSentHtml> {
	name = "Root";
	from = [TestHttpRequest];
	to = [SentHtml];
}

export const root = new Root();
root.addChildren([appMain, app404Instance, renderer]);

// Debug.enable("*");
// Debug.enable("app:CompositionFlow:short*");
Debug.enable("app:CompositionFlow:verbose*");

root.map({
	TestHttpRequest: {
		authCookie: "valid",
		host: "www.host",
		path: "/security/non-existing",
		isTLS: true,
	},
	AdminFlag: true,
});
