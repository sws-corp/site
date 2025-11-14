import { BrowserRouter, Routes, Route, isRouteErrorResponse } from "react-router";
import { LanguageMiddleware } from "./middleware"; 
import { NotFoundPage } from "./features/not-found"; 
import Index from "./pages";
import Elite from "./pages/elite";

function App() {
	return (
		<BrowserRouter>
			<LanguageMiddleware>
				<Routes>
					<Route path="/:lang" element={<Index />} /> 
					<Route path="/:lang/elite" element={<Elite />} />
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
