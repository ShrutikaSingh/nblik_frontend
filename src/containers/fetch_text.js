import React, {Component} from 'react';
class FetchText extends Component{
  constructor()
  {
    super();
    this.state={
      lang: [],
      originalSen:[],
      convertedSen:[],
    }
  }
  componentDidMount()
  {
    fetch('http://localhost:8000/getSentence/1')
    .then((response)=>response.text()
    .then((findresponse)=>{
      console.log(findresponse) /* this title is a field in the json file*/

      var obj = JSON.parse(findresponse);
      console.log(typeof(obj));
      console.log(obj)

      var original = obj.map(function (el) { return el.originalSentence; }); //this originalSentence is coming from SentenceData at sentenceControlle
      console.log(original);

      var converted = obj.map(function (el) { return el.convertedSentence; });

      var destLang = obj.map(function (el) { return el.destinationLang; });

      this.setState({
        lang:destLang,
        originalSen:original,
        convertedSen:converted,
      })
    })
  )}
  render()
  {
    return(
        <div>
          <h3>OriginalSentence</h3>
          <p> {this.state.originalSen} </p>
          <h3>Select Language</h3>
          <p> {this.state.lang} </p>
          <h3>convertedSentence</h3>
          <p style={{color:"blue"}}>{this.state.convertedSen}</p>
        </div>
    )
  }

}

export default FetchText;
