import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Blog from './../components/Blog/Blog';
import CreateFourLetterWord from './../components/Forms/CreateFourLetterWord';
import PrefixSuffixRootForm from '../components/Forms/PrefixSuffixRootForm';
import VerboForm from './../components/Forms/VerboForm';
import FindPalabra from '../components/Palabras/FindPalabra';
import DetailsPalabras from '../components/Palabras/DetailsPalabras';
import DetailsPrefixSuffixRoot from './../components/PrefixSuffixRoots/DetailsPrefixSuffixRoot';
import DetailsVerbo from '../components/Verbos/DetailsVerbo';
import UpdateFourLetterWord from './../components/Forms/UpdateFourLetterWord';
import UpdatePrefixSuffixRoot from '../components/Forms/UpdatePrefixSuffixRoot';
import FourLetterWordGame from '../components/Games/FourLetterWordGame';

const routes = [
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/words/new/four-letter-word',
    component: CreateFourLetterWord
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
    component: DetailsPalabras
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
    path: '/words/update/four-letter-word',
    component: UpdateFourLetterWord
  },
  {
    path: '/words/prefix-suffix-roots/edit',
    component: PrefixSuffixRootForm
  },
  {
    path: '/words/verbos/edit',
    component: VerboForm
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
