'use strict';

var HelloReact = React.createClass({
  render() {
    return (
      <div className="container">{this.props.name}</div>
    );
  }
});

React.render(<HelloReact name="" />, document.getElementById("react"));

/**
 * codeのfadeIn, fadeOut
 */
var playground = document.querySelector(".playground");

playground.addEventListener("click", function(ev){
	let target = ev.target
	if (target.classList.contains('step-num')){
		let elitem = target.parentElement.nextSibling.nextSibling;
		let elmark = target.childNodes[0];

		if (elitem.classList.contains("is-open")) {
			elitem.classList.remove("is-open");
			elmark.classList.remove("fa-minus-square");
			elmark.classList.add("fa-plus-square");
		} else {
			elitem.classList.add("is-open");
			elmark.classList.remove("fa-plus-square");
			elmark.classList.add("fa-minus-square");
		}
	}
});