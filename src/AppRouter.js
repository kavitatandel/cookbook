import {Route, Routes, Link} from 'react-router-dom';
import Header from './component/Header'
import Country from './component/Country'
import Home from './component/Home'
import About from './component/About'

const AppRouter =  () => {
	return(
<>
<Header />
<Routes>
<Route exact path="/" element={<Home />}></Route>
<Route path="india" element={<Country />} />
<Route path="uk" element={<Country />} />
<Route path="poland" element={<Country />} />
<Route path="usa" element={<Country />} />
<Route path="about" element={<About />} />

</Routes>

</>
	)
}

export default AppRouter;