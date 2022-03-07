// components
import Footer from 'components/Footer/Footer.index';
import Comments from 'components/CommentsContainer/CommentsContainer.index';

// styles
import GlobalStyles from 'styles/Global.styles';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
