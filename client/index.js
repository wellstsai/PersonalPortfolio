import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

// import App from './components/App.jsx';
// import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import About from './components/About.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home}/>
    <Route path='/projects' component={Projects}/>
    <Route path='/skills' component={Skills}/>
    <Route path='/resume' component={Resume}/>
    <Route path='/about' component={About}/>
  </Router>,
  document.getElementById('app'));

let stickyTop = $('#stickyBanner').offset().top;
$(window).on( 'scroll', function(){
    if ($(window).scrollTop() >= stickyTop) {
      $('#stickyBanner').clone().addClass('clone').appendTo('.navAnchor');
      $('.clone').removeAttr('id');
      $('#stickyBanner').css({position: "fixed", top: "0px", width: "100%"});
    } else {
      $('#stickyBanner').css({position: "relative", top: "0px"});
      $('.clone').remove();
    }
  });