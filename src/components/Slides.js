import React from 'react';

function Slides({ slides }) {
  const [active, setActive] = React.useState(0);
  const [currentItem, setCurrentItem] = React.useState(0);

  React.useEffect(() => {
    setCurrentItem(slides.filter((_, index) => index === active)[0])
  }, [active]);

  function handleNext() {
    return (e) => {
      e.preventDefault();
      setActive(active + 1);
    }
  }
  function handlePrev() {
    return (e) => {
      e.preventDefault();
      setActive(active - 1);
    }
  }
  function handleRestart() {
    return (e) => {
      e.preventDefault();
      setActive(0);
    }
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button onClick={handleRestart()} data-testid="button-restart" className="small outlined" disabled={active === 0 ? true : false}>Restart</button>
        <button onClick={handlePrev()} data-testid="button-prev" className="small" disabled={active === 0 ? true : false}>Prev</button>
        <button onClick={handleNext()} data-testid="button-next" className="small" disabled={(active === slides.length - 1) ? true : false}>Next</button>
      </div>
      <div id={`slide`} className={`card text-center`}>
        <h1 data-testid="title">{currentItem.title}</h1>
        <p data-testid="text">{currentItem.text}</p>
      </div>

    </div>
  );

}

export default Slides;
