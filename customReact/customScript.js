// A simple custom render function to mimic React's rendering behavior
function customRender(element, container) {
	const domElement = document.createElement(element.type);

	domElement.textContent = element.children;
	// domElement.setAttribute("href", props.href)
	// domElement.setAttribute("target", props.target)

	// Optimizing the above code using loop
	// This is how React handles props internally
	for (const prop in element.props) {
		if (prop === "children") continue; // Skip children prop
		domElement.setAttribute(prop, element.props[prop]);
	}

	container.appendChild(domElement);
}

// React sees the dom elements as objects with type, props and children
const reactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "Click Me",
};
// Get the root container
const rootContainer = document.querySelector("#root");

customRender(reactElement, rootContainer);
