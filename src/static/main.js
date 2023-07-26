"use strict";
const Navbar = (targetElementId = "root") => {
    const navDesktop = document.createElement("nav");
    navDesktop.className = "desktop-nav";
    const buttonHome = document.createElement("button");
    buttonHome.textContent = "Home";
    navDesktop.appendChild(buttonHome);
    const buttonProfile = document.createElement("button");
    buttonProfile.textContent = "Profile";
    navDesktop.appendChild(buttonProfile);
    const buttonSearch = document.createElement("button");
    buttonSearch.textContent = "Search";
    navDesktop.appendChild(buttonSearch);
    const buttonNotifications = document.createElement("button");
    buttonNotifications.textContent = "Notifications";
    navDesktop.appendChild(buttonNotifications);
    const buttonMessages = document.createElement("button");
    buttonMessages.textContent = "Messages";
    navDesktop.appendChild(buttonMessages);
    const navMobileTop = document.createElement("nav");
    navMobileTop.className = "mobile-nav top";
    const buttonMobileNotifications = document.createElement("button");
    buttonMobileNotifications.textContent = "Notifications";
    navMobileTop.appendChild(buttonMobileNotifications);
    const buttonMobileMessages = document.createElement("button");
    buttonMobileMessages.textContent = "Messages";
    navMobileTop.appendChild(buttonMobileMessages);
    const navMobileBottom = document.createElement("nav");
    navMobileBottom.className = "mobile-nav bottom";
    const buttonMobileHome = document.createElement("button");
    buttonMobileHome.textContent = "Home";
    navMobileBottom.appendChild(buttonMobileHome);
    const buttonMobileProfile = document.createElement("button");
    buttonMobileProfile.textContent = "Profile";
    navMobileBottom.appendChild(buttonMobileProfile);
    const buttonMobileSearch = document.createElement("button");
    buttonMobileSearch.textContent = "Search";
    navMobileBottom.appendChild(buttonMobileSearch);
    const fragment = document.createDocumentFragment();
    fragment.appendChild(navDesktop);
    fragment.appendChild(navMobileTop);
    fragment.appendChild(navMobileBottom);
    // Get the target element by its ID and append the fragment to it
    const targetElement = document.getElementById(targetElementId);
    targetElement && targetElement.appendChild(fragment);
};
class Component {
    constructor(elements) {
        //this.container = element;
        this.children = elements;
    }
    customizeNode(node, child) {
        var _a, _b, _c;
        //class
        node.className = (_a = child.class) !== null && _a !== void 0 ? _a : '';
        //text
        node.textContent = (_b = child === null || child === void 0 ? void 0 : child.text) !== null && _b !== void 0 ? _b : '';
        //attributes
        (_c = child === null || child === void 0 ? void 0 : child.attributes) === null || _c === void 0 ? void 0 : _c.map(attribute => node.setAttribute(attribute.key, attribute.value));
        //children
        (child === null || child === void 0 ? void 0 : child.children) && new Component(child.children);
    }
    render() {
        const targetElement = document.getElementById("root");
        const createdChildren = this.children.map(child => {
            const node = document.createElement(child.element);
            this.customizeNode(node, child);
            return node;
        });
        createdChildren.map(child => targetElement === null || targetElement === void 0 ? void 0 : targetElement.appendChild(child));
        //targetElement && targetElement.appendChild(this.container);
    }
}
