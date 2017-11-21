class FormHelper {

    static handleInputChange(ev, stateField) {
        let target = ev.target;
        let field = target.name;
        let value = target.value;

        let myStateField = this.state[stateField];
        myStateField[field] = value;
        this.setState({stateField : myStateField});
    }
} 

export default FormHelper