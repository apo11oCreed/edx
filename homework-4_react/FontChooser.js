class FontChooser extends React.Component {

    constructor(props) {
        super(props);

        var boldCheckbox = document.getElementById('boldCheckbox'),
            decreaseButton = document.getElementById('decreaseButton'),
            increaseButton = document.getElementById('increaseButton'),
            fontSizeSpan = document.getElementById('fontSizeSpan');

        this.state = {
            checked: false,
            weight: false,
            hidden: true,
            fontSizeSpan: this.props.size,
            fontColor: 'black'
        }
    }

    toggleHidden() {

        this.setState({ hidden: !this.state.hidden });

        if (this.state.hidden == true) {
            boldCheckbox.removeAttribute('hidden');
            decreaseButton.removeAttribute('hidden');
            increaseButton.removeAttribute('hidden');
            fontSizeSpan.removeAttribute('hidden');
        } else {
            boldCheckbox.setAttribute('hidden', 'true');
            decreaseButton.setAttribute('hidden', 'true');
            increaseButton.setAttribute('hidden', 'true');
            fontSizeSpan.setAttribute('hidden', 'true');
        }

    }

    toggleBold() {
        //var boldCheckbox = document.getElementById('boldCheckbox'),
        //    textSpan = document.getElementById('textSpan');

        this.setState({ checked: !this.state.checked });

        this.setState({ weight: !this.state.weight });

        if (this.state.checked == false) {
            boldCheckbox.setAttribute('checked', 'true');
        } else {
            boldCheckbox.removeAttribute('checked');
        }
    }

    decreaseButton() {

        if (Number(this.state.fontSizeSpan) > this.props.min) {
            console.log('test2');
            this.setState({ fontSizeSpan: --this.state.fontSizeSpan });
        }

        if (this.state.fontSizeSpan == this.props.min) {
            this.setState({ fontColor: 'red' });
        } else {
            this.setState({ fontColor: 'black' });
        }
    }

    increaseButton() {

        if (Number(this.state.fontSizeSpan) < this.props.max) {
            this.setState({ fontSizeSpan: ++this.state.fontSizeSpan });
        }

        if (this.state.fontSizeSpan == this.props.max) {
            this.setState({ fontColor: 'red' });
        } else {
            this.setState({ fontColor: 'black' });
        }
    }


    render() {

        var weight = this.state.weight ? 'bold' : 'normal',
            fontSizeSpan = this.state.fontSizeSpan,
            fontColor = this.state.fontColor;

        return (
            <div>
	       <input type="checkbox" id="boldCheckbox" hidden='true' onClick={this.toggleBold.bind(this)} />
	       <button onClick={this.decreaseButton.bind(this)} id="decreaseButton" hidden='true'>-</button>
	       <span style = { { fontSize: fontSizeSpan,color: fontColor } } id="fontSizeSpan" hidden='true'>{this.state.fontSizeSpan}</span>
	       <button onClick={this.increaseButton.bind(this)} id="increaseButton" hidden='true'>+</button>
	       <span style={{fontWeight:weight}} id="textSpan" onClick={this.toggleHidden.bind(this)}>{this.props.text}</span>
	       </div>
        );
    }
}