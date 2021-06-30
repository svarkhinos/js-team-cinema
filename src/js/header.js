import libraryHeaderTpl from '../templates/libraryHeaderTpl.hbs';
import getRefs from './getRefs.js';
import { onChangeCollection } from "./link-to-localstorage";
import { renderWatchedCollection,savedWatchedCollection } from "./add-watched";
import { renderQueueCollection,savedQueueCollection } from "./add-queue";
// import { renderWatchedBtn } from "./engine";

// замена кнопок sign in и my library
// const signIn = document.querySelector('[data-action="registerIn"]');
// const headerBtnSignIn = document.querySelector('[data-action="Sind-In"]');
// const headerBtnSignUp = document.querySelector('[data-action="registerUp"]');

const refs = getRefs();

function onLibraryPageClick(e) {
  e.preventDefault();
  refs.homeContainer.classList.replace('home-container', 'library-container');
  refs.homeBgcContainer.classList.replace('home-bgc-container', 'library-bgc-container');
  renderButton();
  refs.itemHome.classList.remove('current');
  refs.itemLibrary.classList.add('current');
  refs.searchResField.textContent = '';
  refs.searchInput.value = '';
  // renderWatchedBtn()
  renderWatchedCollection()
  onChangeCollection(e)
  // refs.btnHome.addEventListener('click', onHomePageClick);
  // refs.logo.addEventListener('click', onHomePageClick);
}

function renderButton() {
  const makeBtn = document.createElement('div');
  makeBtn.classList.add('btn-container');
  makeBtn.setAttribute('data-btn', 'container');
  makeBtn.insertAdjacentHTML('afterbegin', libraryHeaderTpl());
  refs.searchFilm.replaceWith(makeBtn);
  const btnRefs = getBtnCollection();
  btnRefs.watchedBtn.addEventListener('click', savedWatchedCollection);
  btnRefs.queueBtn.addEventListener('click', savedQueueCollection)

}

function getBtnCollection() {
  const refs = {
    watchedBtn: document.querySelector('.js-watched-btn'),
    queueBtn: document.querySelector('.js-watched-que') 
  }
  return refs
}

function onHomePageClick(e) {
  e.preventDefault();
  if (!refs.homeBgcContainer.classList.contains('library-bgc-container')) {
    return;
  }
  refs.homeContainer.classList.replace('library-container', 'home-container');
  refs.homeBgcContainer.classList.replace('library-bgc-container', 'home-bgc-container');
  renderSearchInput();
  onChangeCollection(e);
  refs.itemLibrary.classList.remove('current');
  refs.itemHome.classList.add('current');
}

function renderSearchInput() {
  const btnContainer = document.querySelector('[data-btn="container"]');
  btnContainer.replaceWith(refs.searchFilm);
}

// замена кнопок sign in и my library
// function onSignInBtnClick(e) {
//   refs.btnMyLibrary.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }
// function onSignUpBtnClick(e) {
//   refs.btnMyLibrary.classList.remove('visually-hidden');
//   headerBtnSignIn.classList.add('visually-hidden');
// }

refs.btnMyLibrary.addEventListener('click', onLibraryPageClick);
refs.btnHome.addEventListener('click', onHomePageClick);
refs.logo.addEventListener('click', onHomePageClick);
// signIn.addEventListener('click', onSignInBtnClick);
// headerBtnSignUp.addEventListener('click', onSignUpBtnClick);
export { renderButton, onLibraryPageClick, getBtnCollection };