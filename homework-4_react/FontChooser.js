class FontChooser extends React.Component {

    constructor(props) {
        super(props);
        var bold;
        if (this.props.bold == 'false') {
            bold = false;
        } else {
            bold = true;
        }
        this.state = {
            checked: bold,
            bold: bold,
            hidden: true,
            reverted: false,
            fontSizeSpan: Number(this.props.size),
            fontColor: 'black',
            min: this.props.min,
            max: this.props.max
        };


    }

    toggleHidden() {

        this.setState({ hidden: !this.state.hidden });

        if (this.state.hidden === true) {
            this.setState({ hidden: false });
        } else {
            this.setState({ hidden: true });
        }

    }

    toggleBold() {

        this.setState({ bold: !this.state.bold });

        if (this.state.bold === false) {
            this.setState({ bold: true });
        } else {
            this.setState({ bold: false });
        }
    }

    decreaseButton() {

        var min = this.state.min;

        if (min <= 0) {
            min = 1;
        }

        if (Number(this.state.fontSizeSpan) > min) {
            this.setState({ fontSizeSpan: --this.state.fontSizeSpan });
        }

        if (this.state.fontSizeSpan == min) {
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

    revertDefault() {
        this.setState({ fontSizeSpan: Number(this.props.size) });
        this.setState({ fontColor: 'black' });
    }


    render() {

        var weight = this.state.bold ? 'bold' : 'normal',
            //checkedBox = this.state.checked ? true : false,
            hidden = this.state.hidden ? true : false,
            fontSizeSpan = this.state.fontSizeSpan,
            fontColor = this.state.fontColor;

        return (
            <div>
	       <input onChange={this.toggleBold.bind(this)} type="checkbox" id="boldCheckbox" hidden={hidden} checked={this.state.bold} />
	       <button onClick={this.decreaseButton.bind(this)} id="decreaseButton" hidden={hidden}>-</button>
	       <span onDoubleClick={this.revertDefault.bind(this)} style={{fontWeight:weight,fontSize: fontSizeSpan,color: fontColor}} id="fontSizeSpan" hidden={hidden}>{fontSizeSpan}</span>
	       <button onClick={this.increaseButton.bind(this)} id="increaseButton" hidden={hidden}>+</button>
	       <span onClick={this.toggleHidden.bind(this)} style={{fontWeight:weight,fontSize: fontSizeSpan}} id="textSpan">{this.props.text}</span>
	       </div>
        );
    }
}