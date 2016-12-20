import { CardPanel, Row, Col, Chip } from 'react-materialize';
import React, { Component, PropTypes } from 'react';

/// Populates the data rendered when Navigation bar is clicked --- for text
class GetData_Text extends Component {
  render () {
    let lang = {
      ReactJS: "https://facebook.github.io/react/img/logo.svg",
      NodeJS: "http://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      HapiJS: "https://raw.githubusercontent.com/hapijs/hapi/master/test/file/image.jpg",
      Python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
      Haskell: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/2000px-Haskell-Logo.svg.png",
      Java: "https://www.seeklogo.net/wp-content/uploads/2011/06/java-logo-vector.png",
    };

    return(
      <div>
        {this.props.chips ?
          <div>
            <br />
            Favorite Languages:
            <Row>
              <Col s={12}>
                {Object.keys(lang).map((key, idx) =>
                  <Chip>
                    <img src={lang[key]} />
                    {key}
                  </Chip>
                )}
              </Col>
            </Row>
          </div>
          :
          <div />
        }
        {Object.keys(this.props.selectedObj).map((key,idx) =>
          <CardPanel key={this.props.selectedKey + '_' + key}>
            <b>{key}</b>
            <br />
            <div dangerouslySetInnerHTML={ { __html:this.props.selectedObj[key]} }/>
          </CardPanel>
        )}
      </div>
    );
  }
}

GetData_Text.defaultProps = {
    chips: false
};

export default GetData_Text;