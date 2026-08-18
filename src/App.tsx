import './App.css';
import About from './Components/About/About';
import { Achievements } from './Components/Achievements/Achievements';

import { Blog } from './Components/Blog/Blog';
import { Contact } from './Components/Contact/Contactus';
import { Counter } from './Components/Counter/Counter';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Services } from './Components/Services/Services';
import { Team } from './Components/Team/Team';
import { OurAwards } from './Components/Ourawards/Ourawards';
import { Testimonial } from './Components/Testimonial/Testimonial';

import { useEffect, useState } from 'react';

function App() {
    const [theme, setTheme] = useState<string>('light-theme');

    const changeTheme = () => {
        theme === 'light-theme' ? setTheme('') : setTheme('light-theme');
    };

    useEffect(() => {
        document.body.className = theme;
        console.log(theme); 
    }, [theme]);
    return (
        <>
            <Header theme={theme} changeTheme={changeTheme} />
            <main>
                <Hero theme={theme} />
                <Counter />
                <Services />
                <About theme={theme} />
                <Team theme={theme} />
                <Achievements theme={theme} />
                <OurAwards theme={theme} />
                <Contact />
               {/*  <Blog /> */}
                 {/*<Testimonial /> */}
                <Newsletter /> 
            </main>
            <Footer />
        </>
    );
}

export default App;