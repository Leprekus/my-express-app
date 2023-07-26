const Navbar = (targetElementId="root") => {
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

// Call the Navbar function with the target element ID 'root'
interface IElement {
    element: string,
    class?: string,
    text?: string,
    attributes?: {key: string, value: string}[],
    children: IElement[]
}
class Component {

    //container: HTMLElement;
    children : IElement[];

    constructor(elements:IElement[], ) {
        //this.container = element;
        this.children = elements
    }
    customizeNode(node:HTMLElement, child:IElement) {
        //class
        node.className = child.class ?? ''
        //text
        node.textContent = child?.text ?? ''
        //attributes
        child?.attributes?.map(attribute => node.setAttribute(attribute.key, attribute.value))
        //children
        child?.children && new Component(child.children)
    }
    render() {
        const targetElement = document.getElementById("root");

        const createdChildren = this.children.map(child => {
            const node = document.createElement(child.element)
            this.customizeNode(node, child)

            return node
        })
        createdChildren.map(child => 
            targetElement?.appendChild(child))
    //targetElement && targetElement.appendChild(this.container);
    }
}
