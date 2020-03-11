import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.min.css';
import React,{Component} from 'react';
import {FormControl} from 'react-bootstrap';
import Select from 'react-select';


var Languages=[
    {"value":"English","code":"EN"},
    {"value":"Japanese","code":"JA"},
    {"value":"Afrikaans","code":"AF"},
    {"value":"Albanian","code":"SQ"},
];


class LangSelect extends Component {

constructor(props) {
    super(props);
    this.state = {
      lang:'English',
      code:"EN"
    }

    this.onSelect2 = this.onSelect2.bind(this);
  }
  onSelect2(language) {
    this.setState({
      lang:language.value,
      code:language.code

    });
  }
  render() {
   return (
     <div>
       <h1>Language Code</h1>
       <h1>React Select2 for languages</h1>
       <Select value={this.state.lang} onChange={this.onSelect2} placeholder="select"
          options={Languages} labelKey="value" valueKey="code">
       </Select>
       <p>{this.state.lang}</p>
        <p>{this.state.code}</p>
     </div>
   )
 }
}

export default LangSelect;
