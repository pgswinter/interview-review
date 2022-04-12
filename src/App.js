import React from 'react';
import './App.css';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
  const mostUpvoted = articles.concat().sort((a,b) => b.upvotes-a.upvotes);
  const mostRecent = articles.concat().sort((a,b) => new Date(b.date) - new Date(a.date));

  const [data, setData] = React.useState(mostUpvoted);

  const [upvoted, setUpvoted] = React.useState(false)
  const [recent, setRecent] = React.useState(false)

  function handleSortUpvoted() {
    return () => {
      setData(mostUpvoted)
    }
  }

  function handleSortRecent() {
    return () => {
      setData(mostRecent)
    }
  }

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
        <button onClick={handleSortUpvoted()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
        <button onClick={handleSortRecent()} data-testid="most-recent-link" className="small">Most Recent</button>
      </div>
      <Articles data={data} />
    </div>
  );

}

export default App;


// import React from 'react';
// import './App.css';

// import Slides from './components/Slides';
// const title = "Slideshow App";

// function App({slides}) {
//     return (
//         <div>
//             <h8k-navbar header={title}></h8k-navbar>
//             <div className="App">
//                 <Slides slides={slides} />
//             </div>
//         </div>
//     );
// }

// export default App;
