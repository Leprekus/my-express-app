export const Navbar = () => {
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
  
    return fragment;
  };
  