<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@200;300;400;500;600&display=swap");

:root {
  --color: #483cf1;
  --text-color: #21212e;
  --contrast-color: #21212e;
  --weak-color: #eff3f8;
  --weak-text-color: #737380;
  --red-color: #e83f5b;

  --input-size: 2.5rem;
}

html {
  font-size: 17px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco","Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  overflow: hidden;

  background-color: var(--weak-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

p {
  font-size: 1rem;
  color: var(--text-color);
}

h1 {
  font-size: 8rem;
  font-weight: 600;
  color: var(--text-color);

  line-height: 7rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
}

h4 {
  font-size: 1.1rem;
  color: var(--contrast-color);
  font-weight: 600;
}

h5 {
  font-size: 1rem;

  font-weight: 400;

  color: var(--weak-text-color);

  transition: 0.2s;
}

h1, h2, h3, h4, h5, h6 {
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: var(--text-color);

  &:hover {
    text-decoration: underline;
  }
}

.weak {
  color: var(--weak-text-color);
}

.bold {
  font-weight: 600;
}

.text-overflow {
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon {
  width: 1.4rem;
  height: 1.4rem;

  border-radius: 0.25rem;
}

.white {
  color: white;
}

.white-filter {
  filter: invert(1);
}

.contrast-filter {
  filter: invert(6%) sepia(5%) saturate(7215%) hue-rotate(202deg)
    brightness(87%) contrast(82%);
}

.weak-text-filter {
  filter: invert(20%) sepia(4%) saturate(939%) hue-rotate(202deg)
    brightness(92%) contrast(90%);
}

.weak-filter {
  filter: invert(97%) sepia(3%) saturate(313%) hue-rotate(176deg) 
  brightness(99%) contrast(97%);
}

.color-filter {
  filter: invert(20%) sepia(4%) saturate(939%) hue-rotate(202deg)
    brightness(92%) contrast(90%);
}

.red-filter {
  filter: invert(33%) sepia(68%) saturate(4382%) hue-rotate(333deg) 
    brightness(101%) contrast(82%);
}


/* Scrollbar */
::-webkit-scrollbar {
    width: 4px; /* 1px wider than Lion. */
    /* This is more usable for users trying to click it. */
    background: white;
    -webkit-border-radius: 100px;
}

::-webkit-scrollbar-thumb:vertical {
    background: var(--contrast-color);
    -webkit-border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
    background: var(--contrast-color);
    -webkit-border-radius: 100px;
}

::-webkit-scrollbar-thumb:horizontal {
    background: var(--contrast-color);
    -webkit-border-radius: 100px;
}


textarea, input {
  border-radius: 0.25rem;
  padding: 0.5rem;

  font-family: inherit;
  font-size: 1rem;

  outline: none;
  border: 1px solid var(--weak-color);
  border-radius: 0.25rem;

  transition: 0.2s;

  resize: none;

  &:focus {
    border-color: var(--weak-text-color);
  }
}

input {
  height: var(--input-size);
}

textarea::placeholder, input::placeholder {
  color: var(--weak-text-color);
  opacity: 0.5;
}

/* File Input */
input[type=file] {
  height: auto;
  padding: 0.5rem;
  outline: none;

  &:focus {
    background: none;
  }

  &::file-selector-button {
    border: 0;
    border: 1px solid var(--weak-color);
    border-radius: 0.25rem;
    background: none;

    padding: 0.5rem 0.75rem;
    
    cursor: pointer;

    transition: 0.2s;

    margin-right: 0.5rem;

    &:hover {
      background: var(--weak-color);
      border-color: var(--contrast-color);
    }
  }
}

/* Checkbox */

input[type=checkbox]{
	height: 0;
	width: 0;
	display: none;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 3rem;
	height: 1.5rem;
	background: var(--weak-text-color);
	display: block;
	border-radius: 100px;
	position: relative;
}


label:after {
	content: '';
	position: absolute;
	top: 0.15rem;
	left: 0.2rem;

	width: 1.2rem;
	height: 1.2rem;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: var(--contrast-color);
}

input:checked + label:after {
  left: calc(100% - 0.2rem);
  transform: translateX(-100%);
}

label:active:after {
  width: 1.2rem;
}

.hide-scrollbar {
  overflow: scroll;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
}
</style>
