import { BrowserRouter, Routes, Route, isRouteErrorResponse } from "react-router";
import { LanguageMiddleware } from "./middleware";
import { Home } from "./pages";
import { NotFoundPage } from "./components/not-found-page";
import { TornadoTemporaire } from "./pages/tornado";

function App() {
	return (
		<BrowserRouter>
			<LanguageMiddleware>
				<Routes>
					<Route path="/:lang" element={<Home />} />
					<Route path="/:lang/tornado" element={<TornadoTemporaire />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</LanguageMiddleware>
		</BrowserRouter>
	);
}

export function ErrorBoundary({ error }: { error: unknown }) {
	console.error('Erreur:', error);

	if (isRouteErrorResponse(error)) {
		return <NotFoundPage />;
	}
	return (
        <div>
            <h1>Une erreur est survenue</h1>
            <p>{error instanceof Error ? error.message : 'Erreur inconnue'}</p>
            <NotFoundPage />
        </div>
    );
}

export default App;
