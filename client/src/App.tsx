import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageMiddleware } from "./middleware";
import { Home } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<LanguageMiddleware>
				<Routes>
					<Route path="/:lang" element={<Home />} />
				</Routes>
			</LanguageMiddleware>
		</BrowserRouter>
	);
}

export default App;
