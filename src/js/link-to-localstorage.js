import {renderButton} from "./header";
// import { renderWatchedBtn, renderQueueBtn } from "./engine";
import getRefs from "./getRefs";
import { renderQueueCollection } from "./add-queue";
import { renderWatchedCollection } from "./add-watched";
// import { homeLinkIsActive, libraryLinkIsActive } from "./activeMenuLink";
// import renderSearchInput from "./renderSearchInput";

const refs = getRefs()

const Link = {
  HOME: 'home-bgc-container',
  LIBRARY: 'library-bgc-container',
};

let linkData = '';
const onChangeCollection = e => { 
    if (e.target.classList.contains('js-library')) {
        linkData = Link.LIBRARY;
        refs.homeBgcContainer.classList.replace(Link.HOME, Link.LIBRARY);
        
    } else {
        linkData = Link.HOME;
        refs.homeBgcContainer.classList.replace(Link.LIBRARY, Link.HOME);
    };
    
    localStorage.setItem('link', linkData);  
};

const savedLink = () => {
    const currentLink = localStorage.getItem('link');
    refs.homeBgcContainer.classList.add(currentLink);
    if (currentLink === Link.LIBRARY) {
        refs.filmGallery.innerHTML = '';
        refs.containerWatchedFilms.innerHTML = ' ';
        // renderWatchedBtn()
        renderButton();
        renderWatchedCollection()
        refs.itemHome.classList.remove('current');
        refs.itemLibrary.classList.add('current');
    }
    else {
        refs.itemLibrary.classList.remove('current');
        refs.itemHome.classList.add('current');
    };
};

export { onChangeCollection, savedLink };

