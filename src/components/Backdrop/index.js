/* src/components/Backdrop */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import { bindListener } from 'utils';
//import { Button } from 'reactstrap';
//import { Container, Row, Col } from 'reactstrap';

export default React.createClass({
  mixins: [PureRenderMixin],

	getInitialState() {
		return {
		};
	},

  componentWillMount() {
      ss.use();
  },
  componentWillUnmount() {
      ss.unuse();
  },
	componentDidMount() {

  },

  render() {
    return (
      <div className="appBackground">

      </div>
    );
  },
});
