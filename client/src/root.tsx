import { BrowserRouter, Routes, Route, isRouteErrorResponse } from "react-router";
import { LanguageMiddleware } from "./middleware"; 
import { NotFoundPage } from "./features/not-found"; 
import { Home, Elite } from "@/pages/index";
import { ThemeProvider } from "@/lib/theme";

function App() {
	return (
		<ThemeProvider defaultTheme="system">
			<BrowserRouter>
				<LanguageMiddleware>
					<Routes>
						<Route path="/:lang" element={<Home />} /> 
						<Route path="/:lang/elite" element={<Elite />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</LanguageMiddleware>
			</BrowserRouter>
		</ThemeProvider>
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
