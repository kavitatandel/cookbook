
import { Route, Routes, Link } from 'react-router-dom';

import Header from './component/Header'
import Country from './component/Country'
import Home from './component/Home'
import About from './component/About'
import RecipeDesc from './component/RecipeDesc'
import USAFlag from "./Images/USAFlag.png";
import UKFlag from "./Images/UKFlag.png";
import IndiaFlag from "./Images/IndiaFlag.png";
import PolandFlag from "./Images/PolandFlag.png";
import Footer from "./component/Footer";
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Client } from './component/Client'

const AppRouter = () => {

	


	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="india" element={<Country flag={IndiaFlag} CountryName="India" />} />
				<Route path="uk" element={<Country flag={UKFlag} CountryName="UK" />} />
				<Route path="poland" element={<Country flag={PolandFlag}  CountryName="Poland" />} />
				<Route path="usa" element={<Country flag={USAFlag} CountryName="USA" />} />
				<Route path="about" element={<About />} />
				<Route path="recipedesc/:recipeId" element={<RecipeDesc />} />
			</Routes>
			<Footer />

		</>

	)
}

export default AppRouter;