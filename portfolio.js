var React     = require("react");
var ReactDOM  = require("react-dom");
var Boot      = require("react-bootstrap");
var data      = require("./data.json");
//var percent   = require("/tmp/accumulatedUsage.json");
var jQuery    = require("jquery");

/// Populates the data rendered when Navigation bar is clicked --- for text
var GetData_Text = React.createClass({
  getInitialState: function () {
    return {
      mouseHover:-1
    }
  },

  MouseOver: function (idx) {
    this.setState({
      mouseHover:idx
    });
  },

  MouseOut: function(evt) {
    this.setState({
      mouseHover:-1
    });
  },

  render: function() {
    if (!data.hasOwnProperty(this.props.selectedKey)) {return null}
    return(
      <Boot.Table bordered condensed align="center">
        <thead>
          <tr>
            <th style={{
              backgroundColor:"#F26E26"
            }}>
              OID Name
            </th>
            <th style={{
              backgroundColor:"#F26E26"
            }}>
              OID
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data[this.props.selectedKey]).map( (key,idx) =>
            <tr eventKey={idx} onMouseOver={this.MouseOver.bind(null, idx)} onMouseOut={this.MouseOut} style={{backgroundColor:idx === this.state.mouseHover ? "#F26E26" : ""}}>
              <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                <b>{key}</b>
              </td>
              <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                <b><font color="black">
                  {data[this.props.selectedKey][key]}
                </font></b>
              </td>
            </tr>
          )}
        </tbody>
      </Boot.Table>
    );
  }
});

/// Populates the data rendered when Navigation bar is clicked --- for hyperlinks
var GetData_Hyperlink = React.createClass({
  getInitialState: function () {
    return {
      mouseHover:-1
    }
  },

  MouseOver: function (idx) {
    this.setState({
      mouseHover:idx
    });
  },

  MouseOut: function(evt) {
    this.setState({
      mouseHover:-1
    });
  },

  render: function() {
    if (!data.hasOwnProperty(this.props.selectedKey)) {return null}
    return(
      <Boot.Table bordered condensed align="center">
        <thead>
          <tr>
            <th style={{
              backgroundColor:"#F26E26"
            }}>
              Name
            </th>
            <th style={{
              backgroundColor:"#F26E26"
            }}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data[this.props.selectedKey]).map( (key,idx) =>
            <tr eventKey={idx} onMouseOver={this.MouseOver.bind(null, idx)} onMouseOut={this.MouseOut} style={{backgroundColor:idx === this.state.mouseHover ? "#F26E26" : ""}}>
              <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                <b>{key}</b>
              </td>
              <td textAlign="center" width="50%" style={{paddingBottom:"10px"}}>
                <b><a href={data[this.props.selectedKey][key]} target="_blank" style={{color:"black"}}>
                  {data[this.props.selectedKey][key]}
                </a></b>
              </td>
            </tr>
          )}
        </tbody>
      </Boot.Table>
    );
  }
});

/// Populates the data rendered when Navigation bar is clicked --- for multiple hyperlinks
var GetData_Hyperlink_Multiple = React.createClass({
  getInitialState: function () {
    return {
      mouseHover:-1,
      mouseHoverI:-1
    }
  },

  MouseOver: function (idx, iidx) {
    this.setState({
      mouseHover:idx,
      mouseHoverI:iidx
    });
  },

  MouseOut: function(evt) {
    this.setState({
      mouseHover:-1,
      mouseHoverI:-1
    });
  },

  getTableCell: function(idx, iidx, key, jsonLen) {
    if(key.length > iidx) {
      return(
        <td textAlign="center" width={(100 / jsonLen).toString() + "%"} eventKey={""+idx+iidx} onMouseOver={this.MouseOver.bind(null, idx, iidx)} onMouseOut={this.MouseOut} style={{
          paddingBottom:"10px",
          backgroundColor:(idx === this.state.mouseHover) ? (iidx === this.state.mouseHoverI ? "#F26E26" : "") : ""
        }}>
          <b><a href={key[iidx][1]} target="_blank" style={{color:"black"}}>
            {key[iidx][0]}
          </a></b>
        </td>
      )
    }
    else {
      return(
        <td textAlign="center" width={(100 / jsonLen).toString() + "%"} eventKey={""+idx+iidx} onMouseOver={this.MouseOver.bind(null, idx, iidx)} onMouseOut={this.MouseOut} style={{
          paddingBottom:"10px",
          backgroundColor:(idx === this.state.mouseHover) ? (iidx === this.state.mouseHoverI ? "#F26E26" : "") : ""
        }}></td>
      )
    }
  },

  render: function() {
    // Check if navigation bar has been clicked
    if (!data.hasOwnProperty(this.props.selectedKey)) {return null}

    var jsonLen = Object.keys(data[this.props.selectedKey]).length

    // Convert JSON to flat array of JSON to fit in the table
    var tableArray = []
    Object.keys(data[this.props.selectedKey]).map( (key,idx,thisArray) => {
      tableArray.push([])
      Object.keys(data[this.props.selectedKey][key]).map( (ikey,iidx,ithisArray) =>
        tableArray[idx].push([ikey, data[this.props.selectedKey][key][ikey]])
      )
    })

    var longest = 0
    for(var i = 1;i < jsonLen;i++) {
      longest = tableArray[longest].length > tableArray[i].length ? longest : i
    }

    return(
      <Boot.Table bordered condensed align="center">
        <thead>
          <tr>
            {Object.keys(data[this.props.selectedKey]).map( (key,idx) =>
              <th style={{
                backgroundColor:"#F26E26"
              }}>
                {key}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableArray[longest].map( (key,iidx,ithisArray) => 
            <tr>
              {tableArray.map( (cVal,idx,thisArray) =>
                this.getTableCell(idx,iidx,cVal,jsonLen)
              )}
            </tr>
          )}
        </tbody>
      </Boot.Table>
    );
  }
});

/// Populates the data rendered when Navigation bar is clicked --- for servers
var GetData_Servers = React.createClass({
  getInitialState: function () {
    return {
      mouseHover:-1,
      mouseHoverI:-1,
      mouseHoverO:-1,
    }
  },

  MouseOver: function (idx, iidx, oidx) {
    this.setState({
      mouseHover:idx,
      mouseHoverI:iidx,
      mouseHoverO:oidx
    });
  },

  MouseOut: function(evt) {
    this.setState({
      mouseHover:-1,
      mouseHoverI:-1,
      mouseHoverO:-1
    });
  },

  ajaxQuery: function(index, ele) {
    jQuery.ajax({
      url: ele.getAttribute("data-url"),
      dataType: 'jsonp',
      data: {},
      type: 'GET',
      crossDomain: true,
      async: true,
      timeout: 10000,
      success: function (data, status, xhr, xmlHttpRequest, responseXML) {
        ele.setAttribute("style", "background-color: #F26E26; color: DarkGreen; font-weight: bold;")
        //ele.innerText = "UP"
      },
      error: function (xhr, ajaxOptions, thrownError) {
        if(xhr.status === 200) {
          ele.setAttribute("style", "background-color: #F26E26; color: DarkGreen; font-weight: bold;")
          //var first = ele.innerText.split(' ')[0]
          //ele.innerText = first + " UP"
        }
        else {
          ele.setAttribute("style", "background-color: #F26E26; color: DarkRed; font-weight: bold;")
          //var first = ele.innerText.split(' ')[0]
          //ele.innerText = first + " Down"
        }
      }
    })
  },

  getTableCell: function(idx, iidx, key, jsonLen, okey, oid) {
    if(key.length > iidx) {
      return(
        <td textAlign="center" width={(100 / jsonLen).toString() + "%"} eventKey={""+idx+iidx+oid} onMouseOver={this.MouseOver.bind(null, idx, iidx, oid)} onMouseOut={this.MouseOut} style={{
          paddingBottom:"10px",
          backgroundColor:(idx === this.state.mouseHover) ? (iidx === this.state.mouseHoverI ? (oid === this.state.mouseHoverO ? "#F26E26" : "") : "") : ""
        }}>
          <a href={key[iidx][1]} target="_blank" style={{
            display:"block", 
            color:"black",
            height:"100%"
          }}><b>
            {key[iidx][0]}
          </b></a>
        </td>
      )
    }
    else {
      return(
        <td textAlign="center" width={(100 / jsonLen).toString() + "%"} eventKey={""+idx+iidx+oid} onMouseOver={this.MouseOver.bind(null, idx, iidx, oid)} onMouseOut={this.MouseOut} style={{
          paddingBottom:"10px",
          backgroundColor:(idx === this.state.mouseHover) ? (iidx === this.state.mouseHoverI ? (oid === this.state.mouseHoverO ? "#F26E26" : "") : "") : ""
        }}></td>
      )
    }
  },

  getTable: function(table, id, okey) {
    var jsonLen = table.length

    var tableArray = []
    Object.keys(table).map( (key,idx,thisArray) => {
      tableArray.push([])
      Object.keys(table[key]).map( (ikey,iidx,ithisArray) => 
        tableArray[idx].push([ikey, table[key][ikey]])
      )
    })

    var longest = 0
    for(var i = 1;i < jsonLen;i++) {
      longest = tableArray[longest].length > tableArray[i].length ? longest : i
    }

    return(
      <tbody>
        {tableArray[longest].map( (key,iidx,ithisArray) => 
          <tr>
            {tableArray.map( (cVal,idx,thisArray) =>
              this.getTableCell(idx,iidx,cVal,jsonLen,okey,id)
            )}
          </tr>
        )}
      </tbody>
    )
  },

  render: function() {
    // Check if navigation bar has been clicked
    if (!data.hasOwnProperty(this.props.selectedKey)) {return null}

    return(
      <div>
        {Object.keys(data[this.props.selectedKey]).map( (okey,oidx) =>
          <div>
            <h3 style={{
              textAlign:"center"
            }}>{okey}</h3>
            <Boot.Table bordered condensed align="center">
              <thead>
                <tr>
                  {Object.keys(data[this.props.selectedKey][okey]).map( (key,idx) =>
                    <th className="statusLabel" data-url={data[this.props.selectedKey][okey][key][Object.keys(data[this.props.selectedKey][okey][key])[0]]} style={{
                      backgroundColor:"#F26E26"
                    }}>
                      {key}
                    </th>
                  )}
                </tr>
              </thead>
              {this.getTable(data[this.props.selectedKey][okey],oidx,okey)}
            </Boot.Table>
          </div>
        )}
      </div>
    );
  },

  componentDidMount: function() {
    jQuery(".statusLabel").each(this.ajaxQuery)
    setInterval( () => jQuery(".statusLabel").each(this.ajaxQuery), 1000*60*2)
  }
});

/// Controller to pass the navigated data to the correct component in order to render it properly
var GetData_Controller = React.createClass({
  render: function () {
    switch (this.props.selectedKey) {
      case "SCH OID's":
        return(<GetData_Text selectedKey={this.props.selectedKey} />)
      case "IHE Reference Documentation":
        return(<GetData_Hyperlink selectedKey={this.props.selectedKey} />)
      case "Tools":
        return(<GetData_Hyperlink_Multiple selectedKey={this.props.selectedKey} />)
      case "Netscaler":
        return(<GetData_Hyperlink selectedKey={this.props.selectedKey} />)
      case "Servers":
        return(<GetData_Servers selectedKey={this.props.selectedKey} />)
      case "IHE Endpoints":
        return(<GetData_Hyperlink_Multiple selectedKey={this.props.selectedKey} />)
      case "Downloads":
        return(<GetData_Hyperlink selectedKey={this.props.selectedKey} />)
      default:
        return(null)
    }
  }
});

/// Navigation Bar
var Navigation = React.createClass({
  getInitialState: function () {
    return {
      selectedKey:0,
      mouseHover:0
    }
  },

  OnSelect: function(key, evt) {
    this.setState({
      selectedKey:key
    });
  },

  MouseOver: function (evt) {
    this.setState({
      mouseHover:evt.target.innerHTML
    });
  },

  MouseOut: function(evt) {
    this.setState({
      mouseHover:0
    });
  },

  render: function() {
    return(
      <div>
        <Boot.Navbar>
          <Boot.Nav bsStyle="pills" activeKey={this.state.selectedKey} onSelect={this.OnSelect} style={{
            width:"100%",
            textAlign:"center"
          }}>
            {Object.keys(data).map( (key,idx) =>
              <Boot.NavItem eventKey={key} onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} style={{
                float:"none",
                display:"inline-block",
                backgroundColor:key === this.state.mouseHover ? "#F26E26" : ""
              }}>
                {key}
              </Boot.NavItem>
            )}
          </Boot.Nav>
        </Boot.Navbar>
        <GetData_Controller selectedKey={this.state.selectedKey} />
      </div>
    );
  }
});

/// A component for the Seattle Children's Hospital logo
const profPic = (
  <a href="http://child.childrens.sea.kids" target="_blank" style={{
    width:"35%",
    display:"block",
    margin:"auto"
  }} >
    <Boot.Image src="./new_prof_pic.jpg" responsive rounded />
  </a>
);

/// Main div for the page
var HomePage = React.createClass({
  render: function () {
    return(
      <div style={{
        background:"#1181AA",
        margin:"0px 0px 0px 0px",
        padding:"0px 0px 0px 0px",
        font:"normal 90% arial,helvetica,sans-serif",
        verticalAlign:"top",
        height:"100%",
        minHeight:window.innerHeight + 'px'
      }} >
        <br />
        {profPic}
        <br />
        <Navigation />
        <br />
        
      </div>
    );
  }
});

// Start rendering the page
ReactDOM.render(
  <HomePage selectedIndex={0}/>,
  document.getElementById("container")
);
