import './App.css';
import { useRef, useEffect } from 'react';
import { ReactComponent as Scene } from './images/scene.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    
    const ground = elements.getElementById('ground'); 
    const lightRadius = elements.getElementById('light-radius'); 
    const building = elements.getElementById('building'); 
    const plant = elements.getElementById('plant'); 
    const women = elements.getElementById('women'); 
    const flame = elements.getElementById('flame'); 

    console.log(plant.children)

    gsap.set([ground, lightRadius, building, ...plant.children, women, flame], {autoAlpha: 0});
    gsap.set(flame, {transformOrigin: '50% 100%' });
    gsap.set(plant.children, {transformOrigin: '50% 100%' });
    gsap.set(lightRadius, {transformOrigin: '50% 50%' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' }});

    tl.to(ground, { autoAlpha: 1, duration: 1 })
      .fromTo(building, { y: '-=300' }, { duration: 0.2, y: '+=300', autoAlpha: 1 }, '-=0.25')
      .fromTo(plant.children, { scale: 0 }, { scale: 1, duration: 0.5, autoAlpha: 1, stagger: 0.2 })
      .fromTo(women, { x: '+=300' }, { duration: 2, x: '-=300', autoAlpha: 1 }, '-=0.5')
      .fromTo(flame, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1 })
      .fromTo(lightRadius, { scale: 0 }, { duration: 2, autoAlpha: 1, scale: 1 })
  }, []); 

  return (
    <div ref={wrapper} className="App">
      <Scene />
    </div>
  );
}

export default App;
