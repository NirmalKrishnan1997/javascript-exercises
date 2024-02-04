const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.classList.add('red-para');
redPara.textContent = 'Hey I’m red!';
redPara.style.color = 'red';

container.appendChild(redPara);

const blueHeading = document.createElement('h3');
blueHeading.classList.add('blue-heading')
blueHeading.textContent = 'I’m a blue h3!';
blueHeading.setAttribute('style', 'color: blue');

container.appendChild(blueHeading);

const subContainer = document.createElement('div');
subContainer.classList.add('sub-container');
subContainer.style.cssText = 'border: solid black; background-color: pink';

const heading = document.createElement('h1');
heading.textContent = 'I’m in a div';

const para = document.createElement('p');
para.textContent = 'ME TOO!';

subContainer.append(heading, para);

container.appendChild(subContainer);