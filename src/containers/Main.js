import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Comics from './../components/Comics/Comics';
import AhSchucks from './../components/Commerce/AhSchucks';
import ThankYou from './../components/Commerce/ThankYou';
import Blog from './../components/Blog/Blog';
import CreateFourLetterWord from './../components/Forms/CreateFourLetterWord';
import DetailsFourLetterWord from '../components/FourLetterWords/DetailsFourLetterWord';
import FourLetterWordForm from '../components/Forms/FourLetterWordForm';
import PrefixSuffixRootForm from '../components/Forms/PrefixSuffixRootForm';
import VerboForm from './../components/Forms/VerboForm';
import FindPalabra from '../components/Palabras/FindPalabra';
import DetailsPalabras from '../components/Palabras/DetailsPalabras';
import DetailsPrefixSuffixRoot from './../components/PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../components/Verbos/DetailsVerbo';
import UpdateFourLetterWord from './../components/Forms/UpdateFourLetterWord';
import UpdatePrefixSuffixRoot from '../components/Forms/UpdatePrefixSuffixRoot';
import FourLetterWordGame from '../components/Games/FourLetterWordGame';
import Vision from './../components/Vision/Vision';

const routes = [
  {
    path: '/thank-you',
    component: ThankYou
  },
  {
    path: '/ah-schucks',
    component: AhSchucks
  },
  {
    path: '/comics/i-think-very-deeply',
    component: Comics
  },
  {
    path: '/comics',
    component: Comics
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/words/four-letter-word/new',
    component: FourLetterWordForm
  },
  {
    path: '/words/prefix-suffix-roots/new',
    component: PrefixSuffixRootForm
  },
  {
    path: '/words/verbos/new',
    component: VerboForm
  },
  {
    path: '/words/four-letter-word',
    component: DetailsFourLetterWord
  },
  {
    path: '/words/verbo',
    component: DetailsVerbo
  },
  {
    path: '/words/random-palabras',
    component: DetailsPalabras
  },
  {
    path: '/words/prefix-suffix-root',
    component: DetailsPrefixSuffixRoot
  },
  {
    path: '/words/find-palabra',
    component: DetailsPalabras
  },
  {
    path: '/games/four-letter-word',
    component: FourLetterWordGame
  },
  {
    path: '/words/four-letter-words/edit',
    component: FourLetterWordForm
  },
  {
    path: '/words/prefix-suffix-roots/edit',
    component: PrefixSuffixRootForm
  },
  {
    path: '/words/verbos/edit',
    component: VerboForm
  },
  {
    path: '/vision',
    component: Vision
  }
]

class Main extends Component {

  render() {


    return (
      <div className="Main">
        <Switch>
          { routes.map(({ path, component: C, data }) => (
            <Route
              key= { C }
              path={ path }
              render={ (props) => <C
                { ...props }
                onDeleteBlog={ this.props.onDeleteBlog }
                onLoadBlogPost={ this.props.onLoadBlogPost }
                onLoadBlogPosts={ this.props.onLoadBlogPosts }
                onSavePost={ this.props.onSavePost }
                onLoadPalabra={ this.props.onLoadPalabra }
                onLoadRandomPalabra={ this.props.onLoadRandomPalabra }
                onShowEnglish={ this.props.onShowEnglish }
                data={ this.props } /> }
              />
          ))}
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main);
